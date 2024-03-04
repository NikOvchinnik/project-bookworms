//Пересування бігунка для зміни режиму

const toggleSwitch = document.getElementById('toggle');
        const switchSlider = document.querySelector('.switch-slider');
        const labelHeader = document.querySelector('.label-header');

        toggleSwitch.addEventListener('change', function () {
            switchSlider.classList.toggle('active');
            labelHeader.style.background = this.checked ? 'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)' : 'linear-gradient(180deg, #4f2ee8 0%, #fff 100%)';
        });


//Спливаюче вікно при натисканні на Sign in в tab/des

document.addEventListener("DOMContentLoaded", function () {
  const registerLoginBtn = document.querySelector(".btn-register-login");
  const popupContainer = document.getElementById("popupContainer");

  registerLoginBtn.addEventListener("click", function () {
    popupContainer.style.display = (popupContainer.style.display === "block") ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (!registerLoginBtn.contains(event.target) && !popupContainer.contains(event.target)) {
      popupContainer.style.display = "none";
    }
  });
});



//refs

const logoHeader = document.querySelector('.logo-header');
const linkHome = document.querySelector('.link-home');
const linkShopList = document.querySelector('.link-shoplist');
const toggleHeader = document.getElementById('toggle');
const menuBtn = document.getElementById('menuBtn');
const btnRegister = document.querySelector('.btn-register');
const btnRegisterLogin = document.querySelector('.btn-register-login');
const popupContainer = document.getElementById('popupContainer');




//Відкриття модального вікна для авторизації

const registerButton = document.querySelector('.btn-register');
const authModal = document.querySelector('.auth-modal');

registerButton.addEventListener('click', () => {
  authModal.style.display = 'block';
});



import { authLogOut } from './modal-authorization';

const logoutBtn = document.querySelector('.btn-popup');
const registerLogoutBtn = document.querySelector('.btn-register-logout');

logoutBtn.addEventListener('click', () => {
  authLogOut();
});

registerLogoutBtn.addEventListener('click', () => {
    authLogOut();
    
localStorage.removeItem('userData');

  location.reload();
});






