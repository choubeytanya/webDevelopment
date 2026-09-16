let fName="tanya";
let Lname="choubey";
let str = "   hello world   ";
let str1 = "5";
let str2 = "hello world";
let str3 = "I hate my rabbit. he also hate me.";
let str4 = "I love my rabbit";

console.log(`my name is ${fName} ${Lname}`); // Output: my name is tanya choubey {using template literals}

console.log((fName.concat(" ",Lname))) // Output: my name is tanya choubey 
console.log(fName.length) // Output: 5


/*
1.at allow to use negative indexing while charAt does not allow.
2.If no character is found, [ ] and at() returns undefined, while charAt() returns an empty string.
*/
console.log(fName.charAt(2)) // Output: n {numbering start from 0}
console.log(fName.at(1)) // Output: a {numbering start from 0}
console.log(fName[3]); // Output: y {numbering start from 0}
console.log(fName[8]) // Output: undefined
console.log(fName.charAt(8)) // Output: "" (empty string)


//change to uppercase and lowercase
console.log(fName.toUpperCase()) // Output: TANYA
console.log(fName.toLowerCase()) // Output: tanya


/*
1. substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().
2. substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.
*/
console.log(fName.slice(2,5)); // Output: nya {slice(startIndex, endIndex)}
console.log(fName.substring(2,5)); // Output: nya {substring(startIndex, endIndex)} 
console.log(fName.slice(-4,-1)); // Output: any 
console.log(fName.substring(-4,-1)); // Output: ""
console.log(fName.substring(-4,4)); // Output: "tany"
console.log(fName.substr(2,3)); // Output: nya


//trim methods to remove whitespaces.
console.log(str.trim()); // Output: hello world
console.log(str.trimEnd()); // Output:   hello world
console.log(str.trimStart()); // Output: hello world


//pad methods to add padding to the string.
console.log(str1.padStart(4,"0")); // Output: 0005
console.log(str1.padEnd(4,"0")); // Output: 5000


//repeat method to repeat the string.
console.log(fName.repeat(3)); // Output: tanyatanyatanya


//replace method to replace only first occurance of the string.
console.log(str2.replace("world","tanya")); // Output: hello tanya


//replaceAll method to replace all the occurrences of the string.
console.log(str3.replaceAll("hate","love")); // Output: I love my rabbit. he also love me.
console.log(str3.replace(/hate/g,"love")); // Output: I love my rabbit. he also love me. {using regex}
console.log(str3.replace(/hate/gi,"love")); // Output: I love my rabbit. he also love me. {using regex with case insensitive}
console.log(str3.replace("hate","love")); //replace only first occurrence.


//split method to split the string into an array.
console.log(str4.split(" ")); // Output: [ 'I', 'love', 'my', 'rabbit' ]
console.log(fName.split("")); // Output: [ 't', 'a', 'n', 'y', 'a' ]


/*
1. indexOf and lastIndexOf method to find the index of the string.
2. indexOf and search  are similar but The search() method cannot take a second start position argument.
*/
console.log(str3.indexOf("love")); // Output: -1 {if not found it will return -1}
console.log(str3.indexOf("hate")); // Output: 2 {if found it will return the index of the first occurrence}
console.log(str3.lastIndexOf("hate")); // Output: 26 {if found it will return the index of the last occurrence}
console.log(str3.indexOf("hate",10)); // Output: 26 {if found it will return the index of the first occurrence after the specified index}
console.log(str3.lastIndexOf("hate",10)); // Output: 2 {if found it will return the index of the last occurrence before the specified index}
console.log(str3.lastIndexOf("love",10)); // Output: -1 {if not found it will return -1}
console.log(str3.search("hate")); // Output: 2 {if found it will return the index of the first occurrence}
console.log(str3.search("hate",10)); // Output: 2 {if found it will return the index of the first occurrence after the specified index}


//The includes() method returns true if a string contains a specified value.
console.log(str3.includes("hate")); // Output: true
console.log(str3.includes("love")); // Output: false


//The startsWith() method returns true if a string begins with a specified value
console.log(str3.startsWith("I")); // Output: true


//The endsWith() method returns true if a string ends with a specified value
console.log(str3.endsWith("me.")); // Output: true