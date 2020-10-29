const readingTime = require('reading-time');
export default (content) => readingTime(content).text.replace('read', 'de lectura');
