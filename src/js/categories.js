// function makeCategoryBooksMarkup(data) {
//     return `
//         <ul class="category-books-list">
//           ${data
//             .map(element => {
//               return `
//               <li class="books-list-item">
//                 ${createBookMarkup(element)}
//               </li>
//             `;
//             })
//             .join('')}
//         </ul>
//       `;
//   }
// -----------------------------------------
// function createBookMarkup({
//     _id: id,
//     title,
//     author,
//     description,
//     book_image: image,
//   }) {
//     return `
//       <a class="book-link" href="" aria-label="Book thumbnail">
//         <div class="book-thumb">
//           <img class="book-image" src="${image}" loading="lazy" data_id=${id} alt="${description}"/>
//           <div class="book-image-overlay" data_id=${id} aria-label="${title}">
//             <p class="book-image-overlay-text">Quick view</p>
//           </div>
//         </div>
//         <div class="book-item-meta">
//           <h3 class="book-title">${title}</h3>
//           <p class="book-author">${author}</p>
//         </div>
//       </a>
//     `;
//   }

//   -----------------------------------------
// export function renderBooksByCategory(data) {
//     const markup = makeCategoryBooksMarkup(data);
//     renderingContainer.innerHTML = markup;
//   }

//   -------------------------------------------
// export async function renderCategories() {

//     const arr = [{list_name: "test1"}, {list_name: "test2"}]
//         for (const arr of inAlphabeticalOrder) {
//           const listItem = document.createElement('li');
//           const catBtn = document.createElement('button');
//           catBtn.setAttribute('type', 'button');
//           catBtn.classList.add('category-btn');
//           catBtn.textContent = ${arr.list_name};
//           catBtn.setAttribute('data-id', arr.list_name);
//           categoryListEl.appendChild(listItem);
//           listItem.appendChild(catBtn);
//         }
//     }
    
//     renderCategories();
//     ----------------------------------------