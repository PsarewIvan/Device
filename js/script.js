//сделать динамический показ имени пользателя

var loginButton = document.querySelector('.login-button');
var userName = document.querySelector('.user-login');
var logoutButton = document.querySelector('.logout-button');

loginButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.remove('display-none');
  logoutButton.classList.remove('display-none');
  loginButton.classList.add('display-none');
});

logoutButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  userName.classList.add('display-none');
  logoutButton.classList.add('display-none');
  loginButton.classList.remove('display-none');
});