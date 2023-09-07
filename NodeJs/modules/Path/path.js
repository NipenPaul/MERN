const path = require('path');
const myPath = "/Nodejs/Modules/path.js";

console.log(path.delimiter);
console.log(myPath);
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));

var obj = {dir: '/Nodejs/Modules', base:'path.js'};
var p = path.format(obj);
console.log(p);
