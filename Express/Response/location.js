const express = require('express');

const app = express();

app.get('/user', (req, res) =>{
    res.location('/testLocation');
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})