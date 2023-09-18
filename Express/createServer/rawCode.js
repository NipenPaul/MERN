/*
* Title: Try to Create http Server
* Description: Create http Sever for rewrite same things express js in index.js file
* Author: Nipen Paul
* Date: 2023-09-18
* 
*/

const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('This is home page');
        res.end();
    }else if(req.url == '/about' && req.method === 'GET'){
        res.write("This is about page.");
        res.end();
    }else{
        res.write('Not found!');
        res.end();
    }
});
server.listen(3000);
console.log('Lisiting on port: 3000');