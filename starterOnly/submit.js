// Form

const formGame = document.getElementById("formGame");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantityEvent = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");

function showError(input, message) {
  let error = input.parentNode.querySelector(".error-message");
  if (!error) {
    error = document.createElement("div");
    error.className = "error-message";
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
  error.style.display = "block";
}

function hideError(elementOrContainerId) {
  let errorElement;
  
  // Si l'argument est une chaîne, il est traité comme l'ID d'un conteneur d'erreur de groupe
  if (typeof elementOrContainerId === "string") {
    errorElement = document.getElementById(elementOrContainerId);
  } else {
    // Sinon, l'argument est traité comme un élément du formulaire individuel
    // et on cherche le message d'erreur dans son parent
    errorElement = elementOrContainerId.parentNode.querySelector(".error-message");
  }

  if (errorElement) {
    errorElement.style.display = "none";
  }
}

// Fonction uniquement pour groupe button radio

function showErrorForGroup(containerId, message) {
  let errorContainer = document.getElementById(containerId);
  if (!errorContainer) {
    console.error("Aucun conteneur d'erreur trouvé pour l'ID :", containerId);
    return;
  }
  errorContainer.textContent = message;
  errorContainer.style.display = "block";
}

// Fonction pour valider le formulaire
function validate() {
  let isValid = true;

  // Validation du prénom
  if (firstname.value.trim().length < 2) {
    showError(firstname, "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    isValid = false;
  } else {
    hideError(firstname);
  }

  // Validation du nom
  if (lastname.value.trim().length < 2) {
    showError(lastname, "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    isValid = false;
  } else {
    hideError(lastname);
  }

  // Validation de l'email avec une expression régulière
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    showError(email, "L'email n'est pas valide");
    isValid = false;
  } else {
    hideError(email);
  }

  // Validation de la date de naissance (exemple basique)
  if (!birthdate.value) {
    showError(birthdate, "Vous devez entrer votre date de naissance.");
    isValid = false;
  } else {
    hideError(birthdate);
  }

  // Validation du nombre de tournois
  if (
    quantityEvent.value.trim() === "" ||
    isNaN(quantityEvent.value) ||
    quantityEvent.value < 0 ||
    quantityEvent.value > 99
  ) {
    showError(
      quantityEvent,
      "Veuillez indiquer à combien de tournois avez-vous déjà participé."
    );
    isValid = false;
  } else {
    hideError(quantityEvent);
  }

  // Validation des radio button
  if (![location1, location2, location3, location4, location5, location6].some(location => location.checked)) {
    showErrorForGroup("location-error-message", "Veuillez sélectionner un tournoi.");
    isValid = false;
  } else {
    hideError("location-error-message");
  }

  // Validation des conditions d'utilisation
  if (!checkbox1.checked) {
    showError(checkbox1, "Vous devez vérifier que vous acceptez les termes et conditions.");
    isValid = false;
  } else {
    hideError(checkbox1);
  }

  return isValid;
}

function setupRadioListeners() {
  [location1, location2, location3, location4, location5, location6].forEach(location => {
    location.addEventListener('change', () => {
      hideError("location-error-message");
    });
  });
}

// Appeler setupRadioListeners lors de l'initialisation
setupRadioListeners();

// Attacher l'écouteur d'événements pour le bouton "Fermer"
document.getElementById("close-button").addEventListener('click', function() {
  // Cacher le message de succès
  document.getElementById("success-message").style.display = "none";

  // Réinitialiser le formulaire
  document.getElementById("formGame").reset();

  // Cacher la modal entière
  document.querySelector('.bground').style.display = "none";

});

// Assurez-vous que le reste de la logique de soumission du formulaire est correctement gérée
formGame.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire
  const isValid = validate();
  if (isValid) {
      // Afficher le message de succès
      document.getElementById("success-message").style.display = "block";
     
      // Cacher le formulaire
      document.getElementById("formGame").style.display = "none";
  }
});