import{a as K,i as A,c as $,g as W,d as j,b as Y,r as q,s as _,o as N,e as V,f as J}from"./vendor-76990a4b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const Q={bookIdsLSKey:"booksId"};async function Le(e,t=""){const s=`https://books-backend.p.goit.global/books/${e}`;let r={};if(t){const o=t.split(" ").join("%20");r.category=o}return await K.get(s,{params:r,paramsSerializer:o=>Object.keys(o).map(n=>`${n}=${o[n]}`).join("&")})}function v(e,t){try{const s=JSON.stringify(t);localStorage.setItem(e,s)}catch(s){console.error("Error adding to localStorage:",s)}}function G(e){try{localStorage.getItem(e)&&localStorage.removeItem(e)}catch(t){console.error("Error removing from localStorage:",t)}}function X(e){try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(t){return console.error("Error getting from localStorage:",t),null}}function d(e,t){return e?A.show({title:"Success",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:t,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#59a10d",position:"topRight"}):A.show({title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:t,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"})}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("menuBtn"),t=document.getElementById("closeBtn"),s=document.getElementById("modalBackdrop");e.addEventListener("click",r),t.addEventListener("click",r);function r(){s.style.display==="flex"?(n(),e.classList.add("is-open-burger"),e.classList.remove("is-closed-burger"),t.classList.add("is-closed-burger"),t.classList.remove("is-open-burger")):(o(),e.classList.add("is-closed-burger"),e.classList.remove("is-open-burger"),t.classList.add("is-open-burger"),t.classList.remove("is-closed-burger"))}function o(){s.style.display="flex",setTimeout(()=>{s.style.opacity=1,s.style.transform="translateY(0)"},10)}function n(){s.style.opacity=0,s.style.transform="translateY(20px)",setTimeout(()=>{s.style.display="none"},300)}s.addEventListener("click",function(c){c.target===s&&(n(),toggleButtons())})});document.getElementById("modalBackdrop");document.getElementById("modalContent");document.querySelector(".register-logi-in");document.getElementById("userNav");document.querySelector(".menu-home-login");document.querySelector(".shop-list-login");document.querySelector(".btn-register-logout");const Z=document.querySelector(".btn-burger"),p=document.querySelector(".btn-register-modal"),y=document.querySelector(".btn-sign-in"),f=document.querySelector(".btn-sign-logout");Z.addEventListener("click",O);function O(){u?(p.classList.add("is-closed-burger"),y.classList.add("is-open-burger"),f.classList.add("is-open-burger"),p.classList.remove("is-open-burger"),y.classList.remove("is-closed-burger"),f.classList.remove("is-closed-burger")):(p.classList.add("is-open-burger"),y.classList.add("is-closed-burger"),f.classList.add("is-closed-burger"),p.classList.remove("is-closed-burger"),y.classList.remove("is-open-burger"),f.classList.remove("is-open-burger"))}f.addEventListener("click",()=>{D(),location.reload()});p.addEventListener("click",T);const{bookIdsLSKey:x}=Q,R="user-data",m=X("user-data");let a=m&&m.name?m.name:"",l=m&&m.uid?m.uid:"",u=!!a;const b=document.querySelector(".btn-register-login"),L=document.querySelector(".btn-register"),ee=document.querySelector(".name-user-login"),te=document.querySelector(".user-name-modal");function P(){u?(b.classList.add("is-open-register"),b.classList.remove("is-closed-register"),L.classList.add("is-closed-register"),L.classList.remove("is-open-register"),ee.textContent=a,te.textContent=a):(b.classList.add("is-closed-register"),b.classList.remove("is-open-register"),L.classList.add("is-open-register"),L.classList.remove("is-closed-register"))}P();const se={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",databaseURL:"https://bookworms-de9f1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"},F=$(se),M=W(F),k=j(F);async function oe(e=[]){const t={name:a,uid:l,shopList:e};try{const s=q(k,`users/${t.uid}`),r=await _(s,t)}catch(s){console.error("Error while saving shoplist to Realtime Database:",s)}}function re(e=l){return new Promise(t=>{const s=q(k,`users/${e}`);N(s,r=>{const o=r.val();t(o?o.name:"")})})}async function ne(e=l){return await re(e)}function ie(e=l){const t=q(k,`users/${e}`);N(t,s=>{const r=s.val();r?r.shopList?v(x,r.shopList):v(x,[]):console.log("error while copying from Realtime Database to localstorage")})}function T(){const e=Y.create(`
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
  `,{onShow:i=>{i.element().querySelector(".auth-close-btn").onclick=i.close,document.addEventListener("keydown",t),document.body.style.overflow="hidden"},onClose:i=>{P(),O(),document.removeEventListener("keydown",t),document.body.style.overflow="visible"}});e.show();function t(i){i.key==="Escape"&&e.close()}const s=document.querySelector(".auth-modal"),r=document.querySelector("#auth-name"),o=document.querySelector(".auth-form"),n=document.querySelector(".auth-submit-btn"),c=document.querySelector(".sign-in-btn"),S=document.querySelector(".sign-up-btn");c.addEventListener("click",i=>{r.classList.add("auth-name-hidden"),c.classList.toggle("current-sign"),S.classList.toggle("current-sign"),s.classList.add("auth-modal-sign-in"),n.textContent="Sign in",r.removeAttribute("required")}),S.addEventListener("click",i=>{r.classList.remove("auth-name-hidden"),c.classList.toggle("current-sign"),S.classList.toggle("current-sign"),s.classList.remove("auth-modal-sign-in"),n.textContent="Sign up",r.setAttribute("required","true")}),o.addEventListener("submit",U);async function U(i){i.preventDefault();const I=i.target.elements[3].textContent.toLowerCase(),B=i.target.elements.name.value.trim(),h=i.target.elements.email.value.trim(),C=i.target.elements.password.value.trim();if(I==="sign up")try{const g=await le(h,C);if(u==!0){const w={uid:g.uid,name:B,mail:h};a=B,v(R,w),oe(),o.reset(),e.close(),d(!0,"Registration successfull!")}}catch{d(!1,"Error")}if(I==="sign in")try{const g=await ue(h,C);if(u==!0){const w={uid:g.uid,name:a,mail:h};v(R,w),ie(),o.reset(),e.close(),d(!0,"Signed in successfull!")}}catch{d(!1,"Error")}}}async function ae(e,t){try{return(await V(M,e,t)).user}catch(s){throw console.error("Registration error:",s.message),s}}async function ce(e,t){try{return await(await J(M,e,t)).user}catch(s){throw console.error("Sign-in error:",s.message),s}}async function le(e,t){try{const s=await ae(e,t);return u=!0,l=s.uid,await s}catch{u=!1,a="",l="",console.log("Registration error!"),d(!1,"Registration error!")}}async function ue(e,t){try{const s=await ce(e,t);return u=!0,l=await s.uid,a=await ne(),s}catch{u=!1,a="",l="",console.log("Login error!"),d(!1,"Login error!")}}function D(){G("user-data"),l="",a="",u=!1}const de=document.getElementById("toggle"),me=document.querySelector(".switch-slider"),ge=document.querySelector(".label-header");de.addEventListener("change",function(){me.classList.toggle("active"),ge.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-register-login"),t=document.getElementById("popupContainer");e.addEventListener("click",function(){t.style.display=t.style.display==="block"?"none":"block"}),document.addEventListener("click",function(s){!e.contains(s.target)&&!t.contains(s.target)&&(t.style.display="none")})});const pe=document.querySelector(".btn-register");pe.addEventListener("click",T);const fe=document.querySelector(".btn-popup");fe.addEventListener("click",()=>{D(),location.reload()});const E=window.location.pathname,he=document.querySelectorAll(".item-menu-header");he.forEach(function(e,t,s){e.querySelector("a").getAttribute("href")==="."+E?e.classList.add("is-active"):E==="/"&&s[0].classList.add("is-active")});const ye=document.querySelectorAll(".nav-menu-link");ye.forEach(function(e){e.querySelector("a").getAttribute("href")==="."+E&&e.classList.add("is-active-burger")});const z=document.querySelector(".loader-container"),ve=()=>{z.classList.remove("visually-hidden")},Se=()=>{z.classList.add("visually-hidden")};document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".support-btn"),t=document.querySelector(".support-list");e.addEventListener("click",function(){e.classList.contains("scroll-up")?(t.scrollTo({top:t.scrollHeight,behavior:"smooth"}),e.classList.remove("scroll-up")):(t.scrollTo({top:0,behavior:"smooth"}),e.classList.add("scroll-up"))})});let H=()=>{let e=document.querySelector(".scroll-container");document.documentElement.scrollTop>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",H);window.addEventListener("load",H);export{X as a,v as b,ve as c,Le as g,Se as h,u as i,Q as r,oe as s};
//# sourceMappingURL=scroll-up-5583f1ed.js.map