const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Post = require('./src/models/Post');

const app = express();
const PORT = 5000;
const myCache = new NodeCache({ stdTTL: 300 }); // Кэширование данных на 5 минут

const ACCESS_TOKEN = 'vk1.a.JRi3rpmUhtiZ8X3cPmNGdiwy3C7xhbHSI76u110imU2VsgD99A-C1bkAtC5Xs1V9-KAn-armltwY4qcc8crO-5YXZIKwBpskmG9kjV7iBLMRwXC_lRCTH9tToNVo81AdDgPC839c3W6pZKvh1MIF_Uff-G88i_TISVdZbDHzRa-FKpgoWx6v2G1o4SWXS0nhI7UHFyXyX0K8rFkaCNh4JA';
const GROUP_ID = '216523190';
const FILE_PATH = path.join(__dirname, 'src', 'data', 'posts.json'); // Обновленный путь
const db = 'mongodb+srv://user:qaz123@cluster0.gc2mk.mongodb.net/news?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(db)
  .then(() => console.log('Соединенние с БД установленно'))
  .catch((error) => console.log(error));

app.use(cors());

const removeLinksFromText = (text) => {
  if (!text) return text;
  return text.replace(/\[id\d+\|([^\]]+)\]/g, '$1');
};

app.get('/api/posts', async (req, res) => {
  try {
    const cacheKey = 'vk_posts';
    const cachedData = myCache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const posts = await Post.find({});
    const postsJSON = posts.map(post => post.toObject()); // Преобразование объектов Mongoose в простые объекты JavaScript
    myCache.set(cacheKey, postsJSON);
    res.json(postsJSON);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

// Функция для периодической проверки новых новостей
const checkForNewPosts = async () => {
  try {
    const response = await axios.get(`https://api.vk.com/method/wall.get`, {
      params: {
        owner_id: `-${GROUP_ID}`,
        count: 100, // Количество постов для получения
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

    // Обновление или вставка данных в MongoDB
    const bulkOps = postsWithPhotos.map(post => ({
      updateOne: {
        filter: { id: post.id },
        update: post,
        upsert: true
      }
    }));

    await Post.bulkWrite(bulkOps);

    // Отфильтровать и ограничить количество постов
    const firstFivePosts = postsWithPhotos.slice(0, 10);

    // Запись данных в файл
    fs.writeFileSync(FILE_PATH, JSON.stringify(firstFivePosts, null, 2));

    myCache.set('vk_posts', postsWithPhotos); // Кэширование данных
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};

// Запуск периодической проверки новых новостей каждые 30 секунд
setInterval(checkForNewPosts, 30000);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
