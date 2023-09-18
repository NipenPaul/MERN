/*
* Title: Server Liray
* Description: Server realted files
* Author: Nipen Paul
* Date: 2023-09-18
* 
*/

// Dependencies
const http = require('http');
const {handleReqRes} = require('../helpers/handleReqRes');


// Server object - module scafolding
const server = {};

// configuration
server.config = {
    port: 3000,
};


// create server
server.createServer = () =>{
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(server.config.port, () =>{
        console.log(`listening to port ${server.config.port}`);
    });
}
// handle Request Response
server.handleReqRes = handleReqRes;

// start the server
server.init = () =>{
    server.createServer();
}

// export
module.exports = server;