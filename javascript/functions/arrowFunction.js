let greet=()=>{
    console.log("Hello, World!");
};
greet();


let greetUser=(name)=>{
    console.log("Hello, " + name + "!");
}
greetUser("Tanya");


let greetUserWithDefault=(name = "Guest")=>{
    console.log("Hello, " + name + "!");
}
greetUserWithDefault(); // Output: Hello, Guest!
greetUserWithDefault("Alice"); // Output: Hello, Alice!


let add=(a, b)=> a+b;
console.log(add(5, 3)); // Output: 8
