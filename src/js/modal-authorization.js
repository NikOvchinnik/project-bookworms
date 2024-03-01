//Firebase functions import
import { initializeApp } from 'firebase/app';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s',
  authDomain: 'bookworms-de9f1.firebaseapp.com',
  projectId: 'bookworms-de9f1',
  storageBucket: 'bookworms-de9f1.appspot.com',
  messagingSenderId: '67746495730',
  appId: '1:67746495730:web:2051c7fd00eaf14945646b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);

//! ///////////////////////////

//
const authCloseBtn = document.querySelector('.auth-close-btn');
const authModal = document.querySelector('.auth-backdrop');

//close the authoriztion modal, if X pressed
authCloseBtn.addEventListener('click', toggleAuthModal);

//open/close authoriztion modal
function toggleAuthModal() {
  authModal.classList.toggle('is-hidden');
}
