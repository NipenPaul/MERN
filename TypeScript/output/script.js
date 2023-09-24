"use strict";
// first
console.log("Hello, Nipen");
// Type
function multipy(a, b) {
    return a * b;
}
console.log(multipy(34.51, 56));
let arr = ["Hello"];
arr.push(", Nipen");
// arr.push(2); given error, because it's not string type
console.log(arr);
let arr2 = ['Nipen', 38, true, {}];
arr2.push(39);
arr2.push("Paul");
arr2.push(false);
arr2.push({ Name: 'Nipen' });
// we can't push other types data
console.log(arr2);
let Name = "Nipen Paul";
console.log(Name);
let num = 456;
let ok = true;
let num2 = 100000000000000000000000000000000000000000000000000;
console.log(num2);
// Array decalare
// **Number**
let arrNum = [];
arrNum.push(34);
arrNum.push(23);
console.log(arrNum);
// **String**
let arrStr = [];
arrStr.push("Nipen");
arrStr.push("Paul");
console.log(arrStr);
// String and Number Union array
let arrNumStr = [];
arrNumStr.push(38);
arrNumStr.push("Nipen Paul");
// object
let people;
people = {
    name: "Nipen Paul",
    id: 38,
    adult: true
};
console.log(people);
// math equation
let a = 23;
let resf = Math.floor(a / 2);
let resc = Math.ceil(a / 2);
console.log(resf);
console.log(resc);
console.log(Math.round(2.6));
console.log(Math.round(2.49));
// any type
let varAny;
varAny = "StringData";
varAny = 34;
varAny = true;
// any type or dynamic type
let arrAny = [];
arrAny.push(23);
arrAny.push("Bangladesh");
console.log(arrAny);
// Function of typeScript
let myFun1;
myFun1 = function () {
    console.log("myFun1");
};
console.log(myFun1);
myFun1();
const myFun2 = (a, b) => {
    return a + b;
};
console.log(myFun2(14, 45));
const myFun3 = function (a, b) {
    return a + b;
};
console.log(myFun3("14", "45"));
const myFun4 = function (a, b) {
    return a + b;
};
console.log(myFun4("14", "45"));
const myFun5 = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(myFun5("14", "456"));
const myFun6 = function (a, b, c = 14) {
    console.log(c);
    return a + b;
};
console.log(myFun6("14", "1"));
function myFun7(a, b, c = 14) {
    console.log(c);
    return a + b;
}
console.log(myFun7("14", "1"));
const userDetails = (id, user) => {
    console.log(`Id = ${id}, user name: ${user.name}, user age: ${user.age}`);
};
userDetails(38, { name: "Nipen", age: 25 });
// Function Signatures
let calculation;
calculation = (x, y, c) => {
    if (c === 'add') {
        return x + y;
    }
    else if (c === 'minus') {
        return x - y;
    }
    else if (c === 'mul') {
        return x - y;
    }
    else {
        return x / y;
    }
};
console.log(calculation(5, 4, "add"));
console.log(calculation(5, 4, "adds")); // div
// class of  typescript
class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInformation() {
        console.log(`Name: ${this.name}\n`);
        console.log(`Age: ${this.age}\n`);
        console.log(`Country: ${this.country}\n`);
    }
}
const player1 = new Player("Nipen", 25, "Bangladesh");
const player2 = new Player("Kane", 35, "New Zeland");
player1.playerInformation();
player2.playerInformation();
const arrClass = [];
arrClass.push(player1);
arrClass.push(player2);
console.log(arrClass);
// Access Modifiers
class PlayerTwo {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInformation() {
        console.log(`Name: ${this.name}\n`);
        console.log(`Age: ${this.age}\n`);
        console.log(`Country: ${this.country}\n`);
    }
}
const playerTwo1 = new PlayerTwo("Nipen", 25, "Bangladesh");
const playerTwo2 = new PlayerTwo("Kane", 35, "New Zeland");
// playerTwo1.age = 27; // can not use, beacuse it's private data
// playerTwo1.country = "Ban"; // can not write, it's readOnly data
console.log('\n' + playerTwo1.name);
// console.log(playerTwo1.age); // can't access
console.log(playerTwo1.country);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    return width * length;
}
let threeDoptions = {
    width: 30,
    length: 20,
    height: 10
};
drawRectangle(threeDoptions);
// GENERICS 1
const addID = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addID({
    name: "Nipen",
    age: 25,
});
console.log("ID = " + user.id);
const responseT = {
    status: 200,
    type: 'Good',
    data: {
        name: 'Nipen',
        others: 7,
    }
};
// Enum
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["FORBIDEN"] = 2] = "FORBIDEN";
})(RType || (RType = {}));
;
const respones1 = {
    status: 200,
    type: RType.SUCCESS,
    data: 'test'
};
// tuples
let tup = [4, "Ni", { name: "NP" }];
// oder so important
