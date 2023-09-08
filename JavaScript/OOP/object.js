// Java Object by objecct literal
const object = {id:174038, name: 'Nipen Paul', cgpa: 3.08};
console.log("ID = " + object.id);
console.log("Name = "+ object.name);
console.log("CGPA = "+object.cgpa);


// By Creating instance object..
const object2 = new Object();
object2.id = 17403800;
object2.name = 'Paul';
object2.cgpa = 3.08;

console.log("\nID = " + object2.id);
console.log("Name = "+ object2.name);
console.log("CGPA = "+object2.cgpa);



// By using an Object Constructor
function objecct3(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}
ob3 = new objecct3(173085, 'Nipen Paul', 0.00);
console.log("\nID = " + ob3.id);
console.log("Name = "+ ob3.name);
console.log("Salary = "+ ob3.salary);