// Primitive 

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail; 


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 234235362342342342n


// Reference (Non-primitive)

// Arrays, Objects, Functions

// array
const cars = ["BMW A21", "Audi A4", "Volvo V90"];

// object
let studentDetails = {
    name: "Meet",
    age: 21,
}

// function 

const myFun = function(){
    console.log("Hello World!");
}


console.log(typeof bigNumber);
console.log(typeof myFun);
console.log(typeof studentDetails);
console.log(typeof cars);

// ***************************************************************

// Stake (Primitive) , Heap (Non-Primitive)

let myName = "MeetKukadiya"

let anotherName = myName
anotherName = "changedName"

console.log(myName);
console.log(anotherName);

let userOne = {
    emailId : "user@gmail.com",
    upi : "hello@ybl",
}

let userTwo = userOne

userTwo.emailId = "admin@gmail.com"

console.log(userOne.emailId);
console.log(userTwo.emailId);