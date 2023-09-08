class Employee{
    // this is the constructor function
    constructor(firstName, lastName){
        this.studentId = 174038;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // show the all value..
    display(){
        console.log("\nStudent ID = "+ this.studentId);
        console.log("First Name = " + this.firstName);
        console.log("Last Name = " + this.lastName);
    }
}
// Create a object for Employee class
const emp = new Employee("Nipen", "Paul");
emp.display();


// Inheritance Employee class
class Company extends Employee{
    constructor(firstName, lastName, companyName){
        // this is super keyword for using parents class constructor
        super(firstName, lastName);
        this.companyName = companyName;
    }
    displayCompany(){
        console.log("Company name = "+this.companyName + "\n");
    }
}
const com = new Company("Papon", "Pal", "No Company");
com.display();
com.displayCompany();