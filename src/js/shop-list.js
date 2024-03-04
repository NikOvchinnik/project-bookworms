import { getData } from './books-api';
import { addToLS, getFromLS } from './local-storage-functions';
// import { isSigned, saveBooksToFB } from './modal-authorization';
// import{keyToLS} from './refs'

const bookIds1 = ["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136"];

const keyToLS = 'booksId';
addToLS(keyToLS, bookIds1);
const shoppingList = document.querySelector('.shopping-list-gallery-books');

// Fonction pour récupérer les données des livres
async function fetchBookData() {
  const booksIds = getFromLS(keyToLS);
  try {
    const array = booksIds.map(bookId => getData(bookId));
    const results = await Promise.allSettled(array);
    const fulfilledResults = results.filter(promise => promise.status === 'fulfilled');
    const booksArray = fulfilledResults.map(result => result.value.data);

    // const bookIdsArray = booksArray.map(book => book._id);

    return booksArray;
  } catch (error) {
    console.error('Error fetching book data:', error);
    return [];
  }
}

// Fonction pour afficher les livres
async function renderBooks() {
  try {
    const booksArray = await fetchBookData();

    const booksMarkup = booksArray.map(book => {
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
                  <div>
                    <h2 class="shopping-list-books-title">${title}</h2>
                    <button data-book-id="${id}" type="button" class="shopping-list-button">
                      <svg data-book-id="${id}" class="shopping-list-delete">
                        <use href="./img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${description}</p>
                    <p class="shopping-list-author">${author}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${amazon.url}">
                          <img class="shopping-list-link-amazon" src="./img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${applebooks.url}">
                          <img class="shopping-list-link-apple" src="./img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`;
    }).join('');

    shoppingList.innerHTML = booksMarkup;
  } catch (error) {
    console.error('Error rendering books:', error);
  }
}

// Fonction pour supprimer un livre
function bookOnDelete(e) {
  e.preventDefault();
  const id = e.target.dataset.bookId;
  if (id) {
  const booksIdArray = getFromLS(keyToLS);
  const bookToRemoveIndex = booksIdArray.indexOf(id);
  booksIdArray.splice(bookToRemoveIndex, 1);
    addToLS(keyToLS, booksIdArray);
    // if (isSigned) {
    //   saveBooksToFB(booksIdArray);
    // }
    renderBooks();
  } return

}

// Fonction à exécuter lors du chargement de la page pour les 2 états de la page
function onPageLoad() {
  const booksIdArray = getFromLS(keyToLS);
  const shoppingListGallery = document.querySelector('.shopping-list-gallery-books');
  const shoppingListEmptyState = document.querySelector('.shopping-list-empty-state');

  if (booksIdArray.length > 0) {
    renderBooks();
    shoppingListGallery.style.display = 'block';
    shoppingListEmptyState.style.display = 'none';
    const shoppingListSection = document.querySelector('.shopping-list-section');
    shoppingListSection.addEventListener('click', bookOnDelete);
  } else {
    shoppingListGallery.style.display = 'none';
    shoppingListEmptyState.style.display = 'block';
  }

}

onPageLoad();

// Ajout du listener pour le chargement de la page
shoppingList.addEventListener('click', bookOnDelete);
