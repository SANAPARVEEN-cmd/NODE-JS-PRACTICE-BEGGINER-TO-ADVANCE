// const http = require('http');

// const server = http.createServer((req,res)=>{
//     console.log(req);
// res.write(`<h1>welcome to my first server</h1>`);
// res.end();
// }).listen(5000);




const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } 
    else if (req.url === '/about') {
        res.end('Welcome to our about page');
    } 
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">Back home</a>
        `);
    }
});

server.listen(5600, () => {
    console.log('Server is listening on port 5600...');
});
