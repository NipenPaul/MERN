const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/user', (req, res) =>{
    res.format({
        'text/plain': ()=>{
            res.send("This is Text format");
        },

        'text/html': () =>{
            res.render('index',{
                name: "Render Function"
            });
        },

        'application/json': ()=>{
            res.json({
                name: "Nipen",
                Id: 38
            });
        },
        default: ()=>{
            res.status(406).send('Not Acceptable!');
        }
    });
});

app.listen(3000, () =>{
    console.log('listening on port 3000');
})