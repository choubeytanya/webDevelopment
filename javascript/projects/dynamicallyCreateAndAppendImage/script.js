let mainContainer = Array.from(
  document.getElementsByClassName("imageContainer"),
)[0];
let showBtn = Array.from(document.getElementsByClassName("show"))[0];
let hideBtn = Array.from(document.getElementsByClassName("hide"))[0];

let image = document.createElement("img");
image.src =
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-1108099.jpg&fm=jpg";
image.alt = "dog image";
image.style.cssText = "width:400px; height:100%; display:none";
mainContainer.appendChild(image);

showBtn.addEventListener("click", () => {
    image.style.display = "block";
});
hideBtn.addEventListener("click", () => {
  image.style.display = "none";
});
