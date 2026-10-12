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
