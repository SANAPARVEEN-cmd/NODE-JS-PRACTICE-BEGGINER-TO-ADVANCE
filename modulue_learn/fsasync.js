const {readFile , writeFile} = require('fs');


readFile('./te/first.txt','utf8' ,(err ,result) =>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
readFile('./te/second.txt','utf8' ,(err ,result)=>{
    if(err){
        console.log(err);
        return;
    }
})
const second = result;
writeFile('./te/result.txt' , `here is the result : ${first} , ${second}`, {flag:'a'},(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
console.log(result);
})


})

// dont wait for a line to execute it do another task
// we use asynchronous method to read and write files in node js. asynchronous methods do not block the execution of code, allowing other operations to continue while the file is being read or written. this can improve performance in situations where multiple requests may be handled simultaneously, as it allows the program to continue executing other code while waiting for the file operation to complete. however, it can also make the code more complex, as you need to handle callbacks or promises to ensure that the file operation is completed before proceeding with other code that depends on the result of that operation.