console.log("hello world"); // This is a log message


console.warn("This is a warning message"); // This is a warning message


console.error("This is an error message"); // This is an error message


console.info("This is an informational message"); // This is an informational message


let data={name:"tanya", age:25, city:"New York"}; // This is an object containing user details
console.table(data); // This will display the object in a table format in the console



console.group("User Details"); // This will create a collapsible group in the console
console.log("Name: Tanya");
console.log("Age: 25"); 
console.log("City: New York"); 
console.groupEnd(); // This will close the collapsible group



console.count("User Count"); // This will count the number of times "User Count" has been logged
console.count("User Count");
console.count("User Count");
console.count("User Count");