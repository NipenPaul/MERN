const express = require('express');

const app = express();

const adminRoute = express.Router();

adminRoute.post('/dashboard', (req, res) =>{
    console.log(req.method);
    res.send('We are in Admin Dashboard');
});
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) =>{
    console.log(req.method);
    res.send('Hello!');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})