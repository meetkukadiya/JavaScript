const name = "Meet"
const age = 21

console.log(`Hello, My name is ${name} and his age is ${age} years`);

const str1 = new String('Meet Kukadiya')

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.length);
console.log(str1.charAt(3));
console.log(str1.indexOf('t'));

const firstName = str1.substring(0,4)
console.log(firstName);

const newStringOne = new String('    Meet    ')
console.log(newStringOne.trim());

const newStringTwo = new String('    Meet    Kukadiya    ')
console.log(newStringTwo.trim());