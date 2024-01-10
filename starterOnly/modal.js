function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const closmodalbg = document.querySelector(".close")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Écoute du click sur la class .close
closmodalbg.addEventListener("click", closeModal);

// Je change mon display si j'ai cliqué sur la class .close
function closeModal() {
  modalbg.style.display = "none";
}


