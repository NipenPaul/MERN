const http = require('http');

const server = http.createServer(function(req, res){
    if(req.url === '/'){
        res.write('Hello Nipen,');
        res.write('How are you?');
        res.end();
    } else if(req.url == '/about'){
        res.write('This is about us page');
        res.end();
    }else{
        res.write('Not found');
        res.end();
    }
});
server.listen(3000);
console.log('listening on port 3000');