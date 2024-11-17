const axios = require('axios');
const fs = require('fs');
const path = require('path');
const NodeCache = require('node-cache');
const Post = require('../models/Post');
const { ACCESS_TOKEN, GROUP_ID } = process.env;
const FILE_PATH = path.join(__dirname, '..', '..', 'client', 'src', 'data', 'posts.json');
const myCache = new NodeCache({ stdTTL: 300 });

const removeLinksFromText = (text) => {
  if (!text) return text;
  return text.replace(/\[id\d+\|([^\]]+)\]/g, '$1');
};

exports.getPosts = async (req, res) => {
  try {
    const cacheKey = 'vk_posts';
    const cachedData = myCache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const posts = await Post.find({});
    const postsJSON = posts.map(post => post.toObject());

    const filteredPosts = postsJSON.filter(post => {
      return post.photoUrls && post.photoUrls.length > 0 && post.text && !/\[club\d+\|/.test(post.text);
    });

    myCache.set(cacheKey, filteredPosts);
    res.json(filteredPosts);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
};

const checkForNewPosts = async () => {
  try {
    const response = await axios.get(`https://api.vk.com/method/wall.get`, {
      params: {
        owner_id: `-${GROUP_ID}`,
        count: 100,
        access_token: ACCESS_TOKEN,
        v: '5.131'
      }
    });

    const posts = response.data.response.items;
    const postsWithPhotos = await Promise.all(posts.map(async post => {
      const textWithoutLinks = removeLinksFromText(post.text);
      if (post.attachments) {
        const photoAttachments = post.attachments.filter(attachment => attachment.type === 'photo');
        const photoUrls = photoAttachments.map(photo => photo.photo.sizes.pop().url);
        return { ...post, text: textWithoutLinks, photoUrls };
      }
      return { ...post, text: textWithoutLinks };
    }));

    const bulkOps = postsWithPhotos.map(post => ({
      updateOne: {
        filter: { id: post.id },
        update: post,
        upsert: true
      }
    }));

    await Post.bulkWrite(bulkOps);

    const filteredPosts = postsWithPhotos.filter(post => {
      return !post.attachments || !post.attachments.some(attachment => attachment.type === 'video');
    });

    const firstFivePosts = filteredPosts.slice(0, 6);

    fs.writeFileSync(FILE_PATH, JSON.stringify(firstFivePosts, null, 2));

    myCache.set('vk_posts', postsWithPhotos);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};

setInterval(checkForNewPosts, 30000);
