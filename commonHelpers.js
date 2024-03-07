import{g as k,i as W,a as j,b as K,c as i,d as L,e as y,f as w,s as f,r as p,h as C,j as S}from"./assets/scroll-up-e8294e7f.js";import{b as O}from"./assets/vendor-a536f886.js";const{bookIdsLSKey:b}=p,d={};async function z(o){const t=o.target.closest("li");if(t)try{let h=function(c){c.key==="Escape"&&m.close()};const e=t.dataset.bookId,r=(await k(e)).data,{book_image:n,title:a,author:l,description:A,buy_links:M}=r,[_,I]=M,q=`<div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="${W}#icon-x-close"></use>
      </svg>
    </button>

    <div class="modal-window-book">
      <img
        class="modal-window-book-img"
        src="${n}"
        alt=""
      />
      <div>
        <h2 class="modal-window-book-title">${a}</h2>
        <p class="modal-window-book-author">${l}</p>
        <p class="modal-window-book-description">
        ${A}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${_.url}" class="amazon-link" target="_blank">
            <img src="${j}" alt="" />
          </a>
          <a
            href="${I.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="${K}" alt="" />
          </a>
        </div>
      </div>
    </div>
    <button type="button" class="modal-window-book-shopping-list-button">
      Add to shopping list
    </button>
    <p class="modal-window-congratulations visually-hidden">
      Congratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>`,m=O.create(q,{onShow:c=>{c.element().querySelector(".modal-window-close-btn").onclick=c.close,window.addEventListener("keydown",h),document.body.style.overflow="hidden"},onClose:()=>{window.removeEventListener("keydown",h),document.body.style.overflow="";const{shopListBtn:c}=d;c.removeEventListener("click",$)}});m.show(),document.querySelector(".basicLightbox").style.backgroundColor="rgba(17, 17, 17, 0.4)",document.querySelector(".basicLightbox").style.overflowY="auto",D(e)}catch(e){console.error(e),i(!1,"Server Error")}}function D(o){d.shopListBtn=document.querySelector(".modal-window-book-shopping-list-button"),d.congratulationsText=document.querySelector(".modal-window-congratulations");const{shopListBtn:t}=d;u(o),t.addEventListener("click",()=>{$(o)})}function $(o){const t=u(o),e=L(b)||[];if(t){const s=e.indexOf(o);e.splice(s,1),y(b,e),w&&f(e),u(o)}else e.push(o),y(b,e),w&&f(e),u(o)}function u(o){const{congratulationsText:t,shopListBtn:e}=d,r=(L(b)||[]).includes(o);return r?(e.textContent="remove from the shopping list",t.classList.toggle("visually-hidden")):e.textContent="add to shopping list",r}const{booksContainer:g,categoriesList:H}=p;async function N(){try{return(await k("top-books")).data}catch(o){console.error(o),i(!1,"Server Error")}}async function E(){try{C();const t=(await N()).map(r=>{const n=r.books,a=r.list_name;return R(n,a)}).join(""),s=T("Best Sellers Books")+t;g.innerHTML=s,x(),S()}catch(o){console.error(o),i(!1,"Server Error")}}function R(o,t){const e=o.map(r=>F(r)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${t}</h2><ul class="books-list">${e}</ul><button type="button" class="books-list-btn"" data-category-name="${t}">See more</button></div>`}function F({book_image:o,title:t,author:e,_id:s}){return`
      <li class="book-item bestseller-book" data-book-id="${s}">
        <button class="book-image-container" aria-label="${t}">
          <img
            class="book-image"
            src="${o}"
            alt="${t}"
          />
          <div class="book-overlay">QUICK VIEW</div>
        </button>
        <h3 class="book-title">${t}</h3>
        <p class="book-author">${e}</p>
      </li>
    `}async function P(){try{await Y(),await E(),g.addEventListener("click",v),g.addEventListener("click",z),H.addEventListener("click",v)}catch(o){console.error(o),i(!1,"Server Error")}}P();const{booksContainer:B,categoriesList:Q}=p;async function U(){try{return await k("category-list")}catch(o){console.error(o),i(!1,"Server Error")}}async function Y(){try{const o=await U();if(o.statusText!=="OK")throw new Error("Server error");const e=o.data.sort((a,l)=>a.list_name.localeCompare(l.list_name)),s='<li class="categories-list-item" ><button type="button" aria-label="All Categories"  class="btn-categories-list" data-category-name="All Categories">All Categories</button></li>',r=e.map(a=>`<li class="categories-list-item" >
<button type="button" class="btn-categories-list" aria-label="${a.list_name}" data-category-name="${a.list_name}">${a.list_name}</button>
</li>`).join("");Q.innerHTML=s+r;const n=new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})}catch(o){i(!1,"Server Error"),console.log(o)}}function T(o){const t=o.split(" "),e=t[t.length-1];return`<h1 class="books-container-title">${t.slice(0,-1).join(" ")}<span class="last-word-title"> ${e}</span></h1>`}function G(o){return`<ul class="books-by-category-list">${o.map(s=>{const{book_image:r,title:n,author:a,_id:l}=s;return`<li class="book-item" data-book-id="${l}">
      <button class="book-image-container" aria-label="${n}">
        <img
          class="book-image"
          src="${r}"
          alt="${n}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </button>
      <h3 class="book-title">${n}</h3>
      <p class="book-author">${a}</p>
    </li>`}).join("")}</ul>`}async function J(o){try{C();const e=(await k("category",o)).data,s=T(o),r=G(e),n='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',a=s+r+n;B.innerHTML=a,S(),x()}catch(t){console.error(t),i(!1,"Server Error")}}async function v(o){try{const t=o.target.dataset.categoryName;if(t==="All Categories"){B.innerHTML="",E();return}else t&&J(t);return}catch(t){console.error(t),i(!1,"Server Error")}}function x(){const o=document.querySelector(".books-container-title").textContent,t=document.querySelectorAll(".categories-list > .categories-list-item > .btn-categories-list");t.forEach(e=>e.classList.remove("current-category")),t.forEach(e=>{const s=e.textContent.trim();if(o==="Best Sellers Books"&&s==="All Categories"){e.classList.add("current-category");return}}),t.forEach(e=>{const s=e.textContent.trim();if(o===s){e.classList.add("current-category");return}})}
//# sourceMappingURL=commonHelpers.js.map
