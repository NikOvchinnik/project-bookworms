import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function iziToastMessage(boolean, message) {
  if (boolean) {
    return iziToast.show({
      title: 'Success',
      titleColor: '#fff',
      titleSize: '16',
      titleLineHeight: '1.5',
      message: message,
      messageColor: '#fff',
      messageSize: '16',
      messageLineHeight: '1.5',
      backgroundColor: '#59a10d',
      position: 'topRight',
    });
  } else {
    return iziToast.show({
      title: 'Error',
      titleColor: '#fff',
      titleSize: '16',
      titleLineHeight: '1.5',
      message: 'Please, enter name of image',
      messageColor: '#fff',
      messageSize: '16',
      messageLineHeight: '1.5',
      backgroundColor: '#ef4040',
      position: 'topRight',
    });
  }
}
