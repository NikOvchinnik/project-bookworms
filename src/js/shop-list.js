import { getData } from './books-api';
import { addToLS, getFromLS } from './local-storage-functions';
import { isSignedIn, saveBooksToFB } from './modal-authorization';
import { showLoader, hideLoader } from './loader.js';
import { refs } from './refs';
import { initPagination } from './pagination';
import icons from '../img/icons.svg';
import amazonIcon from '../img/amazon.png';
import appleIcon from '../img/applebooks.png';
import { iziToastMessage } from './izi-toast.js';

const { bookIdsLSKey } = refs;

// Fonction pour récupérer les données des livres
async function fetchBookData() {
  const booksIds = getFromLS(bookIdsLSKey);
  try {
    const array = booksIds.map(bookId => getData(bookId));
    const results = await Promise.allSettled(array);
    const fulfilledResults = results.filter(
      promise => promise.status === 'fulfilled'
    );
    const booksArray = fulfilledResults.map(result => result.value.data);

    return booksArray;
  } catch (error) {
    console.error('Error fetching book data:', error);
    return [];
  }
}

// Fonction pour afficher les livres
async function renderBooks() {
  const shoppingList = document.querySelector('.shopping-list-gallery-books');
  try {
    const booksArray = await fetchBookData();

    const booksMarkup = booksArray
      .map(book => {
        const {
          book_image: image,
          title,
          author,
          description,
          _id: id,
          buy_links,
        } = book;
        const [amazon, applebooks] = buy_links;
        return `<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${image}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${title}</h2>
                    <button data-book-id="${id}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="${icons}#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${description}</p>
                    <p class="shopping-list-author">${author}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${amazon.url}">
                          <img class="shopping-list-link-amazon" src="${amazonIcon}" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${applebooks.url}">
                          <img class="shopping-list-link-apple" src="${appleIcon}" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`;
      })
      .join('');
    shoppingList.innerHTML = booksMarkup;
  } catch (error) {
    iziToastMessage(false, 'Server Error');
    console.error('Error rendering books:', error);
  }
}

// Fonction pour supprimer un livre
function bookOnDelete(e) {
  const deleteButton = e.target.closest('button');
  if (deleteButton) {
    const id = deleteButton.dataset.bookId;
    const booksIdArray = getFromLS(bookIdsLSKey);
    const bookToRemoveIndex = booksIdArray.indexOf(id);
    booksIdArray.splice(bookToRemoveIndex, 1);
    addToLS(bookIdsLSKey, booksIdArray);
    if (isSignedIn) {
      saveBooksToFB(booksIdArray);
    }
    loadShopingList();
  }
}

const shoppingListGallery = document.querySelector(
  '.shopping-list-gallery-books'
);
const shoppingListEmptyState = document.querySelector(
  '.shopping-list-empty-state'
);

const shoppingListSection = document.querySelector('.shopping-list-wrapper');
shoppingListSection.addEventListener('click', bookOnDelete);

// Fonction à exécuter lors du chargement de la page pour les 2 états de la page
export async function loadShopingList() {
  const booksIdArray = getFromLS(bookIdsLSKey) || [];
  if (booksIdArray.length > 0) {
    await renderBooks();
    initPagination();
    shoppingListEmptyState.style.display = 'none';
  } else {
    shoppingListGallery.style.display = 'none';
    shoppingListEmptyState.style.display = 'block';
  }
}

async function initShopingList() {
  try {
    showLoader();
    await loadShopingList();
    hideLoader();
    initPagination();
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

initShopingList();
