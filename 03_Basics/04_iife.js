// Immediately Invoked Function Experession (IIFE)

// named IIFE
(function mrk() {
    console.log("DB CONNECTED");
})();  // remember end by ( ; ) 

// unnamed IIFE 
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})("MONGO DB");