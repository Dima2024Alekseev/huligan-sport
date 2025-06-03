// const Application = require('../models/Application');
// const TelegramBot = require('node-telegram-bot-api');

// const token = process.env.TELEGRAM_BOT_TOKEN;
// const bot = new TelegramBot(token, { polling: true });

// const submitApplication = async (req, res) => {
//   const { name, lastname, phone, age, direction, recaptchaResponse } = req.body;

//   try {
//     // Динамический импорт node-fetch
//     const fetch = (await import('node-fetch')).default;

//     // Проверка reCAPTCHA
//     const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
//     const recaptchaVerification = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaResponse}`, {
//       method: 'POST',
//     });
//     const recaptchaData = await recaptchaVerification.json();
//     if (!recaptchaData.success) {
//       console.error('reCAPTCHA verification failed:', recaptchaData);
//       return res.status(400).send('reCAPTCHA verification failed');
//     }

//     // Проверка возраста
//     if (age < 3 || age > 60) {
//       return res.status(400).send('Возраст должен быть в диапазоне от 3 до 60 лет');
//     }

//     // Проверка наличия заявки
//     const existingApplication = await Application.findOne({ phone });
//     if (existingApplication) {
//       return res.status(400).send('Заявка с этим номером телефона уже существует');
//     }

//     // Создание новой заявки
//     const newApplication = new Application({ name, lastname, phone, age, direction });
//     await newApplication.save();

//     const message = `Новая заявка:\nИмя: ${name}\nФамилия: ${lastname}\nТелефон: ${phone}\nВозраст: ${age}\nНаправление: ${direction}`;

//     bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message)
//       .then(() => {
//         res.status(200).send('Заявка успешно отправлена');
//       })
//       .catch((error) => {
//         console.error('Ошибка при отправке сообщения в Telegram:', error);
//         res.status(500).send('Ошибка при отправке заявки');
//       });
//   } catch (error) {
//     console.error('Ошибка при обработке заявки:', error);
//     res.status(500).send('Ошибка при обработке заявки');
//   }
// };

// module.exports = { submitApplication };
