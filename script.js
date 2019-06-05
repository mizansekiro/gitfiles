var css = document.querySelector("h3");
var colorA = document.querySelector(".colorA");
var colorB = document.querySelector(".colorB");
var body = document.getElementById("gradient");


function backgroundGradient(){
    body.style.background = "linear-gradient(to right, "
    + colorA.value
    + " , "
    + colorB.value
    + ")";

    css.textContent = body.style.background + ";";
}

colorA.addEventListener("input", backgroundGradient);
colorB.addEventListener("input", backgroundGradient)

