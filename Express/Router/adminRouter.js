const express = require('express');

const addminRouter = express.Router();

addminRouter.get('/', (req, res) =>{
    res.send('admin dashboard');
    res.end();
});

addminRouter.get('/login', (req, res) =>{
    res.send('admin login');
    res.end();
});

module.exports = addminRouter;