
const express = require('express');

const app = express();

// access all method like get, post, put..
app.all('/', (req, res) =>{
    res.send('Welcome to application home');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});