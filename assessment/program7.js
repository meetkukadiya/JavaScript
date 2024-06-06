// 7. Write a program that takes a student's score as input and prints their grade (A, B, C, D, or F) using if-else.

const score = 23;

if(score > 100){
    console.log("Please enter valid score.");
} else if (score >= 90){
    console.log("Your Grade is A.");
} else if(score >= 75){
    console.log("Your Grade is B.");
} else if(score >= 60){
    console.log("Your Grade is C.");
} else if(score >= 35){
    console.log("Your Grade is D.");
} else if(score >= 0){
    console.log("Your Grade is F.");
} else {
    console.log("Please enter valid score.");
}