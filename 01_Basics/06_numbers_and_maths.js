const score = 354
console.log(score);

const balance = new Number(234)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); 



// *****************************  Maths  ***********************************

console.log(Math);

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1)) + min )