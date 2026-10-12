let arr=["tanya", "tanvi", "tanu", "tanisha"];
//forEach method is used to iterate over the array and execute a provided function once for each array element.
// This method does not return a new array, it simply executes the provided function for each element in the array.
arr.forEach((value, index)=>{
    console.log(`The value at index ${index} is ${value}`);
});

arr.forEach((value)=>value.length>4?console.log(value):console.log("value is less than 4"));


let arr1=[1,2,3,4,5];
let newArr1=arr1.forEach((value) => (value > 3 ? value * 2 : value));
console.log(newArr1); //undefined because forEach does not return a new array, it returns undefined.