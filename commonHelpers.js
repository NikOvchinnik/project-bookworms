import{g as k,a as f,b as m,i as h,s as y,r as I,c as v,h as L}from"./assets/scroll-up-5583f1ed.js";import{b as q}from"./assets/vendor-76990a4b.js";const{bookIdsLSKey:d}=I,c={};async function W(o){const e=o.target.closest("li");if(!e)return;const t=e.dataset.bookId,n=(await k(t)).data,{book_image:a,title:i,author:b,description:A,buy_links:x}=n,[E,M]=x,_=`
  <div class="modal-window">
    <button type="button" class="modal-window-close-btn">
      <svg class="modal-window-close-btn-icon" width="28" height="28">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <div class="modal-window-book">
      <img
        class="modal-window-book-img"
        src="${a}"
        alt=""
      />
      <div>
        <h2 class="modal-window-book-title">${i}</h2>
        <p class="modal-window-book-author">${b}</p>
        <p class="modal-window-book-description">
        ${A}
        </p>
        <div class="modal-window-book-wheretobuy-links-container">
          <a href="${E.url}" class="amazon-link" target="_blank">
            <img src="./img/amazon.png" alt="" />
          </a>
          <a
            href="${M.url}"
            class="applebooks-link"
            target="_blank"
          >
            <img src="./img/applebooks.png" alt="" />
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
  </div>`,p=q.create(_,{onShow:r=>{r.element().querySelector(".modal-window-close-btn").onclick=r.close,window.addEventListener("keydown",g),document.body.style.overflow="hidden"},onClose:()=>{window.removeEventListener("keydown",g),document.body.style.overflow="";const{shopListBtn:r}=c;r.removeEventListener("click",C)}});p.show(),j(t);function g(r){r.key==="Escape"&&p.close()}}function j(o){c.shopListBtn=document.querySelector(".modal-window-book-shopping-list-button"),c.congratulationsText=document.querySelector(".modal-window-congratulations");const{shopListBtn:e}=c;u(o),e.addEventListener("click",()=>{C(o)})}function C(o){const e=u(o),t=f(d)||[];if(e){const s=t.indexOf(o);t.splice(s,1),m(d,t),h&&y(t),u(o)}else t.push(o),m(d,t),h&&y(t),u(o)}function u(o){const{congratulationsText:e,shopListBtn:t}=c,n=(f(d)||[]).includes(o);return n?(t.textContent="remove from the shopping list",e.classList.toggle("visually-hidden")):t.textContent="add to shopping list",n}const l=document.querySelector(".books-container");async function K(){return(await k("top-books")).data}async function S(){v();const e=(await K()).map(n=>{const a=n.books,i=n.list_name;return O(a,i)}).join(""),s=B("Best Sellers Books")+e;l.innerHTML=s,T(),L()}function O(o,e){const t=o.map(n=>D(n)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${e}</h2><ul class="books-list">${t}</ul><button type="button" class="books-list-btn"" data-category-name="${e}">See more</button></div>`}function D({book_image:o,title:e,author:t,_id:s}){return`
      <li class="book-item" data-book-id="${s}">
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
    `}async function H(){await z(),await S(),l.addEventListener("click",w),l.addEventListener("click",W),$.addEventListener("click",w)}H();const $=document.querySelector(".categories-list");async function N(){return await k("category-list")}async function z(){try{const o=await N();if(o.statusText!=="OK")throw new Error("Server error");const t=o.data.sort((a,i)=>a.list_name.localeCompare(i.list_name)),s='<li class="categories-list-item" ><p data-category-name="All Categories">All Categories</p></li>',n=t.map(a=>`<li class="categories-list-item" >
<p data-category-name="${a.list_name}">${a.list_name}</p>
</li>`).join("");$.innerHTML=s+n}catch(o){console.log(o)}}function B(o){const e=o.split(" "),t=e[e.length-1];return`<h1 class="books-container-title">${e.slice(0,-1).join(" ")}<span class="last-word-title"> ${t}</span></h1>`}function R(o){return`<ul class="books-by-category-list">${o.map(s=>{const{book_image:n,title:a,author:i,_id:b}=s;return`<li class="book-item" data-book-id="${b}">
      <div class="book-image-container">
        <img
          class="book-image"
          src="${n}"
          alt="${a}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </div>
      <h3 class="book-title">${a}</h3>
      <p class="book-author">${i}</p>
    </li>`}).join("")}</ul>`}async function F(o){v();const t=(await k("category",o)).data,s=B(o),n=R(t),a='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',i=s+n+a;l.innerHTML=i,L(),T()}async function w(o){const e=o.target.dataset.categoryName;if(e==="All Categories"){l.innerHTML="",S();return}else e&&F(e)}function T(){const o=document.querySelector(".books-container-title").textContent,e=document.querySelectorAll(".categories-list > .categories-list-item > p");e.forEach(t=>t.classList.remove("current-category")),e.forEach(t=>{const s=t.textContent.trim();if(o==="Best Sellers Books"&&s==="All Categories"){t.classList.add("current-category");return}}),e.forEach(t=>{const s=t.textContent.trim();if(o===s){t.classList.add("current-category");return}})}new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});
//# sourceMappingURL=commonHelpers.js.map
