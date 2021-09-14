const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

// setWebhook https://api.telegram.org/bot1978424816:AAFG8d6tFpLg_Hx22bBl-AD_CInMDyeQcbs/setWebhook?url=https://eusoff-hackers.herokuapp.com/

// String methods
var Message = function(message) {
  this.length = message.length;
  this.uppercase = message.toUpperCase();
  this.reverse = Array.from(message).reverse().join('');
  this.palindrome = message === Array.from(message).reverse().join('');
}

// Bot analyses textbody and run the return text function.
function processUpdate(body) {
  sendPhoto(body.message.chat.id, body.message.text);
}

function sendText(chatId, text) {
  var data = {
    "chat_id": chatId,
    "text": text,
    "parse_mode": "Markdown",
  };
  const res = axios.post(`${telegramUrl}/sendMessage`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

function sendPhoto(chatId, text) {
  var data = {
    "chat_id": chatId,
    "photo" = 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    "caption" = text,
    "parse_mode": "Markdown",
  };
  const res = axios.post(`${telegramUrl}/sendMessage`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

// function echoPhoto(chatId, text) {
//   var data = {
//     "chat_id": chatId,
//     "photo" = 'https://source.unsplash.com/random/1080x1920',
//     "caption" = text,
//     "parse_mode": "Markdown",
//   };
//   const res = axios.post(`${telegramUrl}/sendMessage`, data);
//   res.then(response => {
//     return response;
//   }).catch(err => console.log(err));
// }

module.exports.processUpdate = processUpdate;