import{a as l,b as y,i as b,s as f,r as c,g as v}from"./assets/scroll-up-81586863.js";import{t as I}from"./assets/vendor-08007cbf.js";const{bookIdsLSKey:a}=c;async function S(){const s=l(a);try{const t=s.map(o=>v(o));return(await Promise.allSettled(t)).filter(o=>o.status==="fulfilled").map(o=>o.value.data)}catch(t){return console.error("Error fetching book data:",t),[]}}async function P(){const s=document.querySelector(".shopping-list-gallery-books");try{const n=(await S()).map(i=>{const{book_image:e,title:o,author:r,description:d,_id:u,buy_links:h}=i,[m,k]=h;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${e}"/>
                  </div>
                  <div>
                    <h2 class="shopping-list-books-title">${o}</h2>
                    <button data-book-id="${u}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="./img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${d}</p>
                    <p class="shopping-list-author">${r}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${m.url}">
                          <img class="shopping-list-link-amazon" src="./img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${k.url}">
                          <img class="shopping-list-link-apple" src="./img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");s.innerHTML=n}catch(t){console.error("Error rendering books:",t)}}function L(s){s.preventDefault();const t=s.target.closest("button");if(t){const i=t.dataset.bookId,e=l(a),o=e.indexOf(i);e.splice(o,1),y(a,e),b&&f(e),g();return}const n=s.target.parentNode;if(n.tagName==="A"){const i=n.getAttribute("href");window.open(i,"_blank");return}}const A=document.querySelector(".shopping-list-gallery-books"),p=document.querySelector(".shopping-list-empty-state"),w=document.querySelector(".shopping-list-section");w.addEventListener("click",L);function g(){(l(a)||[]).length>0?(P(),p.style.display="none"):(A.style.display="none",p.style.display="block")}g();const{bookIdsLSKey:B}=c,E=document.getElementById("pagination"),$=3,_=()=>(l(B)||[]).length,T=(s,t)=>{const n=window.innerWidth<768?2:3;new I(E,{totalItems:s,itemsPerPage:$,visiblePages:n,page:t}).on("afterMove",async o=>{const r=o.page;localStorage.setItem("currentPage",r)});const e=document.getElementById("pagination");s<=3?e.style.display="none":e.style.display="flex"};let q=parseInt(localStorage.getItem("currentPage"))||1;const z=_();T(z,q);
//# sourceMappingURL=commonHelpers2.js.map
