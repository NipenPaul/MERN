/* 
Title: Uptime Monitoring Aplication
Description: A RESTFul API to monitor up or down time of user defined links
Authors: Nipen Paul
Date: Sep 10, 2023
 */

// Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');
const environement = require('./helpers/environments');
const data = require('./lib/data');

// App object - module scafolding
const app = {};

// Configuration

// app.config = {
//     port: 3000
// };

// testing file system
// @TODO: after remove it..

// test write 
data.create('test', 'newFile', {'name': 'Bangladesh', 'language':'Bangla'}, (err) =>{
    console.log('Error was: ', err);
})

// test read
data.read('test', 'newFile', (err, result) =>{
    console.log(err, result);
});

// test update

data.update('test', 'newFile', {name: 'Nipen', language: 'English'}, (err)=>{
    console.log(err);
});

// test delete file

// data.delete('test', 'newFile', (err) =>{
//     console.log(err);
// });



// create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    // server.listen(app.config.port, () =>{
    //     ///console.log(`Environment variable is ${process.env.NODE_ENV}`);
    //     console.log(`listening to port ${app.config.port}`);
    // });

    server.listen(environement.port, () =>{
        console.log(`listening to port ${environement.port}`);
    });
}
// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();