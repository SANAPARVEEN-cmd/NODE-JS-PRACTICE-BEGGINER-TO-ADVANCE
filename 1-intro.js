const amount =   10;
if(amount <10){
    console.log('small amount');
}else{
    console.log('large amount');
}

console.log('hey! its my first node app!!!');



// GLOBALS  - NO WINDOW !!!!!
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);



// ---setinterval 
setInterval(()=>{
 console.log("hello world");
},1000)
// ---settimeout
setTimeout(()=>{
    console.log("hi");
},1000)