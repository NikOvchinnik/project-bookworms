import{c as p,r as h,d as f,e as L,s as v,f as I,h as S,i as w,a as A,b as $,g as B}from"./assets/scroll-up-73588950.js";import"./assets/vendor-76990a4b.js";const{bookIdsLSKey:P}=h;function u(){return(p(P)||[]).length}const l=document.getElementById("pagination");function q(){const s=document.querySelector(".shopping-list-gallery-books").children,o=window.innerWidth<768?4:3,n=window.innerWidth<768?2:3,t=u(),a=new tui.Pagination(l,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0});function i(d){if(t<=3){l.classList.add("hidden");return}else l.classList.remove("hidden");const r=d.page-1;for(let e=0;e<s.length;e++)s[e].style.display="none";for(let e=r*o;e<(r+1)*o;e++)s[e]&&(s[e].style.display="block")}a.on("afterMove",i),i({page:1})}function E(){if(u()<=3){l.classList.add("hidden"),console.log("add hidden");return}else l.classList.remove("hidden"),console.log("remove hidden")}const{bookIdsLSKey:c}=h;async function T(){const s=p(c);try{const o=s.map(i=>B(i));return(await Promise.allSettled(o)).filter(i=>i.status==="fulfilled").map(i=>i.value.data)}catch(o){return console.error("Error fetching book data:",o),[]}}async function _(){const s=document.querySelector(".shopping-list-gallery-books");try{const n=(await T()).map(t=>{const{book_image:a,title:i,author:d,description:r,_id:e,buy_links:y}=t,[b,m]=y;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${a}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${i}</h2>
                    <button data-book-id="${e}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="${w}#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${r}</p>
                    <p class="shopping-list-author">${d}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${b.url}">
                          <img class="shopping-list-link-amazon" src="${A}" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${m.url}">
                          <img class="shopping-list-link-apple" src="${$}" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");s.innerHTML=n}catch(o){console.error("Error rendering books:",o)}}function z(s){const o=s.target.closest("button");if(o){const n=o.dataset.bookId,t=p(c),a=t.indexOf(n);t.splice(a,1),f(c,t),L&&v(t),k()}}const R=document.querySelector(".shopping-list-gallery-books"),g=document.querySelector(".shopping-list-empty-state"),x=document.querySelector(".shopping-list-wrapper");x.addEventListener("click",z);async function k(){(p(c)||[]).length>0?(await _(),E(),g.style.display="none"):(R.style.display="none",g.style.display="block")}async function C(){I(),await k(),S(),q()}C();
//# sourceMappingURL=commonHelpers2.js.map
