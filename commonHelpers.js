import{g as b,a as f,b as m,i as h,s as y,r as I,c as v,h as L}from"./assets/scroll-up-3a7dacbc.js";import{b as q}from"./assets/vendor-76990a4b.js";const{bookIdsLSKey:u}=I,l={};async function W(o){const e=o.target.closest("li");if(!e)return;const t=e.dataset.bookId,n=(await b(t)).data,{book_image:i,title:a,author:c,description:A,buy_links:x}=n,[E,M]=x,_=`<div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="/img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="modal-window-book">
      <img
        class="modal-window-book-img"
        src="${i}"
        alt=""
      />
      <div>
        <h2 class="modal-window-book-title">${a}</h2>
        <p class="modal-window-book-author">${c}</p>
        <p class="modal-window-book-description">
        ${A}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${E.url}" class="amazon-link" target="_blank">
            <img src="/img/amazon.png" alt="" />
          </a>
          <a
            href="${M.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="/img/applebooks.png" alt="" />
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
  </div>`,p=q.create(_,{onShow:r=>{r.element().querySelector(".modal-window-close-btn").onclick=r.close,window.addEventListener("keydown",g),document.body.style.overflow="hidden"},onClose:()=>{window.removeEventListener("keydown",g),document.body.style.overflow="";const{shopListBtn:r}=l;r.removeEventListener("click",C)}});p.show(),j(t);function g(r){r.key==="Escape"&&p.close()}}function j(o){l.shopListBtn=document.querySelector(".modal-window-book-shopping-list-button"),l.congratulationsText=document.querySelector(".modal-window-congratulations");const{shopListBtn:e}=l;k(o),e.addEventListener("click",()=>{C(o)})}function C(o){const e=k(o),t=f(u)||[];if(e){const s=t.indexOf(o);t.splice(s,1),m(u,t),h&&y(t),k(o)}else t.push(o),m(u,t),h&&y(t),k(o)}function k(o){const{congratulationsText:e,shopListBtn:t}=l,n=(f(u)||[]).includes(o);return n?(t.textContent="remove from the shopping list",e.classList.toggle("visually-hidden")):t.textContent="add to shopping list",n}const d=document.querySelector(".books-container");async function K(){return(await b("top-books")).data}async function S(){v();const e=(await K()).map(n=>{const i=n.books,a=n.list_name;return O(i,a)}).join(""),s=B("Best Sellers Books")+e;d.innerHTML=s,T(),L()}function O(o,e){const t=o.map(n=>D(n)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${e}</h2><ul class="books-list">${t}</ul><button type="button" class="books-list-btn"" data-category-name="${e}">See more</button></div>`}function D({book_image:o,title:e,author:t,_id:s}){return`
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
    `}async function H(){await z(),await S(),d.addEventListener("click",w),d.addEventListener("click",W),$.addEventListener("click",w)}H();const $=document.querySelector(".categories-list");async function N(){return await b("category-list")}async function z(){try{const o=await N();if(o.statusText!=="OK")throw new Error("Server error");const t=o.data.sort((a,c)=>a.list_name.localeCompare(c.list_name)),s='<li class="categories-list-item" ><p data-category-name="All Categories">All Categories</p></li>',n=t.map(a=>`<li class="categories-list-item" >
<p data-category-name="${a.list_name}">${a.list_name}</p>
</li>`).join("");$.innerHTML=s+n;const i=new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0})}catch(o){console.log(o)}}function B(o){const e=o.split(" "),t=e[e.length-1];return`<h1 class="books-container-title">${e.slice(0,-1).join(" ")}<span class="last-word-title"> ${t}</span></h1>`}function R(o){return`<ul class="books-by-category-list">${o.map(s=>{const{book_image:n,title:i,author:a,_id:c}=s;return`<li class="book-item" data-book-id="${c}">
      <div class="book-image-container">
        <img
          class="book-image"
          src="${n}"
          alt="${i}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </div>
      <h3 class="book-title">${i}</h3>
      <p class="book-author">${a}</p>
    </li>`}).join("")}</ul>`}async function F(o){v();const t=(await b("category",o)).data,s=B(o),n=R(t),i='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',a=s+n+i;d.innerHTML=a,L(),T()}async function w(o){const e=o.target.dataset.categoryName;if(e==="All Categories"){d.innerHTML="",S();return}else e&&F(e)}function T(){const o=document.querySelector(".books-container-title").textContent,e=document.querySelectorAll(".categories-list > .categories-list-item > p");e.forEach(t=>t.classList.remove("current-category")),e.forEach(t=>{const s=t.textContent.trim();if(o==="Best Sellers Books"&&s==="All Categories"){t.classList.add("current-category");return}}),e.forEach(t=>{const s=t.textContent.trim();if(o===s){t.classList.add("current-category");return}})}
//# sourceMappingURL=commonHelpers.js.map
