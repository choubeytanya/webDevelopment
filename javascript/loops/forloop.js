/* for(let i=8;i>=0;i--) {
    console.log(i);
 } */

/* let sum=0;
    for (let num=1; num<=10; num++) {
    sum+=num;
    }
 console.log("The sum of numbers from 1 to 10 is: " + sum); */

/*
 let myname="tanya";
  for (let i=0; i<myname.length; i++) {
    console.log(myname[i]);
  }
*/

let num=123456789;
let arr=[];
for (let i=0; i<num.toString().length; i++) {
  arr.push(num.toString()[i]);
  console.log(arr);
}