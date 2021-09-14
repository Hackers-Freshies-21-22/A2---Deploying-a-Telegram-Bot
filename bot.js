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
  sendPhoto(body.message.chat.id, body.message.photo);
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

// function sendPhoto(chatId, text) {
//   var data = {
//     "chat_id": chatId,
//     "photo" : "https://telegram.org/img/t_logo.png",
//     "parse_mode": "Markdown",
//   };
//   const res = axios.post(`${telegramUrl}/sendPhoto`, data);
//   res.then(response => {
//     return response;
//   }).catch(err => console.log(err));
// }

function sendPhoto(chatId, photo) {
  const token = "https://api.telegram.org/bot1978424816:AAFG8d6tFpLg_Hx22bBl-AD_CInMDyeQcbs/getFile?file_id=";
  const url = token.concat(photo[0].file_id);
  // "https://api.telegram.org/file/bot1978424816:AAFG8d6tFpLg_Hx22bBl-AD_CInMDyeQcbs/".concat(url.result.file_path),
  var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};
  const result = getJSON(url, function(err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      return data;
    }
  });
  var data = {
    "chat_id": chatId,
    "text" : result,
    "parse_mode": "HTML",
  };
  const res = axios.post(`${telegramUrl}/sendMessage`, data);
  res.then(response => {
    return response;
  }).catch(err => console.log(err));
}

module.exports.processUpdate = processUpdate;