const express = require('express');

const app = express();

app.get('/user', (req, res) =>{
    res.cookie('CookieName:', 'TestCookie');
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})