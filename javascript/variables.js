//var keyword
/* 
var name = "John";
console.log(name); // Output: John 
*/

//checking var scope
/*
var age = 30;
{
 var age = 45;
}
console.log(age); // Output: 45
*/

/*
var age = 30;
{
    console.log(age); // Output: 30
} 
*/

//reassigning value to var variable
/*
var name = "Doe";
{
  name = "tanya";
  console.log(name); // Output: tanya
}
*/

/*
var name = "Doe";
{
  console.log(name); // Output: Doe
 name = "tanya";
}
console.log(name); // Output: tanya
*/


//redeclearing var variable
/*
var name = "Doe";
var name = "tanya"; // it will overwrite the previous value
console.log(name); // Output: tanya
*/

/*
var name = "Doe";
{
    console.log(name); // Output: Doe
    var name = "tanya"; // it will overwrite the previous value
}
*/

/*
console.log(defaultitem);
var defaultitem = "default value"; // Output: undefined
*/

//let keyword
/*
let id = "1024";
console.log(id); // Output: 1024
*/

//checking let scope

/*let item_id = 30;
{
  let item_id = 45;
  console.log(item_id); // Output: 45
}
console.log(item_id); // Output: 30
*/

/*
let val = 30;
{
  console.log(val); // Output: 30 because it is not declared in the block so it will take the value from the outer scope this is known as lexical scoping or scope chain
}
console.log(val); // Output: 30
*/

//reassigning value to let variable
/*
let doc = 30;
{
  doc = 45;
  console.log(doc); // Output: 45
}
console.log(doc); // Output: 45 because the value of doc is changed (not redeclared) in the block so it will take the new value from the block
*/

//redeclaring let variable

/*let a = 30;
{
  console.log(a); //Cannot access 'a' before initialization
  let a = 45;
}
console.log(a); 
*/

/*
let b="tanya";
let b="kiran";
console.log(b); //SyntaxError: Identifier 'b' has already been declared
*/

//const keyword
/*
const pi = 3.14;
console.log(pi); // Output: 3.14;
*/

//checking const scope
/*
const radius = 7; 
{
    const radius = 14;
    console.log(radius); // Output: 14
}
console.log(radius); // Output: 7
*/


/*
console.log(a);
let a=50; //Output: ReferenceError: Cannot access 'a' before initialization
*/

/*
const radius = 7; 
{
    console.log(radius); // Output: 7 because it is not declared in the block so it will take the value from the outer scope this is known as lexical scoping or scope chain
}
console.log(radius); // Output: 7
*/

//reassigning value to const variable
/*
const name="tanya";
{
    name="kiran"; //TypeError: Assignment to constant variable.
    console.log(name);
}
*/

//redeclaring const variable
/*
const name = "tanya";
const name = "kiran"; //SyntaxError: Identifier 'name' has already been declared
console.log(name);*/ 


/*
const age=30;
{
    console.log(age); 
    const age=45; //SyntaxError: Identifier 'age' has already been declared
}
*/

/*
console.log(a);
const a=50; //Output: ReferenceError: Cannot access 'a' before initialization
*/