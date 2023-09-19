
const express = require('express');

const app = express();

app.enable('case sensitive routing');

app.disable('case sensitive routing');

app.get('/', (req, res) =>{
    res.send('Welcome to application home');
});
app.get('/About', (req, res) =>{
    res.send('Welcome to application about');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});