/*
* Title: Exploring Express Method
* Description: Exploring Express Method static
* Author: Nipen Paul
* Date: 2023-09-18
* 
*/

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/`, {
    index: 'home.html'
}));

app.get('/', (req, res) =>{
    res.send('This the home page.');
});

app.post('/', (req, res) =>{
    res.send('This is the home page using post method')
});

app.listen(port, ()=>{
    console.log(`Lisiting on port: ${port}`);
});