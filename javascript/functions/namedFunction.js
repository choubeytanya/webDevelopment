//A function declaration also known as a function statement declares a function with a function keyword. The function declaration must have a function name.

//normal function.
function greet() {
    console.log("Hello, World!");
}
greet();

//using parameters and arguments in function.
function greetUser(name) {
    console.log("Hello, " + name + "!");
}
greetUser("John");

//function with default value for parameter.
function greetUserWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetUserWithDefault(); // Output: Hello, Guest!
greetUserWithDefault("Alice"); // Output: Hello, Alice!

//function with return value.
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum: " + sum); // Output: Sum: 15
