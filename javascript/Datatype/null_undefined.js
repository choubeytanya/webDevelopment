let a;
console.log(a);
console.log(typeof a);
console.log(a == true);
console.log(a == false);

let b = null;
console.log(b);
console.log(typeof b);
console.log(b == true);
console.log(b == false);

//symbols datatype

let sy1=Symbol();
let sy2=Symbol();
let sy3=Symbol("hi i am tanya");
let sy4=Symbol("hi i am tanya");
console.log(typeof sy1);
console.log(sy1===sy2);
console.log(sy1==sy2);
console.log(sy3==sy4);
console.log(sy3 === sy4);