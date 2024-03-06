import{c,r as h,d as f,e as L,s as S,f as v,h as I,i as w,a as $,b as A,g as P}from"./assets/scroll-up-864f9e2f.js";import"./assets/vendor-60358816.js";const{bookIdsLSKey:B}=h;function q(){return(c(B)||[]).length}const g=document.getElementById("pagination");function u(){const o=document.querySelector(".shopping-list-gallery-books").children,s=window.innerWidth<768?4:3,e=window.innerWidth<768?2:3,t=q(),a=new tui.Pagination(g,{totalItems:t,itemsPerPage:s,visiblePages:e,centerAlign:!0});function i(p){if(t<=3){g.classList.add("hidden");return}else g.classList.remove("hidden");const l=p.page-1;for(let n=0;n<o.length;n++)o[n].style.display="none";for(let n=l*s;n<(l+1)*s;n++)o[n]&&(o[n].style.display="block")}a.on("afterMove",i),i({page:1})}const{bookIdsLSKey:r}=h;async function E(){const o=c(r);try{const s=o.map(i=>P(i));return(await Promise.allSettled(s)).filter(i=>i.status==="fulfilled").map(i=>i.value.data)}catch(s){return console.error("Error fetching book data:",s),[]}}async function T(){const o=document.querySelector(".shopping-list-gallery-books");try{const e=(await E()).map(t=>{const{book_image:a,title:i,author:p,description:l,_id:n,buy_links:k}=t,[b,m]=k;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${a}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${i}</h2>
                    <button data-book-id="${n}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete">
                        <use href="${w}#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${l}</p>
                    <p class="shopping-list-author">${p}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${b.url}">
                          <img class="shopping-list-link-amazon" src="${$}" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${m.url}">
                          <img class="shopping-list-link-apple" src="${A}" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");o.innerHTML=e}catch(s){console.error("Error rendering books:",s)}}function _(o){const s=o.target.closest("button");if(s){const e=s.dataset.bookId,t=c(r),a=t.indexOf(e);t.splice(a,1),f(r,t),L&&S(t),y()}}const z=document.querySelector(".shopping-list-gallery-books"),d=document.querySelector(".shopping-list-empty-state"),x=document.querySelector(".shopping-list-wrapper");x.addEventListener("click",_);async function y(){(c(r)||[]).length>0?(await T(),u(),d.style.display="none"):(z.style.display="none",d.style.display="block")}async function C(){v(),await y(),I(),u()}C();
//# sourceMappingURL=commonHelpers2.js.map
