/* 
Title: Uptime Monitoring Aplication
Description: A RESTFul API to monitor up or down time of user defined links
Authors: Nipen Paul
Date: Sep 10, 2023
 */

// Dependencies
const http = require('http');

// App object - module scafolding
const app = {};

// Configuration
app.config = {
    port: 3000
};

// create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () =>{
        console.log(`listening to port ${app.config.port}`);
    });
}
// handle Request Response
app.handleReqRes = (req, res) =>{
    // response handle
    res.end('Hello Nipen Paul');
}

// start the server
app.createServer();