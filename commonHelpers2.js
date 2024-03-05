import{a as l,b,i as f,s as v,c as I,h as c,r as g,g as S}from"./assets/scroll-up-f7446c00.js";import{t as L}from"./assets/vendor-08007cbf.js";const{bookIdsLSKey:a}=g;async function P(){const s=l(a);try{const t=s.map(o=>S(o));return(await Promise.allSettled(t)).filter(o=>o.status==="fulfilled").map(o=>o.value.data)}catch(t){return console.error("Error fetching book data:",t),[]}}async function A(){const s=document.querySelector(".shopping-list-gallery-books");try{const n=(await P()).map(i=>{const{book_image:e,title:o,author:r,description:u,_id:h,buy_links:m}=i,[k,y]=m;return`<li class="shopping-list-books-items">
                <div class="shopping-list-books-information">
                  <div class="shopping-list-basket-img">
                    <img class="shopping-list-img" src="${e}"/>
                  </div>
                  <div class="shopping-list-text-content">
                    <h2 class="shopping-list-books-title">${o}</h2>
                    <button data-book-id="${h}" type="button" class="shopping-list-button">
                      <svg class="shopping-list-delete" >
                        <use href="../img/icons.svg#icon-trash"></use>
                      </svg>
                    </button>
                    <h3 class="shopping-list-books-category">Category</h3>
                    <p class="shopping-list-books-desc">${u}</p>
                    <p class="shopping-list-author">${r}</p>
                    <ul class="shopping-list-shop-list">
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${k.url}">
                          <img class="shopping-list-link-amazon" src="../img/amazon.png" alt="logo-amazon">
                        </a>
                      </li>
                      <li class="shopping-list-shop-list-items">
                        <a class="shopping-list-shop-list-link" target="_blank" href="${y.url}">
                          <img class="shopping-list-link-apple" src="../img/applebooks.png" alt="apple-books">
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>`}).join("");c(),s.innerHTML=n}catch(t){console.error("Error rendering books:",t)}}function w(s){s.preventDefault();const t=s.target.closest("button");if(t){const i=t.dataset.bookId,e=l(a),o=e.indexOf(i);e.splice(o,1),b(a,e),f&&v(e),d();return}const n=s.target.parentNode;if(n.tagName==="A"){const i=n.getAttribute("href");window.open(i,"_blank");return}}const B=document.querySelector(".shopping-list-gallery-books"),p=document.querySelector(".shopping-list-empty-state"),E=document.querySelector(".shopping-list-section");E.addEventListener("click",w);function d(){I(),(l(a)||[]).length>0?(A(),p.style.display="none"):(c(),B.style.display="none",p.style.display="block")}d();const{bookIdsLSKey:$}=g,_=document.getElementById("pagination"),T=3,q=()=>(l($)||[]).length,x=(s,t)=>{const n=window.innerWidth<768?2:3;new L(_,{totalItems:s,itemsPerPage:T,visiblePages:n,page:t}).on("afterMove",async o=>{const r=o.page;localStorage.setItem("currentPage",r)});const e=document.getElementById("pagination");s<=3?e.style.display="none":e.style.display="flex"};let z=parseInt(localStorage.getItem("currentPage"))||1;const D=q();x(D,z);
//# sourceMappingURL=commonHelpers2.js.map
