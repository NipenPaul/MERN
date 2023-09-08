function Employee(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
// using protoype by function 
Employee.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}
// anoother way to use prototype..
Employee.prototype.company = "No Company";

const emp = new Employee("Nipen", "Paul");
console.log(emp.fullName());
console.log(emp.company);