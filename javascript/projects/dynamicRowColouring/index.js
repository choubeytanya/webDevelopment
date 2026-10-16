let mainBox=document.getElementById("main");
let elements=mainBox.children;
for(let i=0; i<elements.length; i++){
    if(i==0) {
        elements[i].style.backgroundColor="blue";
    }
    else if((i-1)%2==0) {
        elements[i].style.backgroundColor = "lime";
    }
    else if(i==8) {
        elements[i].style.backgroundColor = "green";
    }
    else if(i==(elements.length-1)) {
        elements[i].style.backgroundColor = "violet";
    }
}


