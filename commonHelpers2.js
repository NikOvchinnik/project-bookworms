import{a as c,g as l}from"./assets/scroll-up-51fab632.js";import{a as m,t as y}from"./assets/vendor-a7101657.js";async function f(o,s=""){const t=`https://books-backend.p.goit.global/books/${o}`;let n={};if(s){const i=s.split(" ").join("%20");n.category=i}return await m.get(t,{params:n,paramsSerializer:i=>Object.keys(i).map(e=>`${e}=${i[e]}`).join("&")})}const v=["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136"],a="booksId";c(a,v);const g=document.querySelector(".shopping-list-gallery-books");async function P(){const o=l(a);try{const s=o.map(e=>f(e));return(await Promise.allSettled(s)).filter(e=>e.status==="fulfilled").map(e=>e.value.data)}catch(s){return console.error("Error fetching book data:",s),[]}}async function d(){try{const s=(await P()).map(t=>{const{book_image:n,title:i,author:e,description:r,_id:p,buy_links:u}=t,[h,k]=u;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${n}"/>
                  </div>
                  <div>
                    <h2 class="shopping-list-books-title">${i}</h2>
                    <button data-book-id="${p}" type="button" class="shopping-list-button">
                      <svg data-book-id="${p}" class="shopping-list-delete">
                        <use href="./img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${r}</p>
                    <p class="shopping-list-author">${e}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${h.url}">
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
              </li>`}).join("");g.innerHTML=s}catch(o){console.error("Error rendering books:",o)}}function b(o){o.preventDefault();const s=o.target.dataset.bookId;if(s){const t=l(a),n=t.indexOf(s);t.splice(n,1),c(a,t),d()}}function S(){const o=l(a),s=document.querySelector(".shopping-list-gallery-books"),t=document.querySelector(".shopping-list-empty-state");o.length>0?(d(),s.style.display="block",t.style.display="none",document.querySelector(".shopping-list-section").addEventListener("click",b)):(s.style.display="none",t.style.display="block")}S();g.addEventListener("click",b);const I=document.getElementById("pagination"),L=3,$=()=>(l("idBooks")||[]).length,A=(o,s)=>{const t=window.innerWidth<768?2:3;new y(I,{totalItems:o,itemsPerPage:L,visiblePages:t,page:s}).on("afterMove",async e=>{const r=e.page;localStorage.setItem("currentPage",r)});const i=document.getElementById("pagination");o<=3?i.style.display="none":i.style.display="flex"};let E=parseInt(localStorage.getItem("currentPage"))||1;const w=$();A(w,E);
//# sourceMappingURL=commonHelpers2.js.map
