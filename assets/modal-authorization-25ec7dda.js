import{i as p,g as h,b as f}from"./vendor-861099d4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const y=document.getElementById("toggle"),v=document.querySelector(".switch-slider"),b=document.querySelector(".label-header");y.addEventListener("change",function(){v.classList.toggle("active"),b.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".btn-register-login"),o=document.getElementById("popupContainer");s.addEventListener("click",function(){o.style.display=o.style.display==="block"?"none":"block"}),document.addEventListener("click",function(e){!s.contains(e.target)&&!o.contains(e.target)&&(o.style.display="none")})});window.addEventListener("load",()=>{const s=document.querySelector(".loader");s.classList.add("visually-hidden"),s.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});let d=()=>{let s=document.querySelector(".scroll-container");document.documentElement.scrollTop>100?s.style.display="grid":s.style.display="none",s.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",d);window.addEventListener("load",d);document.addEventListener("DOMContentLoaded",function(){const s=document.getElementById("menuBtn"),o=document.getElementById("closeBtn"),e=document.getElementById("modalBackdrop");s.addEventListener("click",c),o.addEventListener("click",c);function c(){e.style.display==="flex"?n():t(),i()}function t(){e.style.display="flex",setTimeout(()=>{e.style.opacity=1,e.style.transform="translateY(0)"},10)}function n(){e.style.opacity=0,e.style.transform="translateY(20px)",setTimeout(()=>{e.style.display="none"},300)}function i(){s.classList.toggle("is-open"),o.classList.toggle("is-open")}e.addEventListener("click",function(r){r.target===e&&(n(),i())})});function L(s,o){try{const e=JSON.stringify(o);localStorage.setItem(s,e)}catch(e){console.error("Error adding to localStorage:",e)}}const S="user-data";function w(){f.create(`
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
  `,{onShow:a=>{a.element().querySelector(".auth-close-btn").onclick=a.close}}).show(),document.querySelector(".auth-close-btn");const o=document.querySelector(".auth-modal"),e=document.querySelector("#auth-name"),c=document.querySelector(".auth-form"),t=document.querySelector(".auth-submit-btn"),n=document.querySelector(".sign-in-btn"),i=document.querySelector(".sign-up-btn");n.addEventListener("click",a=>{e.classList.add("auth-name-hidden"),n.classList.toggle("current-sign"),i.classList.toggle("current-sign"),o.classList.add("auth-modal-sign-in"),t.textContent="Sign in"}),i.addEventListener("click",a=>{e.classList.remove("auth-name-hidden"),n.classList.toggle("current-sign"),i.classList.toggle("current-sign"),o.classList.remove("auth-modal-sign-in"),t.textContent="Sign up"}),c.addEventListener("submit",r);function r(a){a.preventDefault();const l=a.target.elements[3].textContent.toLowerCase();if(l==="sign up"){const m=a.target.elements.name.value.trim(),g=a.target.elements.email.value.trim();a.target.elements.password.value.trim();const u={id:"",name:m,mail:g};console.log(u),L(S,u)}l==="sign in"&&console.log("log in success")}}const E=document.querySelector('button[data-action="registration"]');E.addEventListener("click",w);//! //////////////////////////////////////////////////////////
//! firebase
const B={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"};p(B);h();//! ///////////////////////////
//# sourceMappingURL=modal-authorization-25ec7dda.js.map
