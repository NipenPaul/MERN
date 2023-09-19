const express = require('express');

const app = express();

app.get('/user', (req, res) =>{
    res.json({
        country: "Bangladesh",
        name: "Nipen Paul",
    });
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})