import { getData } from './books-api';
import { showLoader, hideLoader } from './loader.js';
import { onCategoryClick } from './categories.js';
import {
  renderCategoriesList,
  renderTitle,
  changeCategoryColor,
} from './categories';
import { categoriesList } from './categories.js';
import { bookOnClick } from './modal-window';
import { iziToastMessage } from './izi-toast';

export const booksContainer = document.querySelector('.books-container');
async function fetchTopBooks() {
  try {
    const response = await getData('top-books');
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

// ФУНКЦІЯ ЯКА ВІДМАЛЬОВУЄ БЕСТСЕЛЕРИ
export async function renderBestSellersBooks() {
  try {
    showLoader();
    const booksArray = await fetchTopBooks();
    const booksContainerMarkup = booksArray
      .map(topBooks => {
        const books = topBooks.books;
        const title = topBooks.list_name;
        return renderBooksBlock(books, title);
      })
      .join('');
    const title = renderTitle('Best Sellers Books');
    const markup = title + booksContainerMarkup;
    booksContainer.innerHTML = markup;
    changeCategoryColor();
    hideLoader();
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

// функція для створення div-у з книгою
function renderBooksBlock(books, title) {
  const booksListMarkup = books.map(book => templateBook(book)).join('');
  const bookSectionMarkup = `<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${title}</h2><ul class="books-list">${booksListMarkup}</ul><button type="button" class="books-list-btn"" data-category-name="${title}">See more</button></div>`;
  return bookSectionMarkup;
}

// функція для створення li-шки з книгою
function templateBook({ book_image, title, author, _id: id }) {
  return `
      <li class="book-item bestseller-book" data-book-id="${id}">
        <div class="book-image-container">
          <img
            class="book-image"
            src="${book_image}"
            alt="${title}"
          />
          <div class="book-overlay">QUICK VIEW</div>
        </div>
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </li>
    `;
}
// ВИКЛИКАЄТЬСЯ В МЕЙНІ 1 РАЗ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ
export async function onPageLoad() {
  try {
    await renderCategoriesList();
    await renderBestSellersBooks();
    booksContainer.addEventListener('click', onCategoryClick);
    booksContainer.addEventListener('click', bookOnClick);
    categoriesList.addEventListener('click', onCategoryClick);
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

onPageLoad();
