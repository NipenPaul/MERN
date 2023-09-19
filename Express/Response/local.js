const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/user', (req, res) =>{
    res.render('index',{
        name: "Nipen Paul",
    });
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})