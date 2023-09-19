/*
* Title: Application Expreess
* Description: Application Express
* Author: Nipen Paul
* Date: 2023-09-19
* 
*/
const handle = require('./handle');
const express = require('express');

const app = express();

app.locals.title = 'My App';

app.get('/', handle);

app.listen(3000, () =>{
    console.log('listening on port 3000');
});