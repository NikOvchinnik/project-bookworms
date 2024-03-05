document.addEventListener('DOMContentLoaded', function () {
  const supportBtn = document.querySelector('.support-btn');
  const supportList = document.querySelector('.support-list');

  supportBtn.addEventListener('click', function () {
    if (supportBtn.classList.contains('scroll-up')) {
      supportList.scrollTo({
        top: supportList.scrollHeight,
        behavior: 'smooth',
      });

      supportBtn.classList.remove('scroll-up');
    } else {
      supportList.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      supportBtn.classList.add('scroll-up');
    }
  });
});
