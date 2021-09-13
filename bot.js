const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

// setWebhook https://api.telegram.org/bot1978424816:AAFG8d6tFpLg_Hx22bBl-AD_CInMDyeQcbs/setWebhook?url=https://eusoff-hackers.herokuapp.com/

function processUpdate(body) {
  sendText(body.message.chat.id, body.message.text);
}

function sendText(chatId, text) {
  var data = {
    "chat_id": chatId,
    "text": text,
    "parse_mode": "Markdown",
  };
  const res = axios.post(`${telegramUrl}/sendMessage`, data);
  res.then(response => {
    return "Hi";
  }).catch(err => console.log(err));
}

module.exports.processUpdate = processUpdate;