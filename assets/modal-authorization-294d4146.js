import{i as p,g as h,b as f}from"./vendor-861099d4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const y=document.getElementById("toggle"),v=document.querySelector(".switch-slider"),L=document.querySelector(".label-header");y.addEventListener("change",function(){v.classList.toggle("active"),L.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-register-login"),t=document.getElementById("popupContainer");e.addEventListener("click",function(){t.style.display=t.style.display==="block"?"none":"block"}),document.addEventListener("click",function(n){!e.contains(n.target)&&!t.contains(n.target)&&(t.style.display="none")})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".support-btn"),t=document.querySelector(".support-list");e.addEventListener("click",function(){e.classList.contains("scroll-up")?(t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),e.classList.remove("scroll-up")):(t.scrollTo({top:0,behavior:"smooth"}),e.classList.add("scroll-up"))})});window.addEventListener("load",()=>{const e=document.querySelector(".loader");e.classList.add("visually-hidden"),e.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});let d=()=>{let e=document.querySelector(".scroll-container");document.documentElement.scrollTop>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",d);window.addEventListener("load",d);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("menuBtn"),t=document.getElementById("closeBtn"),n=document.getElementById("modalBackdrop");e.addEventListener("click",c),t.addEventListener("click",c);function c(){n.style.display==="flex"?s():o(),i()}function o(){n.style.display="flex",setTimeout(()=>{n.style.opacity=1,n.style.transform="translateY(0)"},10)}function s(){n.style.opacity=0,n.style.transform="translateY(20px)",setTimeout(()=>{n.style.display="none"},300)}function i(){e.classList.toggle("is-open"),t.classList.toggle("is-open")}n.addEventListener("click",function(r){r.target===n&&(s(),i())})});function b(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(n){console.error("Error adding to localStorage:",n)}}const S="user-data";function E(){f.create(`
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
  `,{onShow:a=>{a.element().querySelector(".auth-close-btn").onclick=a.close}}).show(),document.querySelector(".auth-close-btn");const t=document.querySelector(".auth-modal"),n=document.querySelector("#auth-name"),c=document.querySelector(".auth-form"),o=document.querySelector(".auth-submit-btn"),s=document.querySelector(".sign-in-btn"),i=document.querySelector(".sign-up-btn");s.addEventListener("click",a=>{n.classList.add("auth-name-hidden"),s.classList.toggle("current-sign"),i.classList.toggle("current-sign"),t.classList.add("auth-modal-sign-in"),o.textContent="Sign in"}),i.addEventListener("click",a=>{n.classList.remove("auth-name-hidden"),s.classList.toggle("current-sign"),i.classList.toggle("current-sign"),t.classList.remove("auth-modal-sign-in"),o.textContent="Sign up"}),c.addEventListener("submit",r);function r(a){a.preventDefault();const l=a.target.elements[3].textContent.toLowerCase();if(l==="sign up"){const m=a.target.elements.name.value.trim(),g=a.target.elements.email.value.trim();a.target.elements.password.value.trim();const u={id:"",name:m,mail:g};console.log(u),b(S,u)}l==="sign in"&&console.log("log in success")}}const w=document.querySelector('button[data-action="registration"]');w.addEventListener("click",E);//! //////////////////////////////////////////////////////////
//! firebase
const B={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"};p(B);h();//! ///////////////////////////
//# sourceMappingURL=modal-authorization-294d4146.js.map
