const myObject = {
    js: 'JavaScript',
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for (const key in myObject) {
    console.log(`${key} use for ${myObject[key]}`);
}


const programming = ["java", "py", "js", "cpp"]

for (const key in programming) {
    console.log(`${programming[key]}`);
 }

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United states of America")
// map.set('Fr' , "France")
// map.set('IN' , "India")

// for (const key in map) {
//    console.log(key);
// }
