const express = require('express');

const app = express();

const adminRouter = express.Router();

const logger = (req, res, next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - 
    ${req.method} - ${req.originalUrl}
    ${req.ip}  ${req.protocol}`);
    throw new Error('This is an error!');
};

adminRouter.use(logger);

adminRouter.get('/dashboard', (req, res) =>{
    res.send('Dashboard');
});

app.use('/admin', adminRouter);

app.get('/about', (req, res) =>{
    res.send('This is About..')
    res.end();
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})

const errorMiddleware = (err, req, res, next) =>{
    console.log(err.message);
    res.status(500).send('There was a server side error!');
};

adminRouter.use(errorMiddleware);