import { getData } from './books-api';
import { renderBestSellersBooks } from './bestsellers';
import { showLoader, hideLoader } from './loader.js';
import { iziToastMessage } from './izi-toast';
import { refs } from './refs.js';

const { booksContainer, categoriesList } = refs;

// Список категорій
async function fetchCategoriesList() {
  try {
    const response = await getData('category-list');
    return response;
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

export async function renderCategoriesList() {
  try {
    const response = await fetchCategoriesList();
    if (response.statusText !== 'OK') {
      throw new Error('Server error');
    }
    const booksArray = response.data;
    const inAlphabeticalOrder = booksArray.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );

    const allCategoriesListItem = `<li class="categories-list-item" ><button type="button" aria-label="All Categories"  class="btn-categories-list" data-category-name="All Categories">All Categories</button></li>`;
    const markup = inAlphabeticalOrder
      .map(
        category =>
          `<li class="categories-list-item" >
<button type="button" class="btn-categories-list" aria-label="${category.list_name}" data-category-name="${category.list_name}">${category.list_name}</button>
</li>`
      )
      .join('');

    categoriesList.innerHTML = allCategoriesListItem + markup;
    const swiper = new Swiper('.mySwiper', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  } catch (error) {
    iziToastMessage(false, 'Server Error');
    console.log(error);
  }
}

// КНИЖКИ
export function renderTitle(categoryName) {
  const categoryNameSplitted = categoryName.split(' ');
  const titleLastWord = categoryNameSplitted[categoryNameSplitted.length - 1];
  const categoryNameWithoutLastWord = categoryNameSplitted
    .slice(0, -1)
    .join(' ');

  const pageTitle = `<h1 class="books-container-title">${categoryNameWithoutLastWord}<span class="last-word-title"> ${titleLastWord}</span></h1>`; // Вставити класс замість className // Класи в андріани беремо.
  return pageTitle;
}

// Розміткa одного li елементу
function renderBookByCategory(booksArray) {
  const booksMarkup = booksArray
    .map(book => {
      const { book_image: image, title, author, _id: id } = book;
      return `<li class="book-item" data-book-id="${id}">
      <button class="book-image-container" aria-label="${title}">
        <img
          class="book-image"
          src="${image}"
          alt="${title}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </button>
      <h3 class="book-title">${title}</h3>
      <p class="book-author">${author}</p>
    </li>`;
    })
    .join('');
  const markup = `<ul class="books-by-category-list">${booksMarkup}</ul>`;
  return markup;
}

// Це основна функція рендеру книжок за категорією. Імпортується до Андріани та вішається як колбек на слухач подій на кнопки See More
async function renderCategoryBooks(categoryName) {
  try {
    showLoader();
    const response = await getData('category', categoryName);
    const booksArray = response.data;
    const booksTitle = renderTitle(categoryName);
    const books = renderBookByCategory(booksArray);
    const allCategoriesButtonMarkup = `<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>`;
    const markup = booksTitle + books + allCategoriesButtonMarkup;
    booksContainer.innerHTML = markup;
    hideLoader();
    changeCategoryColor();
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

// Слухач подій
export async function onCategoryClick(event) {
  try {
    const categoryName = event.target.dataset.categoryName;
    if (categoryName === 'All Categories') {
      booksContainer.innerHTML = '';
      renderBestSellersBooks();
      return;
    } else if (categoryName) {
      renderCategoryBooks(categoryName);
    }
    return;
  } catch (error) {
    console.error(error);
    iziToastMessage(false, 'Server Error');
  }
}

export function changeCategoryColor() {
  const h1Text = document.querySelector('.books-container-title').textContent;
  const lis = document.querySelectorAll(
    '.categories-list > .categories-list-item > .btn-categories-list'
  );
  lis.forEach(li => li.classList.remove('current-category'));

  lis.forEach(li => {
    const liText = li.textContent.trim();
    const allCategoriesLi = 'All Categories';
    const allCategoriesTitle = 'Best Sellers Books';
    if (h1Text === allCategoriesTitle && liText === allCategoriesLi) {
      li.classList.add('current-category');
      return;
    }
  });
  lis.forEach(li => {
    const liText = li.textContent.trim();

    if (h1Text === liText) {
      li.classList.add('current-category');
      return;
    }
  });
}
