import{g as p,i as q,a as W,b as j,c as i,d as v,e as h,f as y,s as w,r as K,h as L,j as S}from"./assets/scroll-up-3b512b36.js";import{b as O}from"./assets/vendor-a536f886.js";const{bookIdsLSKey:k}=K,d={};async function z(o){const t=o.target.closest("li");if(t)try{let m=function(c){c.key==="Escape"&&g.close()};const e=t.dataset.bookId,r=(await p(e)).data,{book_image:n,title:a,author:l,description:x,buy_links:A}=r,[M,_]=A,I=`<div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="${q}#icon-x-close"></use>
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
        ${x}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${M.url}" class="amazon-link" target="_blank">
            <img src="${W}" alt="" />
          </a>
          <a
            href="${_.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="${j}" alt="" />
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
  </div>`,g=O.create(I,{onShow:c=>{c.element().querySelector(".modal-window-close-btn").onclick=c.close,window.addEventListener("keydown",m),document.body.style.overflow="hidden"},onClose:()=>{window.removeEventListener("keydown",m),document.body.style.overflow="";const{shopListBtn:c}=d;c.removeEventListener("click",C)}});g.show(),document.querySelector(".basicLightbox").style.backgroundColor="rgba(17, 17, 17, 0.4)",document.querySelector(".basicLightbox").style.overflowY="auto",D(e)}catch(e){console.error(e),i(!1,"Server Error")}}function D(o){d.shopListBtn=document.querySelector(".modal-window-book-shopping-list-button"),d.congratulationsText=document.querySelector(".modal-window-congratulations");const{shopListBtn:t}=d;b(o),t.addEventListener("click",()=>{C(o)})}function C(o){const t=b(o),e=v(k)||[];if(t){const s=e.indexOf(o);e.splice(s,1),h(k,e),y&&w(e),b(o)}else e.push(o),h(k,e),y&&w(e),b(o)}function b(o){const{congratulationsText:t,shopListBtn:e}=d,r=(v(k)||[]).includes(o);return r?(e.textContent="remove from the shopping list",t.classList.toggle("visually-hidden")):e.textContent="add to shopping list",r}const u=document.querySelector(".books-container");async function H(){try{return(await p("top-books")).data}catch(o){console.error(o),i(!1,"Server Error")}}async function $(){try{L();const t=(await H()).map(r=>{const n=r.books,a=r.list_name;return N(n,a)}).join(""),s=B("Best Sellers Books")+t;u.innerHTML=s,T(),S()}catch(o){console.error(o),i(!1,"Server Error")}}function N(o,t){const e=o.map(r=>R(r)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${t}</h2><ul class="books-list">${e}</ul><button type="button" class="books-list-btn"" data-category-name="${t}">See more</button></div>`}function R({book_image:o,title:t,author:e,_id:s}){return`
      <li class="book-item bestseller-book" data-book-id="${s}">
        <div class="book-image-container">
          <img
            class="book-image"
            src="${o}"
            alt="${t}"
          />
          <div class="book-overlay">QUICK VIEW</div>
        </div>
        <h3 class="book-title">${t}</h3>
        <p class="book-author">${e}</p>
      </li>
    `}async function F(){try{await Q(),await $(),u.addEventListener("click",f),u.addEventListener("click",z),E.addEventListener("click",f)}catch(o){console.error(o),i(!1,"Server Error")}}F();const E=document.querySelector(".categories-list");async function P(){try{return await p("category-list")}catch(o){console.error(o),i(!1,"Server Error")}}async function Q(){try{const o=await P();if(o.statusText!=="OK")throw new Error("Server error");const e=o.data.sort((a,l)=>a.list_name.localeCompare(l.list_name)),s='<li class="categories-list-item" ><p data-category-name="All Categories">All Categories</p></li>',r=e.map(a=>`<li class="categories-list-item" >
<p data-category-name="${a.list_name}">${a.list_name}</p>
</li>`).join("");E.innerHTML=s+r;const n=new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})}catch(o){i(!1,"Server Error"),console.log(o)}}function B(o){const t=o.split(" "),e=t[t.length-1];return`<h1 class="books-container-title">${t.slice(0,-1).join(" ")}<span class="last-word-title"> ${e}</span></h1>`}function U(o){return`<ul class="books-by-category-list">${o.map(s=>{const{book_image:r,title:n,author:a,_id:l}=s;return`<li class="book-item" data-book-id="${l}">
      <div class="book-image-container">
        <img
          class="book-image"
          src="${r}"
          alt="${n}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </div>
      <h3 class="book-title">${n}</h3>
      <p class="book-author">${a}</p>
    </li>`}).join("")}</ul>`}async function Y(o){try{L();const e=(await p("category",o)).data,s=B(o),r=U(e),n='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',a=s+r+n;u.innerHTML=a,S(),T()}catch(t){console.error(t),i(!1,"Server Error")}}async function f(o){try{const t=o.target.dataset.categoryName;if(t==="All Categories"){u.innerHTML="",$();return}else t&&Y(t);return}catch(t){console.error(t),i(!1,"Server Error")}}function T(){const o=document.querySelector(".books-container-title").textContent,t=document.querySelectorAll(".categories-list > .categories-list-item > p");t.forEach(e=>e.classList.remove("current-category")),t.forEach(e=>{const s=e.textContent.trim();if(o==="Best Sellers Books"&&s==="All Categories"){e.classList.add("current-category");return}}),t.forEach(e=>{const s=e.textContent.trim();if(o===s){e.classList.add("current-category");return}})}
//# sourceMappingURL=commonHelpers.js.map
