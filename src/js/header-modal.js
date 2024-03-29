//Відкривання модального вікна у моб версії та зміна бургеру на хрестик
import { isSignedIn } from './modal-authorization';
import { authLogOut } from './modal-authorization';
import { openAuthModal } from './modal-authorization';

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');

  menuBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if (modalBackdrop.style.display === 'flex') {
      closeModal();
      document.body.style.overflow = 'visible';
      menuBtn.classList.add("is-open-burger");
      menuBtn.classList.remove('is-closed-burger');
      closeBtn.classList.add('is-closed-burger');
      closeBtn.classList.remove('is-open-burger');
    } else {
      openModal();
      document.body.style.overflow = 'hidden';
      menuBtn.classList.add('is-closed-burger');
      menuBtn.classList.remove('is-open-burger');
      closeBtn.classList.add('is-open-burger');
      closeBtn.classList.remove('is-closed-burger');
    }
  }

  function openModal() {
    modalBackdrop.style.display = 'flex';
    setTimeout(() => {
      modalBackdrop.style.opacity = 1;
      modalBackdrop.style.transform = 'translateY(0)';
    }, 10);
  }

  function closeModal() {
    modalBackdrop.style.opacity = 0;
    modalBackdrop.style.transform = 'translateY(20px)';
    setTimeout(() => {
      modalBackdrop.style.display = 'none';
    }, 300);
  }

  modalBackdrop.addEventListener('click', function (event) {
    if (event.target === modalBackdrop) {
      closeModal();
      toggleButtons();
    }
  });
});

const burgerBtn = document.querySelector('.btn-burger');
const burgerRegisterUser = document.querySelector('.btn-register-modal');
const burgerSignIn = document.querySelector('.btn-sign-in');
const burgerLogOut = document.querySelector('.btn-sign-logout');

burgerBtn.addEventListener('click', onBugerMenuClick);

export function onBugerMenuClick() {
  if (isSignedIn) {
    burgerRegisterUser.classList.add('is-closed-burger');
    burgerSignIn.classList.add('is-open-burger');
    burgerLogOut.classList.add('is-open-burger');
    burgerRegisterUser.classList.remove('is-open-burger');
    burgerSignIn.classList.remove('is-closed-burger');
    burgerLogOut.classList.remove('is-closed-burger');
  } else {
    burgerRegisterUser.classList.add('is-open-burger');
    burgerSignIn.classList.add('is-closed-burger');
    burgerLogOut.classList.add('is-closed-burger');
    burgerRegisterUser.classList.remove('is-closed-burger');
    burgerSignIn.classList.remove('is-open-burger');
    burgerLogOut.classList.remove('is-open-burger');
  }
}

burgerLogOut.addEventListener('click', () => {
  authLogOut();

  location.reload();
});

burgerRegisterUser.addEventListener('click', openAuthModal);
