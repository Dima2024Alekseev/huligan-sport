const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
const PORT = 5000;
const myCache = new NodeCache({ stdTTL: 300 }); // Кэширование данных на 5 минут

const ACCESS_TOKEN = 'vk1.a.nfKxegYTWlNG2h3IYzPTP14vzl8uHlTwCYDuV5UhawZOCmurpKdalIwt7S5ytObFIYBvhM4uJsPjjBRe_lKdzgaWcisHWd2IZHC_-QYBZeR-OWFVGFb7Hu3WlGCdOCJFnnK1jcZsYyo5oFj5GI5qbjfnUa5S-5ZQDi7FumjdUQwwbjxiiCNA0xvuOz2NmBcT7_IfnUt4YvFAxVpKJLe3fw';
const GROUP_ID = '216523190';

app.use(cors());

app.get('/api/posts', async (req, res) => {
  try {
    const cacheKey = 'vk_posts';
    const cachedData = myCache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const response = await axios.get(`https://api.vk.com/method/wall.get`, {
      params: {
        owner_id: `-${GROUP_ID}`,
        count: 10, // Количество постов для получения
        access_token: ACCESS_TOKEN,
        v: '5.131'
      }
    });

    const posts = response.data.response.items;
    const postsWithPhotos = await Promise.all(posts.map(async post => {
      if (post.attachments) {
        const photoAttachments = post.attachments.filter(attachment => attachment.type === 'photo');
        const photoUrls = photoAttachments.map(photo => photo.photo.sizes.pop().url);
        return { ...post, photoUrls };
      }
      return post;
    }));

    myCache.set(cacheKey, postsWithPhotos);
    res.json(postsWithPhotos);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});