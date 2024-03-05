const loaderContainer = document.querySelector('.loader-container');

export const showLoader = () => {
  loaderContainer.classList.remove('visually-hidden');
};

export const hideLoader = () => {
  loaderContainer.classList.add('visually-hidden');
};
