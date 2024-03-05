let calcScrollValue = () => {
  let scrollProgress = document.querySelector('.scroll-container');
  let pos = document.documentElement.scrollTop;
  if (pos > 100) {
    scrollProgress.style.display = 'grid';
  } else {
    scrollProgress.style.display = 'none';
  }
  scrollProgress.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
  });
};

window.addEventListener('scroll', calcScrollValue);
window.addEventListener('load', calcScrollValue);
