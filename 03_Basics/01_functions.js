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

function calculateCartPrice(...price){
    return price
}

console.log(calculateCartPrice(100, 240, 310, 143));


const user ={
    username : "MeetKukadiya",
    age: 21,
}

function handleObject(anyobject){
    console.log(`Hello, My self ${anyobject.username} and I'm ${anyobject.age} year old.`);
}

// handleObject(user)

handleObject({
    username : "Test",
    age : 31,
})

const myArray = [234, 422, 64, 125]

function getElementFromArray(getArray){
    return getArray[2]
}

console.log(getElementFromArray(myArray))
