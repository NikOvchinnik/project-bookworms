import{a,b as m,i as y,s as f,c as v,h as p,r as L,g as S}from"./assets/scroll-up-3a7dacbc.js";import"./assets/vendor-76990a4b.js";const{bookIdsLSKey:n}=L;async function I(){const i=a(n);try{const s=i.map(t=>S(t));return(await Promise.allSettled(s)).filter(t=>t.status==="fulfilled").map(t=>t.value.data)}catch(s){return console.error("Error fetching book data:",s),[]}}async function A(){const i=document.querySelector(".shopping-list-gallery-books");try{const l=(await I()).map(o=>{const{book_image:e,title:t,author:g,description:h,_id:d,buy_links:k}=o,[u,b]=k;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${e}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${t}</h2>
                    <button data-book-id="${d}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="/img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${h}</p>
                    <p class="shopping-list-author">${g}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${u.url}">
                          <img class="shopping-list-link-amazon" src="/img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${b.url}">
                          <img class="shopping-list-link-apple" src="/img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");p(),i.innerHTML=l}catch(s){console.error("Error rendering books:",s)}}function $(i){const s=i.target.closest("button");if(s){const l=s.dataset.bookId,o=a(n),e=o.indexOf(l);o.splice(e,1),m(n,o),y&&f(o),c()}}const B=document.querySelector(".shopping-list-gallery-books"),r=document.querySelector(".shopping-list-empty-state"),_=document.querySelector(".shopping-list-section");_.addEventListener("click",$);function c(){v(),(a(n)||[]).length>0?(A(),r.style.display="none"):(p(),B.style.display="none",r.style.display="block")}c();
//# sourceMappingURL=commonHelpers2.js.map
