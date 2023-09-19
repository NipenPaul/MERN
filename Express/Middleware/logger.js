const express = require('express');

const app = express();

const logger = (req, res, next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - 
    ${req.method} - ${req.originalUrl}
    ${req.ip}  ${req.protocol}`);
    next();
};

app.use(logger);

app.get('/about', (req, res) =>{
    res.send('This is About..')
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})