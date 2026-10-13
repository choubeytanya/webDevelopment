let arr=[1,2,3,4,5];
let newArr=[...arr,6,7,8];
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]

let obj={name:"John", age:30};
let newObj={...obj, city:"New York", zip:10001};
console.log(newObj); // { name: 'John', age: 30, city: 'New York', zip: 10001 }