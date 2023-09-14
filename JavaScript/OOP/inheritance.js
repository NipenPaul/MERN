class Moment extends Date{
    constructor(){
        super();
    }
}
const moment = new Moment();
console.log("Current Date: "+ moment.getDate() + '-' + moment.getMonth() + '-' + moment.getFullYear());

// Class Bike 
class Bike{
    constructor(){
        this.company = "Honda";
    }
}

class Vehicle extends Bike{
    constructor(name, price){
        super();
        this.name = name;
        this.price = price;
    }
}

const vehicle = new Vehicle("Hero", 100000);
console.log("\nCompany: "+vehicle.company);
console.log("Name: "+vehicle.name);
console.log("Price: "+vehicle.price);



// Constructor function
function Bike2(company){
    this.company = company;
}

Bike2.prototype.getCompany = function(){
    return this.company;
}

// Another Constructor function
function Vehicle2(name, price){
    this.name = name;
    this.price = price;
}

const bike2 = new Bike2("Yamma");
Vehicle2.prototype = bike2;
const vehicle2 = new Vehicle2("A-60", 200000);
console.log("\nCompany: "+vehicle2.company);
console.log("Name: "+vehicle2.name);
console.log("Price: "+vehicle2.price);