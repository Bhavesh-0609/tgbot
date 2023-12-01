const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the actual bot token obtained from BotFather
const bot = new TelegramBot('6924982118:AAGRog3n29_KiY1i7hAMk0r_FGwUnNwh8Ow', { polling: true });

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
