/* 
Title: Project Initial file
Description: Initial file to start to the node server and workers
Authors: Nipen Paul
Date: 2023-09-18
 */

// Dependencies
const server = require('./lib/server');
const workers = require('./lib/worker')


// App object - module scafolding
const app = {};

app.init = () =>{
    // start the server
    server.init();

    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;