const express = require('express');

const publicRouter = express.Router();

publicRouter.param((param, option) =>(req, res, next, val) =>{
    //console.log(option);
   // console.log(val);
    if(val === option){
        console.log('Param is working...');
        next();
    }else{
        res.sendStatus(400);
    }
});

publicRouter.param('user', '12');

publicRouter.get('/:user', (req, res) =>{
    res.send('hello user admin..');
});

publicRouter.get('/', (req, res) =>{
    res.send('Home');
    res.end();
});

publicRouter.get('/login', (req, res) =>{
    res.send('public login');
    res.end();
});

const log = (req, res, next) =>{
    console.log('I am loging something..');
    next();
};

publicRouter.all('*', log);

module.exports = publicRouter;