import { getData } from './books-api';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

const refs = {
  test: document.querySelector('.test'),
  testBtn: document.querySelector('.test-button'),
};

const { test, testBtn } = refs;

testBtn.addEventListener('click', async e => {
  const data = await getData('category', 'Audio Nonfiction');

  const markup = data.data
    .map(book => {
      return `<p data-book-id="${book._id}">BOOK width id: ${book._id}. TITLE: ${book.title}</p>`;
    })
    .join('');
  //   test.innerHTML = markup;
  test.insertAdjacentHTML('beforeend', markup);
});

test.addEventListener('click', onBookClick);

async function onBookClick(e) {
  const bookId = e.target.dataset.bookId;
  if (!bookId) return;
  const bookData = await getData(bookId);
  const book = bookData.data;
  console.log(book);
  const { book_image: image, title, author, description, buy_links } = book;
  const [amazon, applebooks] = buy_links;

  const bookMarkup = `
  <div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="modal-window-book">
      <img
        class="modal-window-book-img"
        src="${image}"
        alt=""
      />
      <div>
        <h2 class="modal-window-book-title">${title}</h2>
        <p class="modal-window-book-author">${author}</p>
        <p class="modal-window-book-description">
        ${description}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${amazon.url}" class="amazon-link" target="_blank">
            <img src="./img/amazon.png" alt="" />
          </a>
          <a
            href="${applebooks.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="./img/applebooks.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <button type="button" class="modal-window-book-shopping-list-button">
      Add to shopping list
    </button>
    <p class="modal-window-congratulations visually-hidden">
      Congratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>`;
  const instance = basicLightbox.create(bookMarkup, {
    onShow: instance => {
      instance.element().querySelector('.modal-window-close-btn').onclick =
        instance.close;
      window.addEventListener('keydown', handleKeyDown);
      // Запрещаем прокрутку страницы при открытии модального окна
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      // Удаляем обработчик события keydown после закрытия модального окна
      window.removeEventListener('keydown', handleKeyDown);
      // Удаляем
      document.body.style.overflow = '';
    },
  });

  instance.show();
  onInstanceShow();
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}

function onInstanceShow() {
  const shopListBtn = document.querySelector(
    '.modal-window-book-shopping-list-button'
  );
  const congratulationsText = document.querySelector(
    '.modal-window-congratulations'
  );

  shopListBtn.addEventListener('click', onButtonClick);

  async function onButtonClick() {
    congratulationsText.classList.toggle('visually-hidden');

    shopListBtn.textContent.toLowerCase().trim() === 'add to shopping list'
      ? (shopListBtn.textContent = 'remove from the shopping list')
      : (shopListBtn.textContent = 'add to shopping list');
  }
}
