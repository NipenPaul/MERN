const express = require('express');

const app = express();

app.get('/user', (req, res) =>{
   res.send("With data send..");
   
   // without data send..
   res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})