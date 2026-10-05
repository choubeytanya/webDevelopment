const user={
    name: "John",
    age: 30,
    city: "New York"
};

for(let key in user) {
    console.log(key + ": " + user[key]);
}

//use array
let fruits = ["apple", "banana", "cherry"];
for (let index in fruits) {
    console.log(index + ": " + fruits[index]);
}