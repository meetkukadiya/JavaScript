// for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 4, 6, 3, 9]

for (const num of arr) {
    console.log(num);
}

const str = "Hello, Meet Kukadiya"

for (const string of str) {
    console.log(string);
}

// const str1 = "Hello, Admin Test";

// for (let i = 0; i < str1.length; i++) {
//     const currentChar = str1[i];
//     const nextChar = str[i + 1];

//     // Check if the current character is 'n' and the next character is a space
//     if (nextChar === ' ') {
//         // Skip printing the space
//         i++;
//     }

//     console.log(currentChar);
// }


// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United states of America")
map.set('Fr' , "France")  
map.set('IN' , "India")

// console.log(map); 


for (const [key, value] of map) {
    console.log(key, ':-',value );
}

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'COC'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }



