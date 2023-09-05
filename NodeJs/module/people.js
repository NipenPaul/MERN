const people = ['nipen', 'paul', 174038];
const a = 6;
function test(){
    console.log("test");
}

console.log(module);
//module.exports = people;
module.exports = {
    people,
    a,
    test,
};
