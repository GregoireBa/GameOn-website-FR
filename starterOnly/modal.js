function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); // Fond de la modale pour l'afficher ou la cacher
const closmodalbg = document.querySelector(".close"); // Bouton de fermeture de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons qui ouvrent la modale
const formData = document.querySelectorAll(".formData"); // Champs de formulaire dans la modale


// Ajoute un écouteur sur chaque bouton pour ouvrir la modale au clic
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Ouverture de la modale : rend la modale visible en changeant son style display en "block"
function launchModal() {
  modalbg.style.display = "block";
}
// Écoute du click sur la class .close
closmodalbg.addEventListener("click", closeModal);

// Fermeture de la modale : cache la modale en changeant son style display en "none"
function closeModal() {
  modalbg.style.display = "none";
}

// Ouvre la modale spécifique pour le jeu, cache le message de succès et affiche le formulaire de jeu
function openModal() {
  document.querySelector('.bground').style.display = "block";
  document.getElementById("success-message").style.display = "none";
  document.getElementById("formGame").style.display = "block";
}

document.getElementBIyd("open-modal-btn").addEventListener('click', openModal);