import{d as c,r as h,e as S,f as v,s as L,h as I,j as w,c as u,i as $,a as A,b as P,g as B}from"./assets/scroll-up-a4eb6e02.js";import"./assets/vendor-a536f886.js";const{bookIdsLSKey:E}=h;function T(){return(c(E)||[]).length}const g=document.getElementById("pagination");function y(){const s=document.querySelector(".shopping-list-gallery-books").children,o=window.innerWidth<768?4:3,n=window.innerWidth<768?2:3,t=T(),a=new tui.Pagination(g,{totalItems:t,itemsPerPage:o,visiblePages:n,centerAlign:!0});function i(p){if(t<=3){g.classList.add("hidden");return}else g.classList.remove("hidden");const l=p.page-1;for(let e=0;e<s.length;e++)s[e].style.display="none";for(let e=l*o;e<(l+1)*o;e++)s[e]&&(s[e].style.display="block")}a.on("afterMove",i),i({page:1})}const{bookIdsLSKey:r}=h;async function q(){const s=c(r);try{const o=s.map(i=>B(i));return(await Promise.allSettled(o)).filter(i=>i.status==="fulfilled").map(i=>i.value.data)}catch(o){return console.error("Error fetching book data:",o),[]}}async function z(){const s=document.querySelector(".shopping-list-gallery-books");try{const n=(await q()).map(t=>{const{book_image:a,title:i,author:p,description:l,_id:e,buy_links:b}=t,[m,f]=b;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${a}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${i}</h2>
                    <button data-book-id="${e}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="${$}#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${l}</p>
                    <p class="shopping-list-author">${p}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${m.url}">
                          <img class="shopping-list-link-amazon" src="${A}" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${f.url}">
                          <img class="shopping-list-link-apple" src="${P}" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");s.innerHTML=n}catch(o){u(!1,"Server Error"),console.error("Error rendering books:",o)}}function _(s){const o=s.target.closest("button");if(o){const n=o.dataset.bookId,t=c(r),a=t.indexOf(n);t.splice(a,1),S(r,t),v&&L(t),k()}}const M=document.querySelector(".shopping-list-gallery-books"),d=document.querySelector(".shopping-list-empty-state"),x=document.querySelector(".shopping-list-wrapper");x.addEventListener("click",_);async function k(){(c(r)||[]).length>0?(await z(),y(),d.style.display="none"):(M.style.display="none",d.style.display="block")}async function C(){try{I(),await k(),w(),y()}catch(s){console.error(s),u(!1,"Server Error")}}C();
//# sourceMappingURL=commonHelpers2.js.map
