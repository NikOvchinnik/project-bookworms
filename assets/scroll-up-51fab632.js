import{i as C,b as H,g as U,c as W,d as K,r as E,s as Y,o as R,e as _,f as V}from"./vendor-a7101657.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function v(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Error adding to localStorage:",s)}}function $(e){try{localStorage.getItem(e)&&localStorage.removeItem(e)}catch(t){console.error("Error removing from localStorage:",t)}}function J(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error getting from localStorage:",t),null}}function d(e,t){return e?C.show({title:"Success",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:t,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#59a10d",position:"topRight"}):C.show({title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:t,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("menuBtn"),t=document.getElementById("closeBtn"),s=document.getElementById("modalBackdrop");e.addEventListener("click",r),t.addEventListener("click",r);function r(){s.style.display==="flex"?(n(),e.classList.add("is-open-burger"),e.classList.remove("is-closed-burger"),t.classList.add("is-closed-burger"),t.classList.remove("is-open-burger")):(o(),e.classList.add("is-closed-burger"),e.classList.remove("is-open-burger"),t.classList.add("is-open-burger"),t.classList.remove("is-closed-burger"))}function o(){s.style.display="flex",setTimeout(()=>{s.style.opacity=1,s.style.transform="translateY(0)"},10)}function n(){s.style.opacity=0,s.style.transform="translateY(20px)",setTimeout(()=>{s.style.display="none"},300)}s.addEventListener("click",function(c){c.target===s&&(n(),toggleButtons())})});document.getElementById("modalBackdrop");document.getElementById("modalContent");document.querySelector(".register-logi-in");document.getElementById("userNav");document.querySelector(".menu-home-login");document.querySelector(".shop-list-login");document.querySelector(".btn-register-logout");const Q=document.querySelector(".btn-burger"),p=document.querySelector(".btn-register-modal"),y=document.querySelector(".btn-sign-in"),f=document.querySelector(".btn-sign-logout");Q.addEventListener("click",x);function x(){u?(p.classList.add("is-closed-burger"),y.classList.add("is-open-burger"),f.classList.add("is-open-burger"),p.classList.remove("is-open-burger"),y.classList.remove("is-closed-burger"),f.classList.remove("is-closed-burger")):(p.classList.add("is-open-burger"),y.classList.add("is-closed-burger"),f.classList.add("is-closed-burger"),p.classList.remove("is-closed-burger"),y.classList.remove("is-open-burger"),f.classList.remove("is-open-burger"))}f.addEventListener("click",()=>{O(),location.reload()});p.addEventListener("click",M);const A="user-data",m=J("user-data");let a=m&&m.name?m.name:"",l=m&&m.uid?m.uid:"",u=!!a;const b=document.querySelector(".btn-register-login"),L=document.querySelector(".btn-register"),j=document.querySelector(".name-user-login"),G=document.querySelector(".user-name-modal");function N(){u?(b.classList.add("is-open-register"),b.classList.remove("is-closed-register"),L.classList.add("is-closed-register"),L.classList.remove("is-open-register"),j.textContent=a,G.textContent=a):(b.classList.add("is-closed-register"),b.classList.remove("is-open-register"),L.classList.add("is-open-register"),L.classList.remove("is-closed-register"))}N();const X={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",databaseURL:"https://bookworms-de9f1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"},P=H(X),F=U(P),q=W(P);async function Z(e=[]){const t={name:a,uid:l,shopList:e};try{const s=E(q,`users/${t.uid}`),r=await Y(s,t)}catch(s){console.error("Error while saving shoplist to Realtime Database:",s)}}function ee(e=l){return new Promise(t=>{const s=E(q,`users/${e}`);R(s,r=>{const o=r.val();t(o?o.name:"")})})}async function te(e=l){return await ee(e)}function se(e=l){const t=E(q,`users/${e}`);R(t,s=>{const r=s.val();r?r.shopList?v("idBooks",r.shopList):v("idBooks",[]):console.log("error while copying from Realtime Database to localstorage")})}function M(){const e=K.create(`
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
          maxlength="20"
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
            maxlength="20"
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
        <button class="sign-up-btn current-sign" type="button">sign up</button>
      </li>

      <li class="auth-sign-item">
        <button class="sign-in-btn" type="button">sIGN In</button>
      </li>
    </ul>
  </div>
  `,{onShow:i=>{i.element().querySelector(".auth-close-btn").onclick=i.close,document.addEventListener("keydown",t)},onClose:i=>{N(),x(),document.removeEventListener("keydown",t)}});e.show();function t(i){i.key==="Escape"&&e.close()}const s=document.querySelector(".auth-modal"),r=document.querySelector("#auth-name"),o=document.querySelector(".auth-form"),n=document.querySelector(".auth-submit-btn"),c=document.querySelector(".sign-in-btn"),S=document.querySelector(".sign-up-btn");c.addEventListener("click",i=>{r.classList.add("auth-name-hidden"),c.classList.toggle("current-sign"),S.classList.toggle("current-sign"),s.classList.add("auth-modal-sign-in"),n.textContent="Sign in",r.removeAttribute("required")}),S.addEventListener("click",i=>{r.classList.remove("auth-name-hidden"),c.classList.toggle("current-sign"),S.classList.toggle("current-sign"),s.classList.remove("auth-modal-sign-in"),n.textContent="Sign up",r.setAttribute("required","true")}),o.addEventListener("submit",z);async function z(i){i.preventDefault();const B=i.target.elements[3].textContent.toLowerCase(),k=i.target.elements.name.value.trim(),h=i.target.elements.email.value.trim(),I=i.target.elements.password.value.trim();if(B==="sign up")try{const g=await ne(h,I);if(u==!0){const w={uid:g.uid,name:k,mail:h};a=k,v(A,w),Z(),o.reset(),e.close(),d(!0,"Registration successfull!")}}catch{d(!1,"Error")}if(B==="sign in")try{const g=await ie(h,I);if(u==!0){const w={uid:g.uid,name:a,mail:h};v(A,w),se(),o.reset(),e.close(),d(!0,"Signed in successfull!")}}catch{d(!1,"Error")}}}async function oe(e,t){try{return(await _(F,e,t)).user}catch(s){throw console.error("Registration error:",s.message),s}}async function re(e,t){try{return await(await V(F,e,t)).user}catch(s){throw console.error("Sign-in error:",s.message),s}}async function ne(e,t){try{const s=await oe(e,t);return u=!0,l=s.uid,await s}catch{u=!1,a="",l="",console.log("Registration error!"),d(!1,"Registration error!")}}async function ie(e,t){try{const s=await re(e,t);return u=!0,l=await s.uid,a=await te(),s}catch{u=!1,a="",l="",console.log("Login error!"),d(!1,"Login error!")}}function O(){$("user-data"),l="",a="",u=!1}const ae=document.getElementById("toggle"),ce=document.querySelector(".switch-slider"),le=document.querySelector(".label-header");ae.addEventListener("change",function(){ce.classList.toggle("active"),le.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-register-login"),t=document.getElementById("popupContainer");e.addEventListener("click",function(){t.style.display=t.style.display==="block"?"none":"block"}),document.addEventListener("click",function(s){!e.contains(s.target)&&!t.contains(s.target)&&(t.style.display="none")})});const ue=document.querySelector(".btn-register");ue.addEventListener("click",M);const de=document.querySelector(".btn-popup");de.addEventListener("click",()=>{O(),location.reload()});const T=window.location.pathname,me=document.querySelectorAll(".item-menu-header");me.forEach(function(e){e.querySelector("a").getAttribute("href")==="."+T&&e.classList.add("is-active")});const ge=document.querySelectorAll(".nav-menu-link");ge.forEach(function(e){e.querySelector("a").getAttribute("href")==="."+T&&e.classList.add("is-active")});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".support-btn"),t=document.querySelector(".support-list");e.addEventListener("click",function(){e.classList.contains("scroll-up")?(t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),e.classList.remove("scroll-up")):(t.scrollTo({top:0,behavior:"smooth"}),e.classList.add("scroll-up"))})});window.addEventListener("load",()=>{const e=document.querySelector(".loader");e.classList.add("visually-hidden"),e.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});let D=()=>{let e=document.querySelector(".scroll-container");document.documentElement.scrollTop>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",D);window.addEventListener("load",D);export{v as a,J as g};
//# sourceMappingURL=scroll-up-51fab632.js.map
