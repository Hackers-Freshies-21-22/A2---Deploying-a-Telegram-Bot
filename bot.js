const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook https://api.telegram.org/bot1928355698:AAGhQC-xDoTW0zxgxDQuQ6xayjACQEDDFyQ/setWebhook?url=https://immense-escarpment-36150.herokuapp.com/

function processUpdate(body) {
  sendPhoto(body.message.chat.id,body.message.text);
}
function sendPhoto(chatId,text){
  var data = {
    "chat_id": chatId,
    "text": text,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AArrow-right-small.svg&psig=AOvVaw2kN0giXxl4UuyWjcggL1yf&ust=1631717969095000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDJ_aPd_vICFQAAAAAdAAAAABAD":"image",
    "parse_mode": "Markdown",
}
// function sendText(chatId, text) {
//   var data = {
//     "chat_id": chatId,
//     "text": text,
//     "parse_mode": "Markdown",
//   };
  const res = axios.post(`${telegramUrl}/sendPhoto`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

module.exports.processUpdate = processUpdate;