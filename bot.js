const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook https://api.telegram.org/bot1928355698:AAGhQC-xDoTW0zxgxDQuQ6xayjACQEDDFyQ/setWebhook?url=https://immense-escarpment-36150.herokuapp.com/

function processUpdate(body) {
  var splitstring = body.message.text.split("");
  var reversestring = splitstring.reverse();
  var joinstring = reversestring.join("");
  sendText(body.message.chat.id,joinstring);
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

module.exports.processUpdate = processUpdate;