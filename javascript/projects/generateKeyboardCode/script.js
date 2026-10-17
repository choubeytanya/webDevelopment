let inputBox = document.getElementById("type-box");
let keyPressed=document.getElementById("key-pressed")
let keyCode = document.getElementById("pressed-key-code");

inputBox.addEventListener("keyup", (e)=>{
if(e.key==" ") {
    keyPressed.innerText = "space";
}
else {
    keyPressed.innerText=e.key;
}

keyCode.innerText=e.keyCode;
})