// Dates 

const myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

const createdDate = new Date(2022,0,14)
console.log(createdDate.toDateString());

let myCreatedDate = new Date("04-23-2022")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

