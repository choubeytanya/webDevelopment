let fruits = ["apple", "mango", "banana", "kiwi", "orange", "pineapple"]; //array
let arr = new Array("tanya", "ruhi", "geeta", "tanvi", "tanusha"); //constructor array
let null_arr = new Array(3);
let emp_arr = new Array();
let str = "tanya";
let num = [1, 2, 3, 4];

console.log(fruits[4]);
console.log(arr[2]);
console.log(null_arr); //[<3 empty items>]
console.log(null_arr[1]); //undefined
console.log(emp_arr);

//array methods
console.log(fruits.length); //output:6
console.log(fruits.toString()); //output: apple,mango,banana,kiwi,orange,pineapple
console.log(fruits.at(2)); //output:banana
console.log(fruits.join("|")); //output:apple | mango | banana | kiwi | orange | pineapple;

//pop removes the last element while shift remove the first element of an array
console.log(arr.pop()); //output:tanusha
console.log(arr.shift()); //output: tanya
console.log(arr);

//push add the last element while unshift add the first element in the array.
arr.push("riya");
arr.unshift("rekha");
console.log(arr); //output:[ 'rekha', 'ruhi', 'geeta', 'tanvi', 'riya' ]

//isArray method check if the variablecontain array or not and return true and false accordingly
console.log(Array.isArray(fruits));
console.log(Array.isArray(str));

//delete an array
delete num[2];
console.log(num); //output: [ 1, 2, <1 empty item>, 4 ]

//concat array
console.log(arr.concat(num));

//The copyWithin() method copies array elements to another position in an array:
const data = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2); //output:[Banana,Orange,Banana,Orange,Kiwi,Papaya] 
//Copy to index 2, the elements from index 0 to 2:


//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat()); //output:[ 1, 2, 3, 4, 5, 6 ]

//The slice() method slices out a piece of an array into a new array:
console.log(fruits.slice(2)); //output:[ 'apple', 'mango', 'orange', 'pineapple' ]

/*The splice() method can be used to add new items to an array:
a. The first parameter (2) defines the position where new elements should be added (spliced in).
b. The second parameter (0) defines how many elements should be removed.
*/
fruits.splice(2, 0, "Lemon", "pomegranate");
console.log(fruits); //output:['apple','mango','Lemon','pomegranate','apple','mango','orange','pineapple']


/*The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.*/
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months.toSpliced(0,1)); //output: [ 'Feb', 'Mar', 'Apr' ]
console.log(months); //output:[ 'Jan', 'Feb', 'Mar', 'Apr' ]
console.log(months.splice(0,1)); //output:[ 'Jan' ]
console.log(months); //output:[ 'Feb', 'Mar', 'Apr' ]

console.log(fruits.indexOf("kiwi")); //output: -1 {kiwi not present in array}
console.log(fruits.indexOf("apple")); //output:0
console.log(fruits.lastIndexOf("apple")); //output:4
console.log(fruits.includes("kiwi")); //output:false
console.log(fruits.includes("orange")); //output:true

//sorting in array
let friends=["rohit","siya","tanya","tanvi","Kiran"];

/*The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.*/
console.log(friends.sort()); //output:[ 'Kiran', 'rohit', 'siya', 'tanvi', 'tanya' ]
console.log(friends.toSorted()); //output:[ 'Kiran', 'rohit', 'siya', 'tanvi', 'tanya' ]

/*The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.*/
console.log(friends.reverse()); //output:[ 'tanya', 'tanvi', 'siya', 'rohit', 'Kiran' ]
console.log(friends.toReversed()); //output:[ 'tanya', 'tanvi', 'siya', 'rohit', 'Kiran' ]
