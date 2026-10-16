// create elements using javascript
let div=document.createElement("div");
let para=document.createElement("para");

//add content to the element in javascript
para.innerText="This para is inserted with the help of JS";

//Add styling using javascript this is added as inline style and it will override all the external and internal css if available.
para.style.color="red";
para.style.fontSize="20px";
para.style.cssText = "background-color: yellow; border: 2px solid black; padding:10px";

//Adding the created element in the DOM usind appendChild method
div.appendChild(para);
document.body.appendChild(div);