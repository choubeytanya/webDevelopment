let arr = ["tanya", "tanvi", "tanu", "tanisha"];
let newArr = arr.every((value) => value.length > 4);
console.log(newArr); //false because not all values in the array have length greater than 4.

let arr1=[1,2,3,4,5];
let newArr1=arr1.every((value)=>value>0);
console.log(newArr1); //true because all values in the array are greater than 0.