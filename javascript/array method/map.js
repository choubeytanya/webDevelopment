let arr=[1,2,3,4,5];
//map method is used to create a new array by applying a provided function to each element in the original array.
// This method returns a new array with the results of calling the provided function on every element in the original array.
let newArr=arr.map(value => value*2);
console.log(newArr);

let newArr1=arr.map(value => value>3?value*2:value);
console.log(newArr1);