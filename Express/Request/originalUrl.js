const express = require('express');

const app = express();

const adminRoute = express.Router();

adminRoute.get('/dashboard', (req, res) =>{
    console.log(req.originalUrl);
    console.log(req.url);
    res.send('We are in Admin Dashboard');
});
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) =>{
    console.log(req.originalUrl);
    console.log(req.url);
    res.send('Hello!');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})