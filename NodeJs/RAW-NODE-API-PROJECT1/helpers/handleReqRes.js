/* 
Title: Handle Request Response
Description: handle request response
Authors: Nipen Paul
Date: Sep 10, 2023
 */

// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../route');
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler');


// module scaffolding
const handler = {};


// handle Request Response
handler.handleReqRes = (req, res) =>{
    // request handling
    // get the url and parse
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    // reguler expresion for using url first and last not / to path name
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // method catch get or post
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath]: notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload)=>{
        statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
        payload = typeof(payload) === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);
        
        // return the final respone
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) =>{
        realData += decoder.write(buffer);
    });
    req.on('end', ()=>{
        realData += decoder.end();
        console.log(realData);
        res.end("Response End..")
    });

    // response handle
    //res.end('Hello Nipen Paul, How are you?');
}

// exports
module.exports = handler;