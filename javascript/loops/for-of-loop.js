let fruits=["apple", "banana", "cherry","pineapple"];
for (let fruit of fruits) {
 console.log(fruit);   
}

//for-of loop in objects
let user={
    name: "John",
    age: 30,
    city: "New York"
};
// for (let value of user) {
//     console.log(key + ": " + user[key]);
// } // user is not iterable, so this will throw an error.

for (let key of Object.keys(user)) {
    console.log(key + ": " + user[key]);
} // this will work because Object.keys(user) returns an array of the keys in the user object, which is iterable.