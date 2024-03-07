import { iziToastMessage } from './izi-toast';
import { database } from './firebase-settings';
import { ref, set } from 'firebase/database';
//form with phone number
const phoneSendForm = document.querySelector('.form-footer');

//event listener to send number
phoneSendForm.addEventListener('submit', onPhoneSendSubmit);

//send number
async function onPhoneSendSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const phoneNumber = form.elements.phone.value.trim();

  if (phoneNumber === '') return;

  await sendPhoneNumberToFB(phoneNumber);

  iziToastMessage(true, 'We`l call you in 1 hour!');

  // iziToast.success({
  //   titleSize: '16',
  //   titleLineHeight: '1.5',
  //   message: 'We"l call you in 1 hour!',
  //   messageColor: '#111',
  //   messageSize: '16',
  //   messageLineHeight: '1.5',
  //   backgroundColor: '#eac645',
  //   position: 'topRight',
  // });

  form.reset();
}

// save name and shoplist by uid from input shopList-parameter to FB
async function sendPhoneNumberToFB(phoneNumber) {
  const currentDate = new Date();
  //get current date
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  //date in ms == id
  const idx = Date.now();
  //full date
  const curDate = `${year}-${month}-${day}`;
  const currentTime = `${hours}:${minutes}:${seconds}`;

  //info for send to the database
  const callbackRequest = {
    phoneNumber,
    currentTime,
  };
  try {
    const userRef = ref(database, `callbacks/${curDate}/${idx}`);
    const setResponse = await set(userRef, callbackRequest);
  } catch (error) {
    iziToastMessage(false, 'Server Error');
    console.error('Error while phone number to Realtime Database:', error);
  }
}
