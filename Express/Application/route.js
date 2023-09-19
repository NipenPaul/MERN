
const express = require('express');

const app = express();


app.route('/about/mission')
    .get((req, res) =>{
        res.send('Welcome to application home get');
    })
    .put((req, res) =>{
        res.send('Welcome to application home put');
    })
    .post((req, res) =>{
        res.send('Welcome to application home post');
    });

app.listen(3000, () =>{
    console.log('listening on port 3000');
});