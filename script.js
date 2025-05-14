const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// FORM elements
const registerForm = document.querySelector('.form-box.register form');
const loginForm = document.querySelector('.form-box.login form');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Show success alert on register
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration successful! You can now log in.');
    wrapper.classList.remove('active'); // Switch to login form
});

// Redirect on login
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = "home.html"; // redirect to homepage
});
