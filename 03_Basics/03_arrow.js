// const mrk = function () {
//     let username = "Meet"
//     console.log(this.username);
// }   

// mrk()

const userName = () => {
    let username = "Meet"
    console.log(this.username);
}  

userName()

const addTwoNumber = (num1, num2) => {
    return num1 + num2
}

console.log(addTwoNumber(23, 432))


const addNumber = (num1, num2, num3) => (num1 + num2 + num3)    // Implicit return 

console.log(addNumber(23, 54, 63));