// const instagramUser = new Object()
// or 
const instagramUser = {}

instagramUser.id = "admin123"
instagramUser.name = "Admin"
instagramUser.isLoggedIn = false

const userDetails = {
    userEmail : "admin1@gmail.com",
    fullname : {
        userFullname : {
            firstName : "Meet",
            lastName : "Kukadiya",
        }
    }
}

const obj1 = {1 : "a" , 2 : "b"} 
const obj2 = {3 : "c" , 4 : "d"} 

// const obj3 = Object.assign({},obj1,obj2)  // In that first store in {} target and all store in first {}.

const obj3 = {...obj1, ...obj2}  // Mostly use spread function instead of above method.
console.log(obj3);

console.log(instagramUser);

console.log(Object.keys(instagramUser));
console.log(Object.values(instagramUser));
console.log(Object.entries(instagramUser));

console.log(instagramUser.hasOwnProperty('name'));

console.log(userDetails.fullname);
console.log(userDetails.fullname.userFullname);
console.log(userDetails.fullname.userFullname.firstName);

