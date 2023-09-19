
const express = require('express');

const app = express();

app.param('id', (req, res, next, id) =>{
    const user = {
        userId: id,
        name: 'Nipen Paul',
    };
    req.userDetails = user;
    next();
});

app.get('/user/:id', (req, res) =>{
    console.log(req.userDetails);
    res.send('Welcome to application home');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});