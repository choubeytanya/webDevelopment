let pass = document.getElementById("password");
let showPass = document.getElementById("showPass");

showPass.addEventListener("click", (e)=>{
    if(e.target.checked == true) {
        pass.type="text"
    }
    else {
        pass.type="password";
    }
})