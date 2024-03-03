import"./assets/styles-d6302b54.js";import{i as h,g as p,b}from"./assets/vendor-deadc8be.js";const v=document.getElementById("toggle"),f=document.querySelector(".switch-slider"),y=document.querySelector(".label-header");v.addEventListener("change",function(){f.classList.toggle("active"),y.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});window.addEventListener("load",()=>{const t=document.querySelector(".loader");t.classList.add("visually-hidden"),t.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});let r=()=>{let t=document.querySelector(".scroll-container");document.querySelector(".scroll-btn");let n=document.documentElement.scrollTop;document.documentElement.scrollHeight-document.documentElement.clientHeight,n>100?t.style.display="grid":t.style.display="none",t.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",r);window.addEventListener("load",r);function S(t,n){try{const s=JSON.stringify(n);localStorage.setItem(t,s)}catch(s){console.error("Error adding to localStorage:",s)}}const w="user-data";function L(){b.create(`
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
  `,{onShow:e=>{e.element().querySelector(".auth-close-btn").onclick=e.close}}).show(),document.querySelector(".auth-close-btn");const n=document.querySelector(".auth-modal"),s=document.querySelector("#auth-name"),u=document.querySelector(".auth-form"),i=document.querySelector(".auth-submit-btn"),o=document.querySelector(".sign-in-btn"),a=document.querySelector(".sign-up-btn");o.addEventListener("click",e=>{s.classList.add("auth-name-hidden"),o.classList.toggle("current-sign"),a.classList.toggle("current-sign"),n.classList.add("auth-modal-sign-in"),i.textContent="Sign in"}),a.addEventListener("click",e=>{s.classList.remove("auth-name-hidden"),o.classList.toggle("current-sign"),a.classList.toggle("current-sign"),n.classList.remove("auth-modal-sign-in"),i.textContent="Sign up"}),u.addEventListener("submit",d);function d(e){e.preventDefault();const c=e.target.elements[3].textContent.toLowerCase();if(c==="sign up"){const m=e.target.elements.name.value.trim(),g=e.target.elements.email.value.trim();e.target.elements.password.value.trim();const l={id:"",name:m,mail:g};console.log(l),S(w,l)}c==="sign in"&&console.log("log in success")}}const E=document.querySelector('button[data-action="registration"]');E.addEventListener("click",L);//! //////////////////////////////////////////////////////////
//! firebase
const q={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"};h(q);p();//! ///////////////////////////
//# sourceMappingURL=commonHelpers.js.map
