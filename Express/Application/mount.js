
const express = require('express');

const app = express();
const admin = express();

admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
});

admin.get('/dashboard', (req, res) =>{
    console.log(admin.mountpath);
    res.end('Welcome to admin dashboard');
});
app.get('/', (req, res) =>{
    res.send('Welcome to application home');
});
app.use('/admin', admin);

app.listen(3000, () =>{
    console.log('listening on port 3000');
});