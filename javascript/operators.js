//Arithmetic Operators
/*
let a = 10;
let b = 5;
let c = a + b; // Output: 15
let d = a - b; // Output: 5
let e = a * b; // Output: 50
let f = a / b; // Output: 2
let g = a % b; // Output: 0
console.log(c,d,e,f,g); // Output: 15 5 50 2 0
*/

//urinary Operators
/*
let c=5;
let d=8;
c++;
d--; 
console.log(c,d); // Output: 6 7
--c; // Output: 5
++d; // Output: 8
console.log(c,d); // Output: 5 8
*/

//Assignment Operators
/*
let a=10;
let b=5;
a+=b;
console.log(a); // Output: 15 now value of a is 15
b*=a;
console.log(b); // Output: 75 now value of b is 75
b-=a;
console.log(b); // Output: 60 now value of b is 60
b/=a;
console.log(b); // Output: 4 now value of b is 4
a%=b;
console.log(a); // Output: 2 now value of a is 2
*/

//comparison Operators

/*
a=25
b=30
c=25
d="25";

console.log(a==b); // Output: false
console.log(a==c); // Output: true
console.log(a==d); // Output: true because == operator only checks for value not for data type
console.log(a===d); // Output: false because === operator checks for both value and data type
console.log(a!=b); // Output: true
console.log(a!=c); // Output: false
console.log(a!==d); // Output: true because !== operator checks for both value and data type
console.log(a>b); // Output: false
console.log(a<b); // Output: true
console.log(a>=c); // Output: true
console.log(a<=b); // Output: true
console.log(a>=d); // Output: true because >= operator only checks for value not for data type
console.log(a<=d); // Output: true because <= operator only checks for value not for data type
*/

//logical Operators
/*
let a=25;
let b=0;
let c=5;
console.log(a>c && b<c); // Output: false because both conditions are not true
console.log(a>c || b<c); // Output: true because one of the conditions is true
console.log(!(a>c)); // Output: false because the condition is true
*/

// bitwise Operators
/*
let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011
console.log(a & b); // Output: 1 (Binary: 0001) If both bits are 1, the result is 1.
console.log(a | b); // Output: 7 (Binary: 0111) If either bit is 1, the result is 1.
console.log(a ^ b); // Output: 6 (Binary: 0110) Result is 1 when the bits are different.

console.log(~a);    // Output: -6 (Binary: 1010) Inverts the bits (1's complement). ~n = -(n + 1)

console.log(a << 1); // Output: 10 (Binary: 1010) Left shift by 1 (multiplies by 2).
console.log(a >> 1); // Output: 2 (Binary: 0010) Right shift by 1 (divides by 2, discards remainder).
*/
