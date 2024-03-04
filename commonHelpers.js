import"./assets/styles-47c6e1d5.js";import{i as E,a as R,g as T,b as D,c as F,r as b,s as x,o as k,d as M,e as N}from"./assets/vendor-64664952.js";function f(e,o){try{const t=JSON.stringify(o);localStorage.setItem(e,t)}catch(t){console.error("Error adding to localStorage:",t)}}function P(e){try{const o=localStorage.getItem(e);return o?JSON.parse(o):null}catch(o){return console.error("Error getting from localStorage:",o),null}}function l(e,o){return e?E.show({title:"Success",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:o,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#59a10d",position:"topRight"}):E.show({title:"Error",titleColor:"#fff",titleSize:"16",titleLineHeight:"1.5",message:o,messageColor:"#fff",messageSize:"16",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight"})}const B="user-data",u=P("user-data");let i=u&&u.name?u.name:"",a=u&&u.uid?u.uid:"",d=!!i;const z={apiKey:"AIzaSyAU9vmqTZLyoAQQ-FXLYuEWvBcdBAw2N_s",authDomain:"bookworms-de9f1.firebaseapp.com",databaseURL:"https://bookworms-de9f1-default-rtdb.europe-west1.firebasedatabase.app",projectId:"bookworms-de9f1",storageBucket:"bookworms-de9f1.appspot.com",messagingSenderId:"67746495730",appId:"1:67746495730:web:2051c7fd00eaf14945646b"},q=R(z),I=T(q),S=D(q);async function H(e=[]){const o={name:i,uid:a,shopList:e};try{const t=b(S,`users/${o.uid}`),n=await x(t,o)}catch(t){console.error("Error while saving shoplist to Realtime Database:",t)}}function U(e=a){return new Promise(o=>{const t=b(S,`users/${e}`);k(t,n=>{const r=n.val();o(r?r.name:"")})})}async function O(e=a){return await U(e)}function W(e=a){const o=b(S,`users/${e}`);k(o,t=>{const n=t.val();n?n.shopList?f("idBooks",n.shopList):f("idBooks",[]):console.log("error while copying from Realtime Database to localstorage")})}function Y(){const e=F.create(`
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
        <button class="sign-up-btn current-sign" type="button">sign up</button>
      </li>

      <li class="auth-sign-item">
        <button class="sign-in-btn" type="button">sIGN In</button>
      </li>
    </ul>
  </div>
  `,{onShow:s=>{s.element().querySelector(".auth-close-btn").onclick=s.close,document.addEventListener("keydown",o)},onClose:s=>{document.removeEventListener("keydown",o)}});e.show();function o(s){s.key==="Escape"&&e.close()}document.querySelector(".auth-close-btn");const t=document.querySelector(".auth-modal"),n=document.querySelector("#auth-name"),r=document.querySelector(".auth-form"),m=document.querySelector(".auth-submit-btn"),c=document.querySelector(".sign-in-btn"),g=document.querySelector(".sign-up-btn");c.addEventListener("click",s=>{n.classList.add("auth-name-hidden"),c.classList.toggle("current-sign"),g.classList.toggle("current-sign"),t.classList.add("auth-modal-sign-in"),m.textContent="Sign in",n.removeAttribute("required")}),g.addEventListener("click",s=>{n.classList.remove("auth-name-hidden"),c.classList.toggle("current-sign"),g.classList.toggle("current-sign"),t.classList.remove("auth-modal-sign-in"),m.textContent="Sign up",n.setAttribute("required","true")}),r.addEventListener("submit",A);async function A(s){s.preventDefault();const L=s.target.elements[3].textContent.toLowerCase(),v=s.target.elements.name.value.trim(),h=s.target.elements.email.value.trim(),w=s.target.elements.password.value.trim();if(L==="sign up")try{const p=await V(h,w);if(d==!0){const y={uid:p.uid,name:v,mail:h};i=v,f(B,y),H(),r.reset(),e.close(),l(!0,"Registration successfull!")}}catch{l(!1,"Error")}if(L==="sign in")try{const p=await $(h,w);if(d==!0){const y={uid:p.uid,name:i,mail:h};f(B,y),W(),r.reset(),e.close(),l(!0,"Signed in successfull!")}}catch{l(!1,"Error")}}}async function _(e,o){try{return(await M(I,e,o)).user}catch(t){throw console.error("Registration error:",t.message),t}}async function K(e,o){try{return await(await N(I,e,o)).user}catch(t){throw console.error("Sign-in error:",t.message),t}}async function V(e,o){try{const t=await _(e,o);return d=!0,a=t.uid,await t}catch{d=!1,i="",a="",console.log("Registration error!"),l(!1,"Registration error!")}}async function $(e,o){try{const t=await K(e,o);return d=!0,a=await t.uid,i=await O(),t}catch{d=!1,i="",a="",console.log("Login error!"),l(!1,"Login error!")}}const J=document.getElementById("toggle"),Q=document.querySelector(".switch-slider"),j=document.querySelector(".label-header");J.addEventListener("change",function(){Q.classList.toggle("active"),j.style.background=this.checked?"linear-gradient(180deg, #4f2ee8 0%, #686868 100%)":"linear-gradient(180deg, #4f2ee8 0%, #fff 100%)"});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".btn-register-login"),o=document.getElementById("popupContainer");e.addEventListener("click",function(){o.style.display=o.style.display==="block"?"none":"block"}),document.addEventListener("click",function(t){!e.contains(t.target)&&!o.contains(t.target)&&(o.style.display="none")})});document.querySelector(".logo-header");document.querySelector(".link-home");document.querySelector(".link-shoplist");document.getElementById("toggle");document.getElementById("menuBtn");document.querySelector(".btn-register");document.querySelector(".btn-register-login");document.getElementById("popupContainer");const G=document.querySelector(".btn-register");G.addEventListener("click",Y);const X=document.querySelector(".btn-popup");document.querySelector(".btn-register-logout");X.addEventListener("click",()=>{location.reload()});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".support-btn"),o=document.querySelector(".support-list");e.addEventListener("click",function(){e.classList.contains("scroll-up")?(o.scrollTo({top:o.scrollHeight,behavior:"smooth"}),e.classList.remove("scroll-up")):(o.scrollTo({top:0,behavior:"smooth"}),e.classList.add("scroll-up"))})});window.addEventListener("load",()=>{const e=document.querySelector(".loader");e.classList.add("visually-hidden"),e.addEventListener("transitioned",()=>{document.body.removeChild("loader")})});let C=()=>{let e=document.querySelector(".scroll-container");document.documentElement.scrollTop>100?e.style.display="grid":e.style.display="none",e.addEventListener("click",()=>{document.documentElement.scrollTop=0})};window.addEventListener("scroll",C);window.addEventListener("load",C);document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("menuBtn"),o=document.getElementById("closeBtn"),t=document.getElementById("modalBackdrop");e.addEventListener("click",n),o.addEventListener("click",n);function n(){t.style.display==="flex"?m():r(),c()}function r(){t.style.display="flex",setTimeout(()=>{t.style.opacity=1,t.style.transform="translateY(0)"},10)}function m(){t.style.opacity=0,t.style.transform="translateY(20px)",setTimeout(()=>{t.style.display="none"},300)}function c(){e.classList.toggle("is-open"),o.classList.toggle("is-open")}t.addEventListener("click",function(g){g.target===t&&(m(),c())})});document.getElementById("modalBackdrop");document.getElementById("modalContent");document.querySelector(".register-logi-in");document.getElementById("userNav");document.querySelector(".menu-home-login");document.querySelector(".shop-list-login");document.querySelector(".btn-register-logout");
//# sourceMappingURL=commonHelpers.js.map
