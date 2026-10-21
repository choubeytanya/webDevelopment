let pass = document.getElementById("password");
let confPass = document.getElementById("chk-password");
let submit = document.getElementById("submit");
let errorMess=document.getElementsByClassName("error")[0];

submit.addEventListener("click", (e) => {

  if (pass.value !== confPass.value) {
    errorMess.innerHTML = "password do not match";
    e.preventDefault();
  } else if ((pass.value == "") || (confPass == "")) {
    errorMess.innerHTML = "Password is required field";
    e.preventDefault();
  }
});
