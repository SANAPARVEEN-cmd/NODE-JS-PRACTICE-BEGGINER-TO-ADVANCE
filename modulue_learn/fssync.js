const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./te/first.txt', 'utf8');

const second = readFileSync('./te/second.txt', 'utf8');

console.log(first , second);

writeFileSync('./te/result.txt' , `here is the result : ${first} , ${second}`, {flag:'a'});