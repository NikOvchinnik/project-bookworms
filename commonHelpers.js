import"./assets/styles-d6302b54.js";import{a as p,i as b,g as y,b as v}from"./assets/vendor-86c70ec3.js";const f=document.getElementById("toggle"),S=document.querySelector(".switch-slider"),w=document.querySelector(".label-header");f.addEventListener("change",function(){S.classList.toggle("active"),w.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});const u=document.querySelector(".categories-list");console.log(u);const L=async()=>await await p.get("https://books-backend.p.goit.global/books/category-list");async function E(){try{const e=await L(),n=e.data.sort((t,o)=>t.list_name.localeCompare(o.list_name));console.log(n);for(const t of n){const o=document.createElement("li"),a=document.createElement("a");a.classList.add("categories-link"),a.textContent=`${t.list_name}`,o.setAttribute("data-id",t.list_name),u.appendChild(o),o.appendChild(a)}console.log(e.data)}catch(e){console.log(e)}}E();window.addEventListener("load",()=>{const e=document.querySelector(".loader");e.classList.add("visually-hidden"),e.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});console.log("bestsellers");let d=()=>{let e=document.querySelector(".scroll-container");document.querySelector(".scroll-btn");let n=document.documentElement.scrollTop;document.documentElement.scrollHeight-document.documentElement.clientHeight,n>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",d);window.addEventListener("load",d);function q(e,n){try{const t=JSON.stringify(n);localStorage.setItem(e,t)}catch(t){console.error("Error adding to localStorage:",t)}}const k="user-data";function A(){v.create(`
  <div class="auth-modal">
    <button class="auth-close-btn" type="button">
      <svg class="auth-close-icon" width="20" height="20">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>

    <form class="auth-form">
      <div class="auth-inputs-wrapper">
        <input
          class="auth-form-input"
          type="text"
          name="name"
          id="auth-name"
          placeholder="name"
          required
        />

        <div class="auth-email-wrapper">
          <input
            class="auth-form-input"
            type="email"
            name="email"
            id="auth-email"
            placeholder="email"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="./img/icons.svg#icon-mail"></use>
          </svg>
        </div>

        <div class="auth-password-wrapper">
          <input
            class="auth-form-input"
            type="password"
            name="password"
            id="auth-password"
            placeholder="password"
            required
          />
          <svg class="auth-input-icon" width="18" height="18">
            <use href="./img/icons.svg#icon-lock"></use>
          </svg>
        </div>
      </div>

      <button class="auth-submit-btn" type="submit">Sign up</button>
    </form>

    <ul class="auth-sign-list">
      <li class="auth-sign-item">
        <button class="sign-up-btn current-sign">sign up</button>
      </li>

      <li class="auth-sign-item">
        <button class="sign-in-btn">sign in</button>
      </li>
    </ul>
  </div>
  `,{onShow:s=>{s.element().querySelector(".auth-close-btn").onclick=s.close}}).show(),document.querySelector(".auth-close-btn");const n=document.querySelector(".auth-modal"),t=document.querySelector("#auth-name"),o=document.querySelector(".auth-form"),a=document.querySelector(".auth-submit-btn"),i=document.querySelector(".sign-in-btn"),c=document.querySelector(".sign-up-btn");i.addEventListener("click",s=>{t.classList.add("auth-name-hidden"),i.classList.toggle("current-sign"),c.classList.toggle("current-sign"),n.classList.add("auth-modal-sign-in"),a.textContent="Sign in"}),c.addEventListener("click",s=>{t.classList.remove("auth-name-hidden"),i.classList.toggle("current-sign"),c.classList.toggle("current-sign"),n.classList.remove("auth-modal-sign-in"),a.textContent="Sign up"}),o.addEventListener("submit",m);function m(s){s.preventDefault();const l=s.target.elements[3].textContent.toLowerCase();if(l==="sign up"){const g=s.target.elements.name.value.trim(),h=s.target.elements.email.value.trim();s.target.elements.password.value.trim();const r={id:"",name:g,mail:h};console.log(r),q(k,r)}l==="sign in"&&console.log("log in success")}}const I=document.querySelector('button[data-action="registration"]');I.addEventListener("click",A);//! //////////////////////////////////////////////////////////
//! firebase
const C={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"};b(C);y();//! ///////////////////////////
//# sourceMappingURL=commonHelpers.js.map
