const express = require('express');

const app = express();

const firstMiddleware = (req, res, next)=>{
    console.log('I am login Middleware..');
    next();
};

app.use(firstMiddleware);

app.get('/about', (req, res) =>{
    res.send('This is About..')
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})