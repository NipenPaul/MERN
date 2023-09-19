const express = require('express');

const app = express();

app.get('/test', (req, res) =>{
    res.send("This is Test");
    res.end();
});

app.get('/user', (req, res) =>{
    res.redirect('/test');
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})