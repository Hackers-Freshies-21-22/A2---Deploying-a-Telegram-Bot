const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');
const { text } = require('express');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook https://api.telegram.org/bot1928355698:AAGhQC-xDoTW0zxgxDQuQ6xayjACQEDDFyQ/setWebhook?url=https://immense-escarpment-36150.herokuapp.com/

function processUpdate(body) {
  var file_id = body["message"]["photo"];
  return sendEchoPhoto(body.message.chat.id,body.message.photo);
}
function sendEchoPhoto(chatId, file_id){
  var data ={
    "chat_id": chatId,
    "text": file_id
  };
  const res = axios.post(`${telegramUrl}/sendText`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

function sendPhoto(chatId, text) {
  var data = {
    "chat_id": chatId,
    "photo":photo,
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