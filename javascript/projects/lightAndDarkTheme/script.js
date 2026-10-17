let mainBody=document.getElementsByTagName("body")[0];

let toggleBtn = document.getElementById("toggleBtn");

let isDark="false";
toggleBtn.addEventListener("click",()=>{
if (isDark==false) {
mainBody.style.background="white";
mainBody.style.color="black";
} 
else {
    mainBody.style.background = "#242431";
    mainBody.style.color = "white";
}
isDark=!isDark;
})

