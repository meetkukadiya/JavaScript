function myName(){
    console.log("M");
    console.log("e");
    console.log("e");
    console.log("t");
}

myName()  // Function execution


// function sumOfTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

// Note : After the return we cann't log or print any thing. 

function sumOfTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

result = sumOfTwoNumber(12 ,3 )
console.log("Result: ", result);

function loginuserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username.");
        return
    }
    return `${username} just logged in`
} 

let message = loginuserMessage("Meet")
console.log(message);