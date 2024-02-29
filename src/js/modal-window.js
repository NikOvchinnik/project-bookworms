const refs = {
  shopListBtn: document.querySelector(
    '.modal-window-book-shopping-list-button'
  ),
  gratzText: document.querySelector('.modal-window-congratulations'),
};

const { shopListBtn, congratulationsText } = refs;

refs.shopListBtn.addEventListener('click', onButtonClick);

function onButtonClick() {
  refs.gratzText.classList.toggle('visually-hidden');

  shopListBtn.textContent.toLowerCase().trim() === 'add to shopping list'
    ? (shopListBtn.textContent = 'remove from the shopping list')
    : (shopListBtn.textContent = 'add to shopping list');
}
