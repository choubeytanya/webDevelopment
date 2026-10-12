let arr=[1,2,3,4,5];
console.log(arr.fill(0, 1, 3)); // [1, 0, 0, 4, 5] //fills the array with 0 from index 1 to index 3 (not including index 3)

console.log(arr.fill(5, 2)); // [1, 0, 5, 5, 5] //fills the array with 5 from index 2 to the end of the array

console.log(arr.fill(2)); // [2, 2, 2, 2, 2] //fills the entire array with 2