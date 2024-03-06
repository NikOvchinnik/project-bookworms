import{g as b,i as I,a as q,b as W,c as f,d as g,e as h,s as y,r as j,f as v,h as L}from"./assets/scroll-up-864f9e2f.js";import{b as K}from"./assets/vendor-60358816.js";const{bookIdsLSKey:u}=j,l={};async function O(o){const e=o.target.closest("li");if(!e)return;const t=e.dataset.bookId,a=(await b(t)).data,{book_image:i,title:n,author:c,description:x,buy_links:A}=a,[E,M]=A,_=`<div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="${I}#icon-x-close"></use>
      </svg>
    </button>

    <div class="modal-window-book">
      <img
        class="modal-window-book-img"
        src="${i}"
        alt=""
      />
      <div>
        <h2 class="modal-window-book-title">${n}</h2>
        <p class="modal-window-book-author">${c}</p>
        <p class="modal-window-book-description">
        ${x}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${E.url}" class="amazon-link" target="_blank">
            <img src="${q}" alt="" />
          </a>
          <a
            href="${M.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="${W}" alt="" />
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
  </div>`,p=K.create(_,{onShow:r=>{r.element().querySelector(".modal-window-close-btn").onclick=r.close,window.addEventListener("keydown",m),document.body.style.overflow="hidden"},onClose:()=>{window.removeEventListener("keydown",m),document.body.style.overflow="";const{shopListBtn:r}=l;r.removeEventListener("click",C)}});p.show(),document.querySelector(".basicLightbox").style.backgroundColor="rgba(17, 17, 17, 0.4)",document.querySelector(".basicLightbox").style.overflowY="auto",D(t);function m(r){r.key==="Escape"&&p.close()}}function D(o){l.shopListBtn=document.querySelector(".modal-window-book-shopping-list-button"),l.congratulationsText=document.querySelector(".modal-window-congratulations");const{shopListBtn:e}=l;k(o),e.addEventListener("click",()=>{C(o)})}function C(o){const e=k(o),t=f(u)||[];if(e){const s=t.indexOf(o);t.splice(s,1),g(u,t),h&&y(t),k(o)}else t.push(o),g(u,t),h&&y(t),k(o)}function k(o){const{congratulationsText:e,shopListBtn:t}=l,a=(f(u)||[]).includes(o);return a?(t.textContent="remove from the shopping list",e.classList.toggle("visually-hidden")):t.textContent="add to shopping list",a}const d=document.querySelector(".books-container");async function H(){return(await b("top-books")).data}async function S(){v();const e=(await H()).map(a=>{const i=a.books,n=a.list_name;return N(i,n)}).join(""),s=B("Best Sellers Books")+e;d.innerHTML=s,T(),L()}function N(o,e){const t=o.map(a=>z(a)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${e}</h2><ul class="books-list">${t}</ul><button type="button" class="books-list-btn"" data-category-name="${e}">See more</button></div>`}function z({book_image:o,title:e,author:t,_id:s}){return`
      <li class="book-item bestseller-book" data-book-id="${s}">
        <div class="book-image-container">
          <img
            class="book-image"
            src="${o}"
            alt="${e}"
          />
          <div class="book-overlay">QUICK VIEW</div>
        </div>
        <h3 class="book-title">${e}</h3>
        <p class="book-author">${t}</p>
      </li>
    `}async function R(){await P(),await S(),d.addEventListener("click",w),d.addEventListener("click",O),$.addEventListener("click",w)}R();const $=document.querySelector(".categories-list");async function F(){return await b("category-list")}async function P(){try{const o=await F();if(o.statusText!=="OK")throw new Error("Server error");const t=o.data.sort((n,c)=>n.list_name.localeCompare(c.list_name)),s='<li class="categories-list-item" ><p data-category-name="All Categories">All Categories</p></li>',a=t.map(n=>`<li class="categories-list-item" >
<p data-category-name="${n.list_name}">${n.list_name}</p>
</li>`).join("");$.innerHTML=s+a;const i=new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})}catch(o){console.log(o)}}function B(o){const e=o.split(" "),t=e[e.length-1];return`<h1 class="books-container-title">${e.slice(0,-1).join(" ")}<span class="last-word-title"> ${t}</span></h1>`}function Q(o){return`<ul class="books-by-category-list">${o.map(s=>{const{book_image:a,title:i,author:n,_id:c}=s;return`<li class="book-item" data-book-id="${c}">
      <div class="book-image-container">
        <img
          class="book-image"
          src="${a}"
          alt="${i}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </div>
      <h3 class="book-title">${i}</h3>
      <p class="book-author">${n}</p>
    </li>`}).join("")}</ul>`}async function U(o){v();const t=(await b("category",o)).data,s=B(o),a=Q(t),i='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',n=s+a+i;d.innerHTML=n,L(),T()}async function w(o){const e=o.target.dataset.categoryName;if(e==="All Categories"){d.innerHTML="",S();return}else e&&U(e)}function T(){const o=document.querySelector(".books-container-title").textContent,e=document.querySelectorAll(".categories-list > .categories-list-item > p");e.forEach(t=>t.classList.remove("current-category")),e.forEach(t=>{const s=t.textContent.trim();if(o==="Best Sellers Books"&&s==="All Categories"){t.classList.add("current-category");return}}),e.forEach(t=>{const s=t.textContent.trim();if(o===s){t.classList.add("current-category");return}})}
//# sourceMappingURL=commonHelpers.js.map
