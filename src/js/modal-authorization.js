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
const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('Signed in user:', user);
    return user;
  } catch (error) {
    console.error('Sign-in error:', error.message);
    throw error;
  }
};

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
function toggleAuthModal() {
  authModal.classList.toggle('is-hidden');
}
