const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output.txt`);

readStream.on('data', (chunk)=>{
    writeStream.write(chunk);
});

// same as before on function..

//readStream.pipe(writeStream);