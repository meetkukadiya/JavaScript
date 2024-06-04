// singleton (by construction)
// Object.create


// object literals 

// Note : Remember that always access the value by the . [dot]. 

const mySym = Symbol["key1"]  // Symbol 

const StudentDetails = {
    "full name" : "Meet Kukadiya",
    [mySym] : "MySym1",    // Symbol in square bracket 
    age : 21,
    location : "Surat",
    email: "admin@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday" , "Friday"]
}

console.log(StudentDetails.email)
console.log(StudentDetails["full name"])
console.log(StudentDetails[mySym]);  // Symbol

// Object.freeze(StudentDetails)   // after freeze we cann't change the value 
console.log(StudentDetails);

StudentDetails.email = "emailchanged@gmail.com"

StudentDetails.gretting = function(){
    console.log("Hello Meet!");
}
console.log(StudentDetails.gretting());

StudentDetails.detail = function(){
    console.log(`Hello, My Self ${this["full name"]} and I'm ${this.age} year old.`);
}

console.log(StudentDetails.detail());

console.log(StudentDetails.email);