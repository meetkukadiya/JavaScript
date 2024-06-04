// if

const isUserLoggedIn = true

if(isUserLoggedIn){

}

if (3 !== "3"){  // Execute the statement because it is true. (Check the datatype)
    console.log("Execute the Code 1.");
}

if (3 != "3"){   // Execute the statement because condition is false (Not Check datatype)
    console.log("Execute the Code 2.");
}

const temperature = 42

if(temperature > 41){
    console.log("Heat wave alert ⚠️, Stay safe at Home.🏠");
}
else{
    console.log("It is a normal temperature");
}

const speed = 234

if(speed > 150){
    let power = 'Fly'
    console.log(`Your Plane can ${power}.`);
}

// console.log(`Your Plane can ${power}.`);

