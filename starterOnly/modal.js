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

function openModal() {
  document.querySelector('.bground').style.display = "block";
  // Assurez-vous que le formulaire et le message de succès sont dans l'état correct
  document.getElementById("success-message").style.display = "none"; // Cache le message de succès
  document.getElementById("formGame").style.display = "block"; // Affiche le formulaire
}

document.getElementById("open-modal-btn").addEventListener('click', openModal);