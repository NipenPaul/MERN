const express = require('express');

const app = express();

const adminRouter = express.Router();

const logger = (req, res, next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - 
    ${req.method} - ${req.originalUrl}
    ${req.ip}  ${req.protocol}`);
    next();
};

adminRouter.use(logger);

adminRouter.get('/dashboard', (req, res) =>{
    res.send('Dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) =>{
    res.send('This is About..')
    //res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})