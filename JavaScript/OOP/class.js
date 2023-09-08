class Employee{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    show(){
        console.log("ID = " + this.id);
        console.log(`Name = ${this.name}`);
    }
}

const emp = new Employee(174038, 'Nipen Paul');
emp.show();

// Another way to class declare..
var Emp = class{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    show(){
        console.log("ID = " + this.id);
        console.log(`Name = ${this.name}`);
    }
}

var emp2 = new Employee(174038, 'Nipen Paul');
emp2.show();