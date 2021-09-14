const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');
const { text } = require('express');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook https://api.telegram.org/bot1928355698:AAGhQC-xDoTW0zxgxDQuQ6xayjACQEDDFyQ/setWebhook?url=https://immense-escarpment-36150.herokuapp.com/

function processUpdate(body) {
  sendPhoto(body.message.chat.id,body.message.photo);
}
function sendPhoto(chatId, photo) {
  var data = {
    "chat_id": chatId,
    " https://telegram.org/img/t_logo.png": photo,
    "text":text,
    "parse_mode": "Markdown",
  };
  const res = axios.post(`${telegramUrl}/sendPhoto`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}
// function sendText(chatId, text) {
//   var data = {
//     "chat_id": chatId,
//     "text": text,
//     "parse_mode": "Markdown",
//   };
//   const res = axios.post(`${telegramUrl}/sendMessage`, data);
//   res.then(response => {
//     return response;
//   }).catch(err => console.log(err));
// }

module.exports.processUpdate = processUpdate;