const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const app = express();


app.use('/', publicRouter);
app.use('/admin', adminRouter);

app.listen(3000, ()=>{
    console.log('lisiting port on 3000');
});