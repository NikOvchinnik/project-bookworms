import tuiPagination from 'tui-pagination';
import { getFromLS } from './local-storage-functions';
import { refs } from './refs';

const { bookIdsLSKey } = refs;
function getTotalBooks() {
  const myArray = getFromLS(bookIdsLSKey) || [];
  return myArray.length;
}
  const paginationContainer = document.getElementById('pagination');
export function initPagination() {
  const listItems = document.querySelector(
    '.shopping-list-gallery-books'
  ).children;


  const itemsPerPage = window.innerWidth < 768 ? 4 : 3;
  const visiblePages = window.innerWidth < 768 ? 2 : 3;

  const totalItems = getTotalBooks();

  const pagination = new tui.Pagination(paginationContainer, {
    totalItems,
    itemsPerPage,
    visiblePages,
    centerAlign: true,
  });

  function handlePageChange(event) {
    //перевірка чи треба показувати панель пагінації
    if (totalItems <= 3) {
      paginationContainer.classList.add('hidden');
      return;
    } else {
      paginationContainer.classList.remove('hidden');
    }

    //поточна сторінка
    const currentPage = event.page - 1;
    // Приховати всі елементи
    for (let i = 0; i < listItems.length; i++) {
      listItems[i].style.display = 'none';
    }

    // Показати елементи для поточної сторінки
    for (
      let i = currentPage * itemsPerPage;
      i < (currentPage + 1) * itemsPerPage;
      i++
    ) {
      if (listItems[i]) {
        listItems[i].style.display = 'block';
      }
    }
  }

  //  обробник подій для зміни сторінки
  pagination.on('afterMove', handlePageChange);

  // Ініціалізація сторінки за замовчуванням
  handlePageChange({ page: 1 });
}

export function checkIfAllBooksRemoved() {
  const totalBooks = getTotalBooks();
  if (totalBooks <= 3) {
    paginationContainer.classList.add('hidden');
    return;
  } else {
    paginationContainer.classList.remove('hidden');
  }
}


