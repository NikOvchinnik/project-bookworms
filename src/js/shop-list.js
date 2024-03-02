'use strict';

import { getData } from "./books-api";

 const bookIds1 = ["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136"];

 const bookIds2 = ["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136","643282b2e85766588626a154","643282b2e85766588626a174","643282b3e85766588626a1e4","643282b3e85766588626a1f8","643282b3e85766588626a20c","643282b3e85766588626a220"];

 async function fetchBookData(bookIds) {
    try {
        const promises = bookIds.map(bookId => getData(bookId));
        const results = await Promise.allSettled(promises);

        const fulfilledResults = results.filter(result => result.status === 'fulfilled');
        const rejectedResults = results.filter(result => result.status === 'rejected');

        if (rejectedResults.length > 0) {
            console.error('Some requests failed:', rejectedResults.map(result => result.reason));
        }

        const bookDataArray = fulfilledResults.map(result => result.status === 'fulfilled' ? result.value.data : null);

        console.log('Book Data Array:', bookDataArray);

        return bookDataArray.filter(book => book !== null);
    } catch (error) {
        console.error('Error fetching book data:', error);
        return [];
    }
}

fetchBookData(bookIds1);

async function fetchAndRenderBooks() {
  try {
    const books = await fetchBookData(bookIds1);
    if (books.length === 0) {
      console.log('No books found.');
      return;
    }

    books.forEach(book => renderBook(book));
  } catch (error) {
    console.error('Error retrieving book data:', error);
  }
}

// Mалювати книги
function renderBook(books) {
    const basket = document.createDocumentFragment();
    const listBasket = document.querySelector(".listBasket");

    books.forEach(book => {
      const shoppingListItems = document.createElement("li");
      shoppingListItems.classList.add("shopping-list-books-items");

      const shoppingListBooksInformation = document.createElement("div");
      shoppingListBooksInformation.classList.add("shopping-list-books-information");

      const shoppingListBasketImg = document.createElement("div");
      shoppingListBasketImg.classList.add("shopping-list-basket-img");

      const img = document.createElement("img");
      img.classList.add("shopping-list-img");
      // img.id = book._id;
      // img.src = book.preview;
      // img.dataset.source = book.original;
      // img.alt = book.description;
      img.dataset.bookId = book._id;

      shoppingListBasketImg.appendChild(img);
      shoppingListBooksInformation.appendChild(shoppingListBasketImg);
      shoppingListItems.appendChild(shoppingListBooksInformation);
      basket.appendChild(shoppingListItems);

      const secondDiv = document.createElement("div");
      shoppingListBooksInformation.appendChild(secondDiv);

      const shoppingListBooksTitle = document.createElement("h2");
      shoppingListBooksTitle.classList.add("shopping-list-books-title");
      shoppingListBooksTitle.textContent = book.title;
      secondDiv.appendChild(shoppingListBooksTitle);

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.classList.add("shopping-list-button");
      const trashIcon = document.createElement("svg");
      trashIcon.classList.add("shopping-list-delete");
      const useElement = document.createElement("use");
      useElement.setAttribute("href", "/src/img/icons.svg#icon-trash");
      trashIcon.appendChild(useElement);
      deleteButton.appendChild(trashIcon);

      secondDiv.appendChild(deleteButton);

      const shoppingListBooksCategory = document.createElement("h3");
      shoppingListBooksCategory.classList.add("shopping-list-books-category");
      // shoppingListBooksCategory.textContent = book.category;
      secondDiv.appendChild(shoppingListBooksCategory);

      const shoppingListBooksDesc = document.createElement("p");
      shoppingListBooksDesc.classList.add("shopping-list-books-desc");
      // shoppingListBooksDesc.textContent = book.desc;
      secondDiv.appendChild(shoppingListBooksDesc);

      const shoppingListAuthor = document.createElement("p");
      shoppingListAuthor.classList.add("shopping-list-author");
      // shoppingListAuthor.textContent = books.author;
      secondDiv.appendChild(shoppingListAuthor);

      const shoppingListShopList = document.createElement("ul");
      shoppingListShopList.classList.add("shopping-list-shop-list");
      secondDiv.appendChild(shoppingListShopList);

      const shoppingListShopListItems = document.createElement("li");
      shoppingListShopListItems.classList.add("shopping-list-shop-list-items");
      shoppingListShopList.appendChild(shoppingListShopListItems);

      const shoppingListShopListLink = document.createElement("a");
      shoppingListShopListLink.classList.add("shopping-list-shop-list-link");
      shoppingListShopListLink.href = "https://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20";
      shoppingListShopListLink.target = "_blank";
      shoppingListShopListItems.appendChild(shoppingListShopListLink);

      const shoppingListLinkAmazon = document.createElement("img");
      shoppingListLinkAmazon.classList.add("shopping-list-link-amazon");
      shoppingListLinkAmazon.src = "/src/img/amazon.png";
      shoppingListLinkAmazon.alt = "logo-amazon";
      shoppingListShopListLink.appendChild(shoppingListLinkAmazon);

      const shoppingListShopListItemsApple = document.createElement("li");
      shoppingListShopListItemsApple.classList.add("shopping-list-shop-list-items");
      shoppingListShopList.appendChild(shoppingListShopListItemsApple);

      const shoppingListShopListLinkApple = document.createElement("a");
      shoppingListShopListLinkApple.classList.add("shopping-list-shop-list-link");
      shoppingListShopListLinkApple.href = "https://books.apple.com/us/audiobook/it-ends-with-us-unabridged/id1439482144";
      shoppingListShopListLinkApple.target = "_blank";
      shoppingListShopListItemsApple.appendChild(shoppingListShopListLinkApple);

      const shoppingListLinkApple = document.createElement("img");
      shoppingListLinkApple.classList.add("shopping-list-link-apple");
      shoppingListLinkApple.src = "/src/img/applebooks.png";
      shoppingListLinkApple.alt = "apple-books";


      basket.appendChild(shoppingListItems);

    });

    listBasket.appendChild(basket);
}
