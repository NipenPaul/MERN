/*
* Title: Exploring Express Method
* Description: Exploring Express Method json
* Author: Nipen Paul
* Date: 2023-09-18
* 
*/

const express = require('express');

const app = express();
const port = 3000;

// Content-Type = application/json
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('This the home page.');
});

app.post('/', (req, res) =>{
    console.log(req.body);
    console.log(typeof req.body);
    console.log(req.body.name);
    console.log(req.body.age);
    res.send('This is the home page using post method')
});

app.listen(port, ()=>{
    console.log(`Lisiting on port: ${port}`);
});