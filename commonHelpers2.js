import{a as p,g as n}from"./assets/modal-authorization-d829e432.js";import{a as m}from"./assets/vendor-38dba707.js";async function y(o,s=""){const t=`https://books-backend.p.goit.global/books/${o}`;let e={};if(s){const a=s.split(" ").join("%20");e.category=a}return await m.get(t,{params:e,paramsSerializer:a=>Object.keys(a).map(i=>`${i}=${a[i]}`).join("&")})}const f=["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136"],l="booksId";p(l,f);const c=document.querySelector(".shopping-list-gallery-books");async function v(){const o=n(l);try{const s=o.map(i=>y(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value.data)}catch(s){return console.error("Error fetching book data:",s),[]}}async function g(){try{const s=(await v()).map(t=>{const{book_image:e,title:a,author:i,description:d,_id:r,buy_links:h}=t,[k,u]=h;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${e}"/>
                  </div>
                  <div>
                    <h2 class="shopping-list-books-title">${a}</h2>
                    <button data-book-id="${r}" type="button" class="shopping-list-button">
                      <svg data-book-id="${r}" class="shopping-list-delete">
                        <use href="./img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${d}</p>
                    <p class="shopping-list-author">${i}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${k.url}">
                          <img class="shopping-list-link-amazon" src="./img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${u.url}">
                          <img class="shopping-list-link-apple" src="./img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");c.innerHTML=s}catch(o){console.error("Error rendering books:",o)}}function b(o){o.preventDefault();const s=o.target.dataset.bookId;if(s){const t=n(l),e=t.indexOf(s);t.splice(e,1),p(l,t),g()}}function L(){const o=n(l),s=document.querySelector(".shopping-list-gallery-books"),t=document.querySelector(".shopping-list-empty-state");o.length>0?(g(),s.style.display="block",t.style.display="none",document.querySelector(".shopping-list-section").addEventListener("click",b)):(s.style.display="none",t.style.display="block")}L();c.addEventListener("click",b);
//# sourceMappingURL=commonHelpers2.js.map
