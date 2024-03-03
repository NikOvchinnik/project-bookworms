import * as basicLightbox from 'basiclightbox';
import { addToLS } from './local-storage-functions';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const AUTH_KEY_LS = 'user-data';
let isSignedIn = false;

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

const auth = getAuth(app);

//open authoriztion modal
export function openAuthModal() {
  // authModal.classList.remove('is-hidden');

  //creating basiclightbox
  const authInstance = basicLightbox.create(
    `
  <div class="auth-modal">
    <button class="auth-close-btn" type="button">
      <svg class="auth-close-icon" width="20" height="20">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <form class="auth-form">
      <div class="auth-inputs-wrapper">
        <input
          class="auth-form-input"
          type="text"
          name="name"
          id="auth-name"
          placeholder="name"
          required
        />

        <div class="auth-email-wrapper">
          <input
            class="auth-form-input"
            type="email"
            name="email"
            id="auth-email"
            placeholder="email"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="./img/icons.svg#icon-mail"></use>
          </svg>
        </div>

        <div class="auth-password-wrapper">
          <input
            class="auth-form-input"
            type="password"
            name="password"
            id="auth-password"
            placeholder="password"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="./img/icons.svg#icon-lock"></use>
          </svg>
        </div>
      </div>

      <button class="auth-submit-btn" type="submit">Sign up</button>
    </form>

    <ul class="auth-sign-list">
      <li class="auth-sign-item">
        <button class="sign-up-btn current-sign" type="button">sign up</button>
      </li>

      <li class="auth-sign-item">
        <button class="sign-in-btn" type="button">sIGN In</button>
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

  //refs
  const authCloseBtn = document.querySelector('.auth-close-btn');
  const authModal = document.querySelector('.auth-modal');
  const authNameInput = document.querySelector('#auth-name');
  const authForm = document.querySelector('.auth-form');
  const authSubmitBtn = document.querySelector('.auth-submit-btn');
  const authSignInBtn = document.querySelector('.sign-in-btn');
  const authSignUpBtn = document.querySelector('.sign-up-btn');

  //sign in pressed
  authSignInBtn.addEventListener('click', e => {
    //hide name input
    authNameInput.classList.add('auth-name-hidden');
    //highlight the current selection
    authSignInBtn.classList.toggle('current-sign');
    //remove highlight of the previous selection
    authSignUpBtn.classList.toggle('current-sign');
    //change height of modal without name input
    authModal.classList.add('auth-modal-sign-in');
    //renaming button
    authSubmitBtn.textContent = 'Sign in';
  });

  //sign up pressed
  authSignUpBtn.addEventListener('click', e => {
    //hide name input
    authNameInput.classList.remove('auth-name-hidden');
    //highlight the current selection
    authSignInBtn.classList.toggle('current-sign');
    //remove highlight of the previous selection
    authSignUpBtn.classList.toggle('current-sign');
    //change height of modal without name input
    authModal.classList.remove('auth-modal-sign-in');
    //renaming button
    authSubmitBtn.textContent = 'Sign up';
  });

  authForm.addEventListener('submit', onAuthFormSubmit);

  async function onAuthFormSubmit(e) {
    e.preventDefault();

    //value of button ==> sign in or sign up check
    const authBtnValue = e.target.elements[3].textContent.toLowerCase();

    //sign in or sign up check
    if (authBtnValue === 'sign up') {
      const userName = e.target.elements.name.value.trim();
      const userEmail = e.target.elements.email.value.trim();
      const userPassword = e.target.elements.password.value.trim();
      let id;

      const resp = await handleRegistration(userEmail, userPassword);

      console.log(isSignedIn);

      if (isSignedIn == true) {
        const userInfo = {
          id: resp.uid,
          name: userName,
          mail: userEmail,
        };
        console.log(userInfo);
        addToLS(AUTH_KEY_LS, userInfo);
      }
    }

    if (authBtnValue === 'sign in') {
      //has to be check if user/pass is correct
      //and change state of vars
      //global let isSignedIn = true;
      //global let authUser = userName
      //and close modal
      //authInstance.close();
      //header button shows authUser value
      console.log('log in success');
    }
  }
}

// for header.js
// import { openAuthModal } from './modal-authorization';
//open the authoriztion modal, if button Sign up pressed
const authOpenModalBtn = document.querySelector(
  'button[data-action="registration"]'
);

//check if button 'sign up' in header is pressed
authOpenModalBtn.addEventListener('click', openAuthModal);

//! //////////////////////////////////////////////////////////
//! firebase

// sign up of new user
async function registerWithEmailAndPassword(email, password) {
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
}

// sign in of existing user
async function loginWithEmailAndPassword(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('Signed in user:', user);
    return await user;
  } catch (error) {
    console.error('Sign-in error:', error.message);
    throw error;
  }
}

// sign up
async function handleRegistration(email, password) {
  try {
    const response = await registerWithEmailAndPassword(email, password);
    isSignedIn = true;
    return await response;
    //  additional actions after successfull sign up
  } catch (error) {
    isSignedIn = false;
    console.log('registration error');
    // handle errors
  }
}

// sign in
async function handleSignIn(email, password) {
  try {
    const response = await loginWithEmailAndPassword(email, password);
    isSignedIn = true;
    return response;
  } catch (error) {
    // handle errors
    isSignedIn = false;
    console.log('login error');
  }
}

// const user = await handleSignIn('alisa@ukr.net', '12345678');
// console.log(user.email); //email
// console.log(user.uid); //uid
// console.log(user.auth.config.authDomain); //authDomain хз нащо
// await handleRegistration('vosha2@vo.sha', '12345678');

//! ///////////////////////////