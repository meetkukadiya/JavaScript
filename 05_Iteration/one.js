// for 

for (let i = 0; i <= 10; i++) {
    const element = i ;
    if(element == 7){
        console.log("You are on 7th Stair.");
    }

    console.log(element); 
}

for (let i = 1; i <= 10 ; i++) {
    console.log(`Table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
     
}


let myArray = ["Ironman", "Thor", "Hulk"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// for (let i = 1; i <= 20 ; i++) {
//     if (i == 7) {
//         console.log("Your last number is 7.");
//     break;
//     }
//     console.log(`Value of i is ${i}`);
// }


for (let i = 1; i <= 20 ; i++) {
    if (i == 7) {
        console.log("Skip 7 ");
    continue;
    }
    console.log(`Value of i is ${i}`);
}