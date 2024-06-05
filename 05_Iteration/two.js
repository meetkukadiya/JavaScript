let index = 0

while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2 
}

let myArray = ["Thor" , "Ironman", "Hulk"]

let range = 0
while (range < myArray.length){
    console.log(myArray[range]);
    range++  // or range = range + 1
}

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
} while (score <=  10);
