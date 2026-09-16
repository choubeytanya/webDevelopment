let a=51;
let b=775;
let num= 9.654;

// toString() convert any datatype to string.
let c= a.toString(); 
console.log(c);
console.log(typeof c); // Output: string

//toExponential() returns a string, with a number rounded and written using exponential notation.
let d=a.toExponential(2)
console.log(d); // Output: 5.10e+1
console.log(typeof d); // Output: string

//toFixed() returns a string, with the number written with a specified number of decimals:
let e= a.toFixed(2);
console.log(e); // Output: 51.00
console.log(typeof e); // Output: string

//toPrecision() returns a string, with a number written with a specified length:
let f=num.toPrecision(3);
console.log(f);
console.log(typeof f);

console.log(Math.floor(num)); //convert to lower integer
console.log(Math.ceil(num)); //convert to higher integer
console.log(Math.round(num)); //convert into nearest possible integer