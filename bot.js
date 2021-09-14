const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook https://api.telegram.org/bot1928355698:AAGhQC-xDoTW0zxgxDQuQ6xayjACQEDDFyQ/setWebhook?url=https://immense-escarpment-36150.herokuapp.com/

function processUpdate(body) {
  sendText(body.message.chat.id,body.message.image);
}

function sendText(chatId, image) {
  var data = {
    "chat_id": chatId,
    "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg": image,
    "parse_mode": "Markdown",
  };
  const res = axios.post(`${telegramUrl}/sendMessage`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

module.exports.processUpdate = processUpdate;