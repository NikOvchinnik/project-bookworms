document.addEventListener('DOMContentLoaded', function() {
    const supportBtn = document.querySelector('.support-btn');
    const supportList = document.querySelector('.support-list');

    // Обработчик события для кнопки прокрутки вниз
    supportBtn.addEventListener('click', function() {
      // Проверяем текущее состояние кнопки
      if (supportBtn.classList.contains('scroll-up')) {
        // Если кнопка скроллит вверх, прокручиваем вниз
        supportList.scrollTo({
          top: supportList.scrollHeight,
          behavior: 'smooth'
        });
        // Изменяем направление кнопки на вниз
        supportBtn.classList.remove('scroll-up');
      } else {
        // Если кнопка скроллит вниз, прокручиваем вверх
        supportList.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        // Изменяем направление кнопки на вверх
        supportBtn.classList.add('scroll-up');
      }
    });
  });