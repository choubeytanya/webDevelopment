let num=[2,4,5,6,7,3,9];
let evenNum=num.filter((value)=>value%2==0);
console.log(evenNum);


let obj=[{name:"tanya", marks:90},{name:"tanvi", marks:80},{name:"tanu", marks:70},{name:"tanisha", marks:60}];
let filteredObj=obj.filter((value)=>value.marks>70);
console.log(filteredObj);