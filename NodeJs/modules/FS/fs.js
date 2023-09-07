const fs = require('fs');

fs.writeFileSync('myfile.txt', 'Hello, Nipen Paul!');
fs.appendFileSync('myfile.txt', ' How are you?');

// const data = fs.readFileSync('myfile.txt');
// console.log(data); // return buffer data
// console.log(data.toString()); // convert buffer to string

// const data = fs.readFile('myfile.txt', function(err, data){
//     console.log(data.toString());
// });
// console.log('Before..');

// same as AsSync function short from..

const data = fs.readFile('myfile.txt', (err, data) =>{
    console.log(data.toString());
});
console.log('Before..');