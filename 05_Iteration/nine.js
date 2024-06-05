// reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc, currval) => acc + currval ,0)
 
console.log(myTotal);


const shoppingCart = [
    {
        course: "js Course",
        price: 1999
    },
    {
        course: "py Course",
        price: 999
    },
    {
        course: "mobile dev Course",
        price: 2999
    },
    {
        course: "data science Course",
        price: 6999
    },
]

const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price ,0) 

console.log(`You Amount : ${cartTotal}`);