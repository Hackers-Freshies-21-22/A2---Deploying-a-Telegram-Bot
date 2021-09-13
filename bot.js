const token = process.env.TELEGRAM_TOKEN;
var telegramUrl = "https://api.telegram.org/bot" + token;

const axios = require('axios');

console.log(`Bot started in the ${process.env.NODE_ENV} mode`);

//setWebhook(telegramUrl + "/setWebhook?url=https://leeyi45-bot.herokuapp.com/");

function processUpdate(body) {
	const message = body.message.text;
	
	function getMessageLength() {
		return "Length of the message is ${message.length}";
	}
	
	function getUppercase() {
		return message.toUpperCase();
	}
	
	function getReversed() {
		return message.split('').reverse().join('');
	}
	
	function getIsPalindrome() {
		function helper() {
			for(let i = 0; i < Math.floor(message.length / 2); i++) {
				if(message.charAt(i) !== message.charAt(message.length - 1)) {
					return false;
				}
			}
			return true;
		}
		
		return "${message} is${(getIsPalindrome() ? '': ' not')} a palindrome";
	}
	
	let reply = {
		getMessageLength(),
		getUppercase(),
		getReversed(),
		getIsPalindrome()
	}
	
	sendText(body.message.chat.id, reply.join('\n'));
  
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