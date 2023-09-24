// first
console.log("Hello, Nipen");


// Type
function multipy(a: number, b: number){
    return a*b;
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
arr2.push({Name: 'Nipen'});
// we can't push other types data
console.log(arr2);

let Name: string = "Nipen Paul";

console.log(Name);

let num: number = 456;
let ok: boolean = true;
let num2: number = 100000000000000000000000000000000000000000000000000;
console.log(num2);



// Array decalare
// **Number**
let arrNum: number[] = [];
arrNum.push(34);
arrNum.push(23);
console.log(arrNum);

// **String**
let arrStr: string[] = [];
arrStr.push("Nipen");
arrStr.push("Paul");
console.log(arrStr);

// String and Number Union array
let arrNumStr: (number | string)[] = [];
arrNumStr.push(38);
arrNumStr.push("Nipen Paul");

// object
let people:{
    name: string,
    id: number,
    adult: boolean
};
people = {
    name: "Nipen Paul",
    id: 38,
    adult: true
}
console.log(people);

// math equation
let a = 23;
let resf = Math.floor(a/2);
let resc = Math.ceil(a/2);
console.log(resf);
console.log(resc);
console.log(Math.round(2.6));
console.log(Math.round(2.49));

// any type
let varAny: any;
varAny = "StringData";
varAny = 34;
varAny = true;

// any type or dynamic type
let arrAny: any[] = [];
arrAny.push(23);
arrAny.push("Bangladesh");
console.log(arrAny);

// Function of typeScript
let myFun1: Function;

myFun1 = function(){
    console.log("myFun1");
}
console.log(myFun1);
myFun1();


const myFun2 = (a: number, b: number) =>{
    return a+b;
}
console.log(myFun2(14, 45));

const myFun3 = function (a: string, b: string){
    return a+b;
}
console.log(myFun3("14", "45"));

const myFun4 = function (a: string, b: string) : string{
    return a+b;
}
console.log(myFun4("14", "45"));

const myFun5 = function (a: string, b: string, c?:number) : string{
    console.log(c);
    return a+b;
}
console.log(myFun5("14", "456"));

const myFun6 = function (a: string, b: string, c:number = 14) : string{
    console.log(c);
    return a+b;
}
console.log(myFun6("14", "1"));


function myFun7 (a: string, b: string, c:number = 14) : string{
    console.log(c);
    return a+b;
}
console.log(myFun7("14", "1"));



// type aliase 
type stringOrNum = string | Number;
type userInfo = {name: string, age: number};

const userDetails = (id: stringOrNum, user: userInfo)=>{
    console.log(`Id = ${id}, user name: ${user.name}, user age: ${user.age}`);
}
userDetails(38, {name: "Nipen", age: 25});


// Function Signatures
let calculation: (x: number, y: number, c: string) => number;

calculation = (x: number, y: number, c: string)=>{
    if(c === 'add'){
        return x+y;
    }else if(c === 'minus'){
        return x-y;
    }else if(c === 'mul'){
        return x-y;
    }else{
        return x/y;
    }
}

console.log(calculation(5, 4, "add"));
console.log(calculation(5, 4, "adds")); // div


// class of  typescript

 class Player{
    name: string;
    age: number;
    country: string;
    constructor(name: string, age: number, country: string){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInformation(){
        console.log(`Name: ${this.name}\n`);
        console.log(`Age: ${this.age}\n`);
        console.log(`Country: ${this.country}\n`);
    }
}

const player1 = new Player("Nipen", 25, "Bangladesh");
const player2 = new Player("Kane", 35, "New Zeland");

player1.playerInformation();
player2.playerInformation();

const arrClass: Player[] = [];
arrClass.push(player1);
arrClass.push(player2);

console.log(arrClass);


// Access Modifiers
class PlayerTwo{
   public name: string;
   private age: number;
   readonly country: string;
    constructor(name: string, age: number, country: string){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    playerInformation(){
        console.log(`Name: ${this.name}\n`);
        console.log(`Age: ${this.age}\n`);
        console.log(`Country: ${this.country}\n`);
    }
}

const playerTwo1 = new PlayerTwo("Nipen", 25, "Bangladesh");
const playerTwo2 = new PlayerTwo("Kane", 35, "New Zeland");

// playerTwo1.age = 27; // can not use, beacuse it's private data
// playerTwo1.country = "Ban"; // can not write, it's readOnly data

console.log('\n'+ playerTwo1.name);
// console.log(playerTwo1.age); // can't access
console.log(playerTwo1.country);

//playerTwo1.playerInformation();
//playerTwo2.playerInformation();

// interface
interface RectangleOptions{
    width: number;
    length: number;
}

function drawRectangle(options: RectangleOptions){
    let width = options.width;
    let length = options.length;
    return width*length;
}

let threeDoptions = {
    width: 30,
    length: 20,
    height: 10
};
drawRectangle(threeDoptions);


// GENERICS 1
const addID = <T>(obj: object) =>{
    let id = Math.floor(Math.random()*100);
    return {...obj, id};
}

let user = addID({
    name: "Nipen",
    age: 25,
});
console.log("ID = " + user.id);

// GENERICS 2
interface APIResponseI<T>{
    status: number,
    type: string;
    data: T;
}
const responseT: APIResponseI<object> = {
    status: 200,
    type: 'Good',
    data: {
        name: 'Nipen',
        others: 7,
    }
};


// Enum
enum RType {SUCCESS, FAILURE, FORBIDEN};
interface APIResponse<T>{
    status: number,
    type: RType,
    data: T;
}
const respones1: APIResponse<string> = {
    status: 200,
    type: RType.SUCCESS,
    data: 'test'
};

// tuples
let tup: [number, string, object] = [4, "Ni", {name:"NP"}];
// oder so important