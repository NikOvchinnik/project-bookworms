import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase-settings';
import { database } from './firebase-settings';
import { ref, set, onValue } from 'firebase/database';
import { iziToastMessage } from './izi-toast';
import { addToLS, getFromLS, removeFromLS } from './local-storage-functions';
import { onBugerMenuClick } from './header-modal';
import { refs } from './refs';
import icons from '../img/icons.svg';

const { bookIdsLSKey } = refs;

//name of key for localstorage, contains uid, name, mail,
const AUTH_KEY_LS = 'user-data';

//name of signed in user
const userData = getFromLS('user-data');
export let authUser = userData && userData.name ? userData.name : '';

//uid of signed user
export let authId = userData && userData.uid ? userData.uid : '';

//user is signed in if true
export let isSignedIn = authUser ? true : false;

const btnLogin = document.querySelector('.btn-register-login');
const btnRegister = document.querySelector('.btn-register');
const userNameSpan = document.querySelector('.name-user-login');
const userNameModal = document.querySelector('.user-name-modal');

function btnHeader() {
  if (isSignedIn) {
    btnLogin.classList.add('is-open-register');
    btnLogin.classList.remove('is-closed-register');
    btnRegister.classList.add('is-closed-register');
    btnRegister.classList.remove('is-open-register');
    userNameSpan.textContent = authUser;
    userNameModal.textContent = authUser;
  } else {
    btnLogin.classList.add('is-closed-register');
    btnLogin.classList.remove('is-open-register');
    btnRegister.classList.add('is-open-register');
    btnRegister.classList.remove('is-closed-register');
  }
}

btnHeader();

// save name and shoplist by uid from input shopList-parameter to FB
export async function saveBooksToFB(shopList = []) {
  const userInfo = {
    name: authUser,
    uid: authId,
    shopList,
  };

  try {
    const userRef = ref(database, `users/${userInfo.uid}`);
    const setResponse = await set(userRef, userInfo);
  } catch (error) {
    console.error('Error while saving shoplist to Realtime Database:', error);
  }
}

//get promise with name
function getPromiseNameFromFB(uid = authId) {
  return new Promise(resolve => {
    //link for user in database by uid
    const userRef = ref(database, `users/${uid}`);
    //read user data from database
    onValue(userRef, snapshot => {
      const userData = snapshot.val(); // user data
      if (userData) {
        resolve(userData.name);
      } else {
        resolve('');
      }
    });
  });
}

//get name from firebase database
async function getNameFromFB(uid = authId) {
  try {
    return await getPromiseNameFromFB(uid);
  } catch (e) {
    console.log('Server error: ', e);
    iziToastMessage(false, 'Server error');
  }
}

//copy shoplist from Firebase account to Localstorage for user id = uid
function updShoplistFromFBToLS(uid = authId) {
  //link for user in database by uid
  const userRef = ref(database, `users/${uid}`);

  //read user data from database
  onValue(userRef, snapshot => {
    const userData = snapshot.val(); // user data
    if (userData) {
      if (userData.shopList) {
        addToLS(bookIdsLSKey, userData.shopList);
      } else {
        addToLS(bookIdsLSKey, []);
      }
    } else {
      console.log('error while copying from Realtime Database to localstorage');
    }
  });
}

//open authoriztion modal
export function openAuthModal() {
  //creating basiclightbox
  const authInstance = basicLightbox.create(
    `
  <div class="auth-modal">
    <button class="auth-close-btn" type="button">
      <svg class="auth-close-icon" width="20" height="20">
        <use href="${icons}#icon-x-close"></use>
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
          maxlength="20"
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
          <svg class="auth-input-icon-mail" width="15" height="12">
            <use href="${icons}#icon-mail"></use>
          </svg>
        </div>

        <div class="auth-password-wrapper">
          <input
            class="auth-form-input"
            type="password"
            name="password"
            id="auth-password"
            placeholder="password"
            maxlength="20"
            required
          />
          <svg class="auth-input-icon-mail" width="14" height="14">
            <use href="${icons}#icon-lock"></use>
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
        // adding EventListener to check Escape pressed
        document.addEventListener('keydown', onEscKeyPress);
        document.body.style.overflow = 'hidden';
      },
      onClose: instance => {
        btnHeader();
        onBugerMenuClick();
        //removing EventListener if lightbox is being closed
        document.removeEventListener('keydown', onEscKeyPress);
        document.body.style.overflow = 'visible';
      },
    }
  );

  //basiclightbox instance show
  authInstance.show();
  document.querySelector('.basicLightbox').style.backgroundColor = '#4f2ee8';
  //checking if Escape is pressed
  function onEscKeyPress(e) {
    if (e.key === 'Escape') {
      //if true, we're closing the instance
      authInstance.close();
    }
  }

  //refs
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
    authSignInBtn.classList.add('current-sign');
    //remove highlight of the previous selection
    authSignUpBtn.classList.remove('current-sign');
    //change height of modal without name input
    authModal.classList.add('auth-modal-sign-in');
    //renaming button
    authSubmitBtn.textContent = 'Sign in';
    //required for name input delete
    authNameInput.removeAttribute('required');
  });

  //sign up pressed
  authSignUpBtn.addEventListener('click', e => {
    //hide name input
    authNameInput.classList.remove('auth-name-hidden');
    //highlight the current selection
    authSignInBtn.classList.remove('current-sign');
    //remove highlight of the previous selection
    authSignUpBtn.classList.add('current-sign');
    //change height of modal without name input
    authModal.classList.remove('auth-modal-sign-in');
    //renaming button
    authSubmitBtn.textContent = 'Sign up';
    //required for name input delete
    authNameInput.setAttribute('required', 'true');
  });

  authForm.addEventListener('submit', onAuthFormSubmit);

  async function onAuthFormSubmit(e) {
    e.preventDefault();
    const authBtnValue = e.target.elements[3].textContent.toLowerCase();
    const userName = e.target.elements.name.value.trim();
    const userEmail = e.target.elements.email.value.trim();
    const userPassword = e.target.elements.password.value.trim();

    //sign in or sign up check
    if (authBtnValue === 'sign up') {
      //try to sign up
      try {
        const resp = await handleRegistration(userEmail, userPassword);

        //if sign up success
        if (isSignedIn == true) {
          const userInfo = {
            uid: resp.uid,
            name: userName,
            mail: userEmail,
          };
          //save to global
          authUser = userName;
          //save mail and uid to LS
          addToLS(AUTH_KEY_LS, userInfo);
          //save empty shoplist with name and uid to FB
          saveBooksToFB();
          //form reset
          authForm.reset();
          //close modal
          authInstance.close();
          iziToastMessage(true, 'Registration successfull!');
        }
      } catch (e) {
        iziToastMessage(false, 'Registration error');
      }
    }

    if (authBtnValue === 'sign in') {
      try {
        //try to sign in
        const resp = await handleSignIn(userEmail, userPassword);

        //if true => save mail and uid to LS
        if (isSignedIn == true) {
          const userInfo = {
            uid: resp.uid,
            name: authUser,
            mail: userEmail,
          };
          //save mail and uid to LS
          addToLS(AUTH_KEY_LS, userInfo);
          //get shoppingList from firebase account
          updShoplistFromFBToLS();
          location.reload();
          //form reset
          authForm.reset();
          //close modal
          authInstance.close();
          iziToastMessage(true, 'Signed in successfull!');
        }
      } catch (e) {
        iziToastMessage(false, 'Sign in error');
      }
    }
  }
}

// sign up of new user
async function registerWithEmailAndPassword(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    iziToastMessage(false, 'Registration error');
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
    return await user;
  } catch (error) {
    console.error('Sign-in error:', error.message);
    throw error;
  }
}

// sign up handle
async function handleRegistration(email, password) {
  try {
    const response = await registerWithEmailAndPassword(email, password);
    isSignedIn = true;
    authId = response.uid;
    return await response;
    //  additional actions after successfull sign up
  } catch (error) {
    isSignedIn = false;
    authUser = '';
    authId = '';
    console.log('Registration error!');
    iziToastMessage(false, 'Registration error!');
  }
}

// sign in handle
async function handleSignIn(email, password) {
  try {
    const response = await loginWithEmailAndPassword(email, password);
    isSignedIn = true;
    authId = await response.uid;
    authUser = await getNameFromFB();
    return response;
  } catch (error) {
    // handle errors
    isSignedIn = false;
    authUser = '';
    authId = '';
    console.log('Login error!');
    iziToastMessage(false, 'Wrong login or password!');
  }
}

//log out
export function authLogOut() {
  //remove user id,name,mail from localstorage
  removeFromLS('user-data');
  //clear global vars as unsigned user
  authId = '';
  authUser = '';
  isSignedIn = false;
}
