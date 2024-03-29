import { openAuthModal } from './modal-authorization';
import { authLogOut } from './modal-authorization';

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
const menuItemsMobile = document.querySelectorAll('.nav-menu-link');

function currentPageisActive() {
  if (currentPage.includes('/shopping-list.html')) {
    menuItems[1].classList.add('is-active-burger');
    menuItemsMobile[1].classList.add('is-active-burger');
  } else {
    menuItems[0].classList.add('is-active-burger');
    menuItemsMobile[0].classList.add('is-active-burger');
  }
}

currentPageisActive();
