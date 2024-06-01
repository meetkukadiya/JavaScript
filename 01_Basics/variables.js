const accountId = 12454
let accountEmail = "hello@gmail.com"
var accountPassword = "324523" // Also don't use var because it's not use for Block scope and funtion scope. 
accountCity = "Surat" // Don't Use 
let accountState 

// accountId = 234 // not allowed
accountEmail = "changedEmail@gmail.com"
accountPassword = "ChangedPassword"
accountCity = "Ahemdabad"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])