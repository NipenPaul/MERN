const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/user', (req, res) =>{
    console.log(res.headersSent);
    res.render('index',{
        name: "Nipen Paul",
    });
    console.log(res.headersSent);
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})