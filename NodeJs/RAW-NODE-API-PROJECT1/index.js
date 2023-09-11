/* 
Title: Uptime Monitoring Aplication
Description: A RESTFul API to monitor up or down time of user defined links
Authors: Nipen Paul
Date: Sep 10, 2023
 */

// Dependencies
const http = require('http');
const url = require('url');

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
    // request handling
    // get the url and parse
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    // reguler expresion for using url first and last not / to path name
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // response handle
    res.end('Hello Nipen Paul, How are you?');
}

// start the server
app.createServer();