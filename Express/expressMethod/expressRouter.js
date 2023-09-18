/*
* Title: Exploring Express Method
* Description: Exploring Express Method Router
* Author: Nipen Paul
* Date: 2023-09-18
* 
*/

const express = require('express');

const app = express();
const port = 3000;

//const router = express.Router();
const router = express.Router({
    caseSensitive: true
});
app.use(router);

router.get('/About', (req, res) =>{
    res.send('This the home page.');
});

router.post('/', (req, res) =>{
    res.send('This is the home page using post method')
});

app.listen(port, ()=>{
    console.log(`Lisiting on port: ${port}`);
});