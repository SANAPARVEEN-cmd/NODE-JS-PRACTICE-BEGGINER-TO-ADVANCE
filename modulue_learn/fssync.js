const {readFileSync , writeFileSync} = require('fs');

const first = readFileSync('./te/first.txt', 'utf8');

const second = readFileSync('./te/second.txt', 'utf8');

console.log(first , second);

writeFileSync('./te/result.txt' , `here is the result : ${first} , ${second}`, {flag:'a'});

//line by line exexution of code is done in synchronous method.
// we use sychronous method to read and write files in node js. synchronous methods block the execution of code until the operation is completed. this means that the program will wait for the file to be read or written before moving on to the next line of code. this can be useful in certain situations where you need to ensure that a file is fully read or written before proceeding, but it can also lead to performance issues if used excessively, especially in a server environment where multiple requests may be handled simultaneously.