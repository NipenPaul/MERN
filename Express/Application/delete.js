
const express = require('express');

const app = express();

// delete rquest to access
app.delete('/', (req, res) =>{
    res.send('Welcome to application home by using delete method');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
});