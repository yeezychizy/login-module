const loginForm = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const rememberMe = document.getElementById('remember-me');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();
  const rememberMeValue = rememberMe.checked;

  if (usernameValue === '') {
    alert('Please enter a username');
    return;
  }

  if (passwordValue === '') {
    alert('Please enter a password');
    return;
  }

  // Send login request to server and handle response accordingly
});
