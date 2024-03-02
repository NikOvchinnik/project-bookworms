import axios from 'axios';


const categoryListEl = document.querySelector('.categories-list');

console.log(categoryListEl);

const categoriesArray = async () => {
  const response = await axios.get(
    'https://books-backend.p.goit.global/books/category-list'
  );
  const data = await response;

  return data;
};



export async function renderCategories() {
  try {
    const array = await categoriesArray();
    const inAlphabeticalOrder = array.data.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );
console.log(inAlphabeticalOrder);
    for (const arr of inAlphabeticalOrder) {
      const listItem = document.createElement('li');
      const catLink = document.createElement('a');

      catLink.classList.add('categories-link');
      catLink.textContent = `${arr.list_name}`;
      listItem.setAttribute('data-id', arr.list_name);
      categoryListEl.appendChild(listItem);
      listItem.appendChild(catLink);
    }
    console.log(array.data);


  } catch (error) {
    console.log(error);
  }
}
// -----------------------1category

// import Notiflix from 'notiflix';
// categoryListEl.addEventListener('click', onCategoryClick);

// async function onCategoryClick(event) {
//   event.preventDefault();

//   if (!event.target.classList.contains('category-btn')) return;

//   if (event.target.classList.contains('all-categories-btn')) {
//     mainTitle.innerHTML = `Best Seller <span class="main-title--last-word-static">Books</span>`;
  
//     await renderTopBooks();
//     return;
//   }

//   const id = event.target.dataset.id;

//   const data = await fetchSelectedBooks(id);
//   renderMainTitle(id);

//   renderBooksByCategory(data);
//   scrollToTop();
// }

// export async function fetchSelectedBooks(category) {
// //   Notiflix.Loading.dots('Please wait');
//   const categoriesArray = async category => {
//     const response = await axios.get(
//       `https://books-backend.p.goit.global/books/category?category=${category}`
//     );
//     const data = await response;
    
//     // Notiflix.Loading.remove();
//     return data;
//   };
//   try {
   
//     // Notiflix.Loading.remove();
  
//     return categoriesArray(category);
//   } catch (error) {
//     // Notiflix.Loading.remove();
//     // Notiflix.Notify.failure('Something went wrong. Please try again');
//     console.log(error);
//   }
// }
// categoryListEl.addEventListener('click', onCategoryClick);
//  async function onCategoryClick(event) {
//     const link = event.target.classList.contains('categories-link');
//     console.log(link);
//     const id = event.target.dataset;
//     console.log(id);
// }
// onCategoryClick();

renderCategories();
