import{a,b as m,i as y,s as f,c as v,h as p,r as L,g as S}from"./assets/scroll-up-5583f1ed.js";import"./assets/vendor-76990a4b.js";const{bookIdsLSKey:l}=L;async function A(){const t=a(l);try{const s=t.map(o=>S(o));return(await Promise.allSettled(s)).filter(o=>o.status==="fulfilled").map(o=>o.value.data)}catch(s){return console.error("Error fetching book data:",s),[]}}async function I(){const t=document.querySelector(".shopping-list-gallery-books");try{const n=(await A()).map(e=>{const{book_image:i,title:o,author:g,description:h,_id:d,buy_links:u}=e,[k,b]=u;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${i}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${o}</h2>
                    <button data-book-id="${d}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete" >
                        <use href="../img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${h}</p>
                    <p class="shopping-list-author">${g}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${k.url}">
                          <img class="shopping-list-link-amazon" src="../img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${b.url}">
                          <img class="shopping-list-link-apple" src="../img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");p(),t.innerHTML=n}catch(s){console.error("Error rendering books:",s)}}function $(t){t.preventDefault();const s=t.target.closest("button");if(s){const e=s.dataset.bookId,i=a(l),o=i.indexOf(e);i.splice(o,1),m(l,i),y&&f(i),c();return}const n=t.target.parentNode;if(n.tagName==="A"){const e=n.getAttribute("href");window.open(e,"_blank");return}}const _=document.querySelector(".shopping-list-gallery-books"),r=document.querySelector(".shopping-list-empty-state"),w=document.querySelector(".shopping-list-section");w.addEventListener("click",$);function c(){v(),(a(l)||[]).length>0?(I(),r.style.display="none"):(p(),_.style.display="none",r.style.display="block")}c();
//# sourceMappingURL=commonHelpers2.js.map
