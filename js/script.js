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

//оживляем модалку
var modalButton = document.querySelector('.write-us-button');
var popup = document.querySelector('.modal-contact-us');
var modalCloseButton = popup.querySelector('.close-modal');
var inputName = popup.querySelector('#user-name');
var inputEmail = popup.querySelector('#user-email');
var inputMessage =popup.querySelector('#user-message');
var modalForm = popup.querySelector('.modal-form');

var isStorage = true;
var storageName = '';
var storageEmail = '';

try {
  storageName = localStorage.getItem('login');
  storageEmail = localStorage.getItem('email');
} catch(err) {
  isStorage = false;
}

modalButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('display-none');
  popup.classList.add('modal-show');
  if (storageName && storageEmail) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputMessage.focus();
  } else if (storageEmail) {
    inputEmail.value = storageEmail;
    inputName.focus();
  } else if (storageName) {
    inputName.value = storageName;
    inputEmail.focus();
  } else {
    inputMessage.focus();
  }
});

modalCloseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('display-none');
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
  if (!inputEmail.value || !inputMessage.value || !inputMessage.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    void popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorage) {
      localStorage.setItem('login', inputName.value);
      localStorage.setItem('email', inputEmail.value);
    }
  }
});

















