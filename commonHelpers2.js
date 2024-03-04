import{a as c,b as l,g as m}from"./assets/scroll-up-a5bbb05a.js";import{t as y}from"./assets/vendor-a7101657.js";const f=["643282b1e85766588626a086","643282b1e85766588626a0b4","643282b1e85766588626a0d4","643282b2e85766588626a116","643282b2e85766588626a116","643282b2e85766588626a136"],a="booksId";c(a,f);const g=document.querySelector(".shopping-list-gallery-books");async function v(){const s=l(a);try{const o=s.map(e=>m(e));return(await Promise.allSettled(o)).filter(e=>e.status==="fulfilled").map(e=>e.value.data)}catch(o){return console.error("Error fetching book data:",o),[]}}async function d(){try{const o=(await v()).map(t=>{const{book_image:i,title:n,author:e,description:r,_id:p,buy_links:h}=t,[u,k]=h;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${i}"/>
                  </div>
                  <div>
                    <h2 class="shopping-list-books-title">${n}</h2>
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
                        <a class="shopping-list-shop-list-link" target="_blank" href="${u.url}">
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
              </li>`}).join("");g.innerHTML=o}catch(s){console.error("Error rendering books:",s)}}function b(s){s.preventDefault();const o=s.target.dataset.bookId;if(o){const t=l(a),i=t.indexOf(o);t.splice(i,1),c(a,t),d()}}function P(){const s=l(a),o=document.querySelector(".shopping-list-gallery-books"),t=document.querySelector(".shopping-list-empty-state");s.length>0?(d(),o.style.display="block",t.style.display="none",document.querySelector(".shopping-list-section").addEventListener("click",b)):(o.style.display="none",t.style.display="block")}P();g.addEventListener("click",b);const I=document.getElementById("pagination"),S=3,L=()=>(l("idBooks")||[]).length,A=(s,o)=>{const t=window.innerWidth<768?2:3;new y(I,{totalItems:s,itemsPerPage:S,visiblePages:t,page:o}).on("afterMove",async e=>{const r=e.page;localStorage.setItem("currentPage",r)});const n=document.getElementById("pagination");s<=3?n.style.display="none":n.style.display="flex"};let E=parseInt(localStorage.getItem("currentPage"))||1;const $=L();A($,E);
//# sourceMappingURL=commonHelpers2.js.map
