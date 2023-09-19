const e = require('express');
const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res, next) =>{
    fs.readFile('/file-does-not-exit', (err, data) =>{
        if(err){
            next(err);
        }else{
            res.send(data);
        }
    });
});

/// user not found 404
app.use((req, res, next) =>{
    console.log('I am not calling.')
    res.status(404).send('Requested Url not found!');
    next();
});

app.use((err, req, res, next) =>{
    if(res.headersSent){
        next('There was a problem!');
    }else{
        if(err.message){
            res.status(500).send(err.message);
        }else{
            res.status(500).send('There was an error!');
        }
    }
});

app.listen(3000, ()=>{
    console.log('lisiting port on 3000');
});