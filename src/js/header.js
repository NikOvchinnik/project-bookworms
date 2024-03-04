import { openAuthModal } from './modal-authorization';
import { authLogOut } from './modal-authorization';
//Пересування бігунка для зміни режиму

const toggleSwitch = document.getElementById('toggle');
const switchSlider = document.querySelector('.switch-slider');
const labelHeader = document.querySelector('.label-header');

toggleSwitch.addEventListener('change', function () {
  switchSlider.classList.toggle('active');
  labelHeader.style.background = this.checked
    ? 'linear-gradient(180deg, #4f2ee8 0%, #686868 100%)'
    : 'linear-gradient(180deg, #4f2ee8 0%, #fff 100%)';
});

//Спливаюче вікно при натисканні на Sign in в tab/des

document.addEventListener('DOMContentLoaded', function () {
  const registerLoginBtn = document.querySelector('.btn-register-login');
  const popupContainer = document.getElementById('popupContainer');

  registerLoginBtn.addEventListener('click', function () {
    popupContainer.style.display =
      popupContainer.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', function (event) {
    if (
      !registerLoginBtn.contains(event.target) &&
      !popupContainer.contains(event.target)
    ) {
      popupContainer.style.display = 'none';
    }
  });
});

//Відкриття модального вікна для авторизації

const registerButton = document.querySelector('.btn-register');

registerButton.addEventListener('click', openAuthModal);

//Натискання Log out

const logoutBtn = document.querySelector('.btn-popup');

logoutBtn.addEventListener('click', () => {
  authLogOut();

  location.reload();
});


// Навігація сторінки

const currentPage = window.location.pathname;

const menuItems = document.querySelectorAll('.item-menu-header');

menuItems.forEach(function (item) {
  if (item.querySelector('a').getAttribute('href') === "." + currentPage) {
    item.classList.add('is-active');
  }
});

const menuItemsMobile = document.querySelectorAll('.nav-menu-link');

menuItemsMobile.forEach(function (item) {
  if (item.querySelector('a').getAttribute('href') === '.' + currentPage) {
    item.classList.add('is-active');
  }
});




