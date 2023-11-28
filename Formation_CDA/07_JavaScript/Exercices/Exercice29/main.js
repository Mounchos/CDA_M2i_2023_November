const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const userDetails = {
    username: usernameInput.value,
    password: passwordInput.value
  };

  console.log(userDetails);
});

// Vérifie la saisie en temps réel
usernameInput.addEventListener('input', function() {
  if (usernameInput.value === '') {
    usernameInput.classList.add('error');
    errorMessage.textContent = 'Le pseudonyme est requis.';
  } else {
    usernameInput.classList.remove('error');
    errorMessage.textContent = '';
  }
});

passwordInput.addEventListener('input', function() {
  if (passwordInput.value === '') {
    passwordInput.classList.add('error');
    errorMessage.textContent = 'Le mot de passe est requis.';
  } else {
    passwordInput.classList.remove('error');
    errorMessage.textContent = '';
  }
});
