let arr=[[1,2,3],4,5,6,7,8,9];
let [[x, y, z], ...rest] = arr;
console.log(x); // 1
console.log(y); // 2
console.log(z); // 3
console.log(rest); // [4, 5, 6, 7, 8, 9]

let [[...rest2],...rest1] = arr;
console.log(rest2); // [1, 2, 3]
console.log(rest1); // [4, 5, 6, 7, 8, 9]