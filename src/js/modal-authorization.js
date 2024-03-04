import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { addToLS, getFromLS } from './local-storage-functions';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';

//name of key for localstorage, contains uid, name, mail,
const AUTH_KEY_LS = 'user-data';

//name of signed in user
export let authUser = getFromLS('user-data').name || '';
//uid of signed user
export let authId = getFromLS('user-data').uid || '';
//user is signed in if true
export let isSignedIn = authUser ? true : false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s',
  authDomain: 'bookworms-de9f1.firebaseapp.com',
  databaseURL:
    'https://bookworms-de9f1-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'bookworms-de9f1',
  storageBucket: 'bookworms-de9f1.appspot.com',
  messagingSenderId: '67746495730',
  appId: '1:67746495730:web:2051c7fd00eaf14945646b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Authorization
const auth = getAuth(app);
//Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// console.log(database);

// save name and shoplist by uid from input shopList-parameter to FB
async function saveBooksToFB(shopList = []) {
  const userInfo = {
    name: authUser,
    uid: authId,
    shopList,
  };
  try {
    console.log(userInfo);
    const userRef = ref(database, `users/${userInfo.uid}`);
    const setResponse = await set(userRef, userInfo);
    console.log('Інформація про користувача успішно збережена.');
  } catch (error) {
    console.error('Помилка збереження інформації про користувача:', error);
  }
}

//add books to firebase
// saveBooksToFB(['643282b1e85766588626a0v1']);

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
  return await getPromiseNameFromFB(uid);
}

//copy shoplist from Firebase account to Localstorage for user id = uid
function updShoplistFromFBToLS(uid = authId) {
  //link for user in database by uid
  const userRef = ref(database, `users/${uid}`);

  //read user data from database
  onValue(userRef, snapshot => {
    const userData = snapshot.val(); // user data
    console.log('116 userdata = ', userData);
    if (userData) {
      if (userData.shopList) {
        addToLS('idBooks', userData.shopList);
      } else {
        addToLS('idBooks', []);
      }
    } else {
      console.log('error');
    }
  });
}
// updShoplistFromFBToLS();

//open authoriztion modal
export function openAuthModal() {
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
    //required for name input delete
    authNameInput.removeAttribute('required');
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
    //required for name input delete
    authNameInput.setAttribute('required', 'true');
  });

  authForm.addEventListener('submit', onAuthFormSubmit);

  async function onAuthFormSubmit(e) {
    e.preventDefault();

    //value of button ==> sign in or sign up check
    const authBtnValue = e.target.elements[3].textContent.toLowerCase();
    const userName = e.target.elements.name.value.trim();
    const userEmail = e.target.elements.email.value.trim();
    const userPassword = e.target.elements.password.value.trim();

    //sign in or sign up check
    if (authBtnValue === 'sign up') {
      //try to sign up
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
      }
    }

    if (authBtnValue === 'sign in') {
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
        //form reset
        authForm.reset();
        //close modal
        authInstance.close();
      }
      console.log('log in success');
    }
  }
}

//! for header.js start
// import { openAuthModal } from './modal-authorization';
//open the authoriztion modal, if button Sign up pressed
const authOpenModalBtn = document.querySelector(
  'button[data-action="registration"]'
);

//check if button 'sign up' in header is pressed
authOpenModalBtn.addEventListener('click', openAuthModal);

//! for header.js end

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
    console.log('registration error');
    // handle errors
  }
}

// sign in handle
async function handleSignIn(email, password) {
  try {
    const response = await loginWithEmailAndPassword(email, password);
    isSignedIn = true;
    authId = await response.uid;
    authUser = await getNameFromFB();
    console.log('authUser in handle: ', authUser);
    console.log('authId in handle: ', authId);
    console.log('authUser in handle: ', authUser);
    console.log('response.uid in handle', response.uid);
    return response;
  } catch (error) {
    // handle errors
    isSignedIn = false;
    authUser = '';
    authId = '';
    console.log('login error');
  }
}
