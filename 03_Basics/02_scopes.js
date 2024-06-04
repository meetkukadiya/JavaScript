var num3 = 42  // Global Scope

if(true){ // Block Scope
    let num1 = 23        
    const num2 = 43
    var num3 = 34
}

// console.log(num1);      // Not log 
// console.log(num2);      // Not log
console.log(num3);       // log


function one(){
    const username = "Meet Kukadiya"

    function two(){
        const id = "admin@gmail.com"
        const web = "whatsapp"
        console.log(username);
    }
    // console.log(web);


    two()
}

one()

if(true){
    const user = "Meet"
    if(user === "Meet"){
        const website = "mrk"
        console.log("Hello, " + user + " your website is www." + website + ".com");
    }
    // console.log(website);
}
// console.log(user);


function addOne(num){
    return num + 1
}

let Add = addOne(3) 

console.log(Add);

const addTwo = function(num){
    return num + 2
}

console.log(addTwo(3));  

