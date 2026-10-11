//here greet is a higher-order function that takes a name and a callback function as parameters
function greet(name, callback) {
    callback(name);
}

//below is the callback function
function sayHello(name) { 
    console.log("Hello, " + name + "!");
}

greet("Tanya", sayHello);