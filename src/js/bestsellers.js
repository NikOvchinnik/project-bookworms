console.log('bestsellers');
// Функція для створення розмітки для назв категорії
function booksCategoryTemplate(categoryName, categoryBooks){
const words = categoryName.split(' ');
const lastWord = words.pop();
words.push(`<span class="akcent">&{lastWord}</span>`);
return `
<section class=" seller__section">
<h1 class="section__title categoty-card__title">${words.join(' ')}</h1>
<ul class="sellers-delete flex-wrap">${renderMarkup( booksTemplate, categoryBooks)}</ul></section>`;
}

// Функція для створення розмітки для окремої книги
function booksTemplate({ book__image, title, author, _id}){
    return `
    <li class="sellers-item" data-id="${_id}">
    <div class="book-image__wrapper">
    <img class="book-image"
    src="${book__image}"
    alt="${title}"></div>
    <h3 class="book-title">${title}</h3>
    <p class="book-author">${author}</p>
    </li>`;
}
