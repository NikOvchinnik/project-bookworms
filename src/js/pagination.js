import tuiPagination from 'tui-pagination';
import { getFromLS } from './local-storage-functions';

const paginationElement = document.getElementById('pagination');
const itemsPerPage = 3;

const getTotalBooks = () => {
    const myArray = getFromLS("idBooks") || [];
    return myArray.length;
};

const updatePagination = (totalBooks, currentPage) => {
    const visiblePages = window.innerWidth < 768 ? 2 : 3;

    const pagination = new tuiPagination(paginationElement, {
        totalItems: totalBooks,
        itemsPerPage: itemsPerPage,
        visiblePages: visiblePages,
        page: currentPage,
    });

    pagination.on('afterMove', async (event) => {
        const newPage = event.page;
        localStorage.setItem('currentPage', newPage);
    });

    const paginationContainer = document.getElementById('pagination');
    if (totalBooks <= 3) {
        paginationContainer.style.display = 'none';
    } else {
        paginationContainer.style.display = 'flex';
    }
};

let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
const totalBooks = getTotalBooks();
updatePagination(totalBooks, currentPage);
