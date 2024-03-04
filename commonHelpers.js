import{s as u,h as k,g as c}from"./assets/scroll-up-a5bbb05a.js";import"./assets/vendor-a7101657.js";const i=document.querySelector(".books-container");async function y(){return(await c("top-books")).data}async function d(){u();const o=(await y()).map(a=>{const r=a.books,n=a.list_name;return h(r,n)}).join(""),s=b("Best Sellers Books")+o;i.innerHTML=s,m(),k()}function h(t,o){const e=t.map(a=>C(a)).join("");return`<div class="category-books-wrapper"><h2 class="category-title-bestsellers">${o}</h2><ul class="books-list">${e}</ul><button type="button" class="books-list-btn"" data-category-name="${o}">See more</button></div>`}function C({book_image:t,title:o,author:e,_id:s}){return`
      <li class="book-item" data-book-id="${s}">
        <div class="book-image-container">
          <img
            class="book-image"
            src="${t}"
            alt="${o}"
          />
          <div class="book-overlay">QUICK VIEW</div>
        </div>
        <h3 class="book-title">${o}</h3>
        <p class="book-author">${e}</p>
      </li>
    `}async function f(){await w(),await d(),i.addEventListener("click",l),g.addEventListener("click",l)}f();const g=document.querySelector(".categories-list");async function L(){return await c("category-list")}async function w(){try{const t=await L();if(t.statusText!=="OK")throw new Error("Server error");const e=t.data.sort((r,n)=>r.list_name.localeCompare(n.list_name)),s='<li class="categories-list-item" ><p data-category-name="All Categories">All Categories</p></li>',a=e.map(r=>`<li class="categories-list-item" >
<p data-category-name="${r.list_name}">${r.list_name}</p>
</li>`).join("");g.innerHTML=s+a}catch(t){console.log(t)}}function b(t){const o=t.split(" "),e=o[o.length-1];return`<h1 class="books-container-title">${o.slice(0,-1).join(" ")}<span class="last-word-title"> ${e}</span></h1>`}function $(t){return`<ul class="books-by-category-list">${t.map(s=>{const{book_image:a,title:r,author:n,_id:p}=s;return`<li class="book-item" data-book-id="${p}">
      <div class="book-image-container">
        <img
          class="book-image"
          src="${a}"
          alt="${r}"
        />
        <div class="book-overlay">QUICK VIEW</div>
      </div>
      <h3 class="book-title">${r}</h3>
      <p class="book-author">${n}</p>
    </li>`}).join("")}</ul>`}async function v(t){u();const e=(await c("category",t)).data,s=b(t),a=$(e),r='<button class="books-list-btn all-categories-btn" type="button" data-category-name="All Categories">All Categories</button>',n=s+a+r;i.innerHTML=n,k(),m()}async function l(t){const o=t.target.dataset.categoryName;if(o==="All Categories"){i.innerHTML="",d();return}else o&&v(o)}function m(){const t=document.querySelector(".books-container-title").textContent,o=document.querySelectorAll(".categories-list > .categories-list-item > p");o.forEach(e=>e.classList.remove("current-category")),o.forEach(e=>{const s=e.textContent.trim();if(t==="Best Sellers Books"&&s==="All Categories"){e.classList.add("current-category");return}}),o.forEach(e=>{const s=e.textContent.trim();if(t===s){e.classList.add("current-category");return}})}new Swiper(".mySwiper",{direction:"vertical",slidesPerView:"auto",freeMode:!0,scrollbar:{el:".swiper-scrollbar"},mousewheel:!0});
//# sourceMappingURL=commonHelpers.js.map
