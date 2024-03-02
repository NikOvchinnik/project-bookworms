import * as basicLightbox from 'basiclightbox';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s',
  authDomain: 'bookworms-de9f1.firebaseapp.com',
  projectId: 'bookworms-de9f1',
  storageBucket: 'bookworms-de9f1.appspot.com',
  messagingSenderId: '67746495730',
  appId: '1:67746495730:web:2051c7fd00eaf14945646b',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// sign up of new user
const registerWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('Registered user:', user);
    return user;
  } catch (error) {
    console.error('Registration error:', error.message);
    throw error;
  }
};

// sign in of existing user
// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     const user = userCredential.user;
//     console.log('Signed in user:', user);
//     return user;
//   } catch (error) {
//     console.error('Sign-in error:', error.message);
//     throw error;
//   }
// };

// sign up
const handleRegistration = async () => {
  try {
    await registerWithEmailAndPassword(email, password);
    //  additional actions after successfull sign up
  } catch (error) {
    // handle errors
  }
};

// sign in
const handleSignIn = async () => {
  try {
    await signInWithEmailAndPassword(email, password);
    //  additional actions after successfull sign in
  } catch (error) {
    // handle errors
  }
};

//! ///////////////////////////

//refs
const authCloseBtn = document.querySelector('.auth-close-btn');
const authModal = document.querySelector('.auth-backdrop');

//close the authoriztion modal, if X pressed
authCloseBtn.addEventListener('click', toggleAuthModal);

//open/close authoriztion modal
export function toggleAuthModal() {
  authModal.classList.toggle('is-hidden');
}

//open authoriztion modal
export function openAuthModal() {
  // authModal.classList.remove('is-hidden');

  //creating basiclightbox
  const authInstance = basicLightbox.create(
    `
  <div class="auth-modal">
    <button class="auth-close-btn" type="button">
      <svg class="auth-close-icon" width="20" height="20">
        <use href="../img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <form class="auth-form">
      <div class="auth-inputs-wrapper">
        <input
          class="auth-form-input"
          type="text"
          name="name"
          id="name"
          placeholder="name"
          required
        />

        <div class="auth-email-wrapper">
          <input
            class="auth-form-input"
            type="email"
            name="email"
            id="email"
            placeholder="eMAIL"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="../img/icons.svg#icon-mail"></use>
          </svg>
        </div>

        <div class="auth-password-wrapper">
          <input
            class="auth-form-input"
            type="password"
            name="password"
            id="password"
            placeholder="pASSWORD"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="../img/icons.svg#icon-lock"></use>
          </svg>
        </div>
      </div>

      <button class="auth-submit-btn" type="submit">Sign up</button>
    </form>

    <ul class="auth-sign-list">
      <li class="auth-sign-item">
        <button class="sign-up-btn current-sign">sign up</button>
      </li>

      <li class="auth-sign-item">
        <button class="sign-in-btn">sIGN In</button>
      </li>
    </ul>
  </div>
  `,
    {
      onShow: instance => {
        instance.element().querySelector('.auth-close-btn').onclick =
          instance.close;
      },
    }
  );

  //basiclightbox instance show
  authInstance.show();
}

// for header.js
// import { toggleAuthModal } from './modal-authorization';
//open the authoriztion modal, if button Sign up pressed
const authOpenModalBtn = document.querySelector(
  'button[data-action="registration"]'
);

authOpenModalBtn.addEventListener('click', openAuthModal);
