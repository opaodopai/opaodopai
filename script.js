var x = document.getElementById("paes-salgados");
var y = document.getElementById("paes-doces");
var i = document.getElementById("outros-sabores");
var titulo1 = document.querySelector(".titulo1");
var titulo2 = document.querySelector(".titulo2");
var titulo3 = document.querySelector(".titulo3");

titulo1.classList.add("selected");

x.style.display = "block";
y.style.display = "none";
i.style.display = "none";

function toggleSec1() {
  if (x.style.display === "none") {
    x.style.display = "block";
    titulo1.classList.add("selected");
    titulo2.classList.add("unselected");
    titulo3.classList.add("unselected");
    y.style.display = "none";
    i.style.display = "none";
  } else {
    // titulo1.classList.add("unselected");
    // x.style.display = "none";
    // y.style.display = "block";
    // i.style.display = "block";
  }
}

function toggleSec2() {
  if (y.style.display === "none") {
    y.style.display = "block";
    titulo2.classList.add("selected");
    titulo1.classList.add("unselected");
    titulo3.classList.add("unselected");
    x.style.display = "none";
    i.style.display = "none";
  } else {
    // x.style.display = "block";
    // y.style.display = "none";
    // i.style.display = "block";
    // titulo2.classList.add("unselected");
  }
}

function toggleSec3() {
  if (i.style.display === "none") {
    i.style.display = "block";
    titulo3.classList.add("selected");
    titulo1.classList.add("unselected");
    titulo3.classList.add("unselected");
    x.style.display = "none";
    y.style.display = "none";
  } else {
    // x.style.display = "block";
    // y.style.display = "block";
    // i.style.display = "none";
    // titulo3.classList.add("unselected");
  }
}