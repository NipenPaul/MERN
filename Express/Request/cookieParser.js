const express = require('express');
const cookiesParser = require('cookie-parser');

const app = express();

const adminRoute = express.Router();

app.use(express.json());
app.use(cookiesParser());

adminRoute.get('/dashboard', (req, res) =>{
    res.send('We are in Admin Dashboard');
});
app.use('/admin', adminRoute);

app.get('/user/:id', (req, res) =>{
    res.send('Hello!');
});

app.post('/user/', (req, res) =>{
    console.log(req.cookies);
    res.send('Hello!');
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})