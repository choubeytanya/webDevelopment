let obj1={name:"John", age:30, address: { city:"New York", zip:10001 }};
let { name, age, address: { city, zip } } = obj1;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York
console.log(zip); // 10001

let obj2={id:1, title:"Book", author:{ firstName:"Jane", lastName:"Doe" }};
let { id, author: { firstName, lastName } } = obj2;
console.log(id); // 1
console.log(firstName); // Jane
console.log(lastName); // Doe