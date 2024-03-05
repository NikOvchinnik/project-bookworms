import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getData } from './books-api';
import { addToLS, getFromLS } from './local-storage-functions';
import { isSignedIn, saveBooksToFB } from './modal-authorization';
import { refs } from './refs';
import icons from '../img/icons.svg';
import amazonIcon from '../img/amazon.png';
import appleIcon from '../img/applebooks.png';

const { bookIdsLSKey } = refs;

const localRefs = {};
// ОСНОВНА ФУНКЦІЯ НА ЕКСПОРТ
export async function bookOnClick(e) {
  // Getting all using data
  const bookElem = e.target.closest('li');
  if (!bookElem) {
    return;
  }
  const bookId = bookElem.dataset.bookId;
  const bookData = await getData(bookId);
  const book = bookData.data;

  const { book_image: image, title, author, description, buy_links } = book;
  const [amazon, applebooks] = buy_links;

  const bookMarkup = `<div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="${icons}#icon-x-close"></use>
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
            <img src="${amazonIcon}" alt="" />
          </a>
          <a
            href="${applebooks.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="${appleIcon}" alt="" />
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

  // Modal Window
  const instance = basicLightbox.create(bookMarkup, {
    onShow: instance => {
      instance.element().querySelector('.modal-window-close-btn').onclick =
        instance.close;
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      const { shopListBtn } = localRefs;
      shopListBtn.removeEventListener('click', shopListBtnOnClick);
    },
  });

  // HELPERS

  instance.show();
  shopListLogic(bookId);
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      instance.close();
    }
  }
}

function shopListLogic(bookIdValue) {
  localRefs.shopListBtn = document.querySelector(
    '.modal-window-book-shopping-list-button'
  );
  localRefs.congratulationsText = document.querySelector(
    '.modal-window-congratulations'
  );

  const { shopListBtn } = localRefs;
  checkShopListBtnStatus(bookIdValue);
  shopListBtn.addEventListener('click', () => {
    shopListBtnOnClick(bookIdValue);
  });
}

function shopListBtnOnClick(bookIdValue) {
  const isBookInLS = checkShopListBtnStatus(bookIdValue);
  const booksIdArray = getFromLS(bookIdsLSKey) || [];
  if (isBookInLS) {
    const bookToRemoveIndex = booksIdArray.indexOf(bookIdValue);
    booksIdArray.splice(bookToRemoveIndex, 1);
    addToLS(bookIdsLSKey, booksIdArray);
    if (isSignedIn) {
      saveBooksToFB(booksIdArray);
    }

    checkShopListBtnStatus(bookIdValue);
  } else {
    booksIdArray.push(bookIdValue);
    addToLS(bookIdsLSKey, booksIdArray);
    if (isSignedIn) {
      saveBooksToFB(booksIdArray);
    }
    checkShopListBtnStatus(bookIdValue);
  }
}

function checkShopListBtnStatus(bookIdValue) {
  const { congratulationsText, shopListBtn } = localRefs;
  const booksIdArray = getFromLS(bookIdsLSKey) || [];
  const isBookInLS = booksIdArray.includes(bookIdValue);
  if (!isBookInLS) {
    shopListBtn.textContent = 'add to shopping list';
  } else {
    shopListBtn.textContent = 'remove from the shopping list';
    congratulationsText.classList.toggle('visually-hidden');
  }

  return isBookInLS;
}
