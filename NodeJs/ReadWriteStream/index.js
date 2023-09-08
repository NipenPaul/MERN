const fs = require('fs');

// const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// readStream.on('data', function(chunk){
//     //console.log(chunk);
//     console.log(chunk.toString());
// });

// const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

// readStream.on('data', function(data){
//     console.log(data);
// });

const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write(`
        <html>
            <head> 
                <title> Form </title>
            </head>
            <body>
                <form method = "post" action="/process">
                    <input name="message" />
                </form>
            </body>
        </html>
        `);
        res.end();
    }else if(req.url === '/process' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
           // console.log(chunk);
            // console.log(chunk.toString());
            body.push(chunk);
        });
        req.on('end', ()=>{
            console.log('stream finished..');
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        });
        res.write("This is process page..");
        res.end();
    }else{
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);