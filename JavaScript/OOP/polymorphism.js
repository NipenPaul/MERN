// 1. Compile-time Polymorphism

// a. Function Overloadding 
function add(x, y){
    return x + y;
}
function add(x, y, z){
    return x + y + z;
}
console.log(add(5, 9)); // NaN (Because the second add function overwrote the first one)
console.log(add(2, 5, 8)); // 15

// Solution
function add2(x, y, z){
    if(z !== undefined){
        return x + y + z;
    }else{
        return x + y;
    }
}
console.log(add2(5, 9)); // 14
console.log(add2(2, 5, 8)); // 15


// b. Operator Overloading:

function Vector(x, y){
    this.x = x;
    this.y = y;
}

Vector.prototype.add = function(vector2){
    return new Vector(this.x + vector2.x, this.y + vector2.y);
}

const vec1 = new Vector(2, 3);
const vec2 = new Vector(4, 5);
const vec3 = vec1.add(vec2);
console.log(vec3);


// 2. Runtime Polymorphism:

// a. Method Overriding:

class Animal{
    makeSound(){
        console.log("Generic Animal Sound!");
    }
}

class Dog extends Animal{
    makeSound(){
        console.log("Bark!");
    }
}

const animal = new Animal();
animal.makeSound();

const dog = new Dog();
dog.makeSound();

// b. Duck Typing:

class Bird{
    fly(){
        console.log("I can fly..");
    }
}

class Airplane{
    fly(){
        console.log("I can also fly..");
    }
}

function makeSomethingsFly(flyingThing){
    flyingThing.fly();
}

const bird = new Bird();
const airplane = new Airplane();
makeSomethingsFly(bird);
makeSomethingsFly(airplane);