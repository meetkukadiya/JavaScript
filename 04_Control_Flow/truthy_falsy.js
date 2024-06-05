const userEmail = []


// Without any comparison if have any value than log
// if (userEmail) {
//     console.log("User have email.");
// }
// else{
//     console.log("User don't have email.");
// }


// falsy value ===>  false , 0 , -0, BigInt 0n, "", null, undefined, NaN

// truthy values ===> "0", 'falue' (In String), " " (Space in Sting), [], {}, function(){} 

if (userEmail.length === 0){
    console.log("Array is Empty.");
} 

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty.");
} 


// Nullish coalescing Operator (??): null undefined 

let val1;
 
// val1 = 5 ?? 10  // Output : 5

// val1 = null ?? 35  // Output : 35

val1 = undefined ?? 23    // Output : 15

console.log(val1);


// Terniary Operator

const price = 100

price <= 50 ? console.log("less than 50") : console.log("More than 50");