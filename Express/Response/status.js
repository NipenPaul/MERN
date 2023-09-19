const express = require('express');

const app = express();

app.get('/user', (req, res) =>{
    // res.status(200);
    // res.end();
    res.sendStatus(200);
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})