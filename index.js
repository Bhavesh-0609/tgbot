const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000; // Replace with your desired port

// Replace 'YOUR_BOT_TOKEN' with the actual bot token obtained from BotFather
const botToken = '6924982118:AAGRog3n29_KiY1i7hAMk0r_FGwUnNwh8Ow';
const bot = new TelegramBot(botToken, { webhook: { port } });

// Parse incoming JSON requests
app.use(bodyParser.json());

// Handle incoming updates from Telegram
app.post(`/bot${botToken}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Set the webhook for the bot
bot.setWebHook(`https://tg-calling-bot.onrender.com/bot${botToken}`);

// Listen for incoming text messages
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am your bot. Send me a message, and I will echo it back to you.');
});

// Listen for incoming text messages
bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Echo back the received message
  bot.sendMessage(chatId, `You said: ${messageText}`);
});
