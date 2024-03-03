function bn(t,e){return function(){return t.apply(e,arguments)}}const{toString:Cr}=Object.prototype,{getPrototypeOf:_t}=Object,Fe=(t=>e=>{const n=Cr.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),P=t=>(t=t.toLowerCase(),e=>Fe(e)===t),Be=t=>e=>typeof e===t,{isArray:re}=Array,ce=Be("undefined");function Pr(t){return t!==null&&!ce(t)&&t.constructor!==null&&!ce(t.constructor)&&R(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const wn=P("ArrayBuffer");function kr(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&wn(t.buffer),e}const Nr=Be("string"),R=Be("function"),En=Be("number"),He=t=>t!==null&&typeof t=="object",Dr=t=>t===!0||t===!1,Ie=t=>{if(Fe(t)!=="object")return!1;const e=_t(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Lr=P("Date"),Mr=P("File"),Ur=P("Blob"),xr=P("FileList"),Fr=t=>He(t)&&R(t.pipe),Br=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||R(t.append)&&((e=Fe(t))==="formdata"||e==="object"&&R(t.toString)&&t.toString()==="[object FormData]"))},Hr=P("URLSearchParams"),jr=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fe(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),re(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function vn(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const In=t=>!ce(t)&&t!=={};function it(){const{caseless:t}=In(this)&&this||{},e={},n=(r,s)=>{const i=t&&vn(e,s)||s;Ie(e[i])&&Ie(r)?e[i]=it(e[i],r):Ie(r)?e[i]=it({},r):re(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&fe(arguments[r],n);return e}const $r=(t,e,n,{allOwnKeys:r}={})=>(fe(e,(s,i)=>{n&&R(s)?t[i]=bn(s,n):t[i]=s},{allOwnKeys:r}),t),Vr=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),zr=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Wr=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&_t(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},qr=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},Gr=t=>{if(!t)return null;if(re(t))return t;let e=t.length;if(!En(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Kr=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&_t(Uint8Array)),Jr=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},Xr=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},Yr=P("HTMLFormElement"),Qr=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),xt=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Zr=P("RegExp"),Tn=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};fe(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},es=t=>{Tn(t,(e,n)=>{if(R(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(R(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ts=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return re(t)?r(t):r(String(t).split(e)),n},ns=()=>{},rs=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ke="abcdefghijklmnopqrstuvwxyz",Ft="0123456789",Sn={DIGIT:Ft,ALPHA:Ke,ALPHA_DIGIT:Ke+Ke.toUpperCase()+Ft},ss=(t=16,e=Sn.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function is(t){return!!(t&&R(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const os=t=>{const e=new Array(10),n=(r,s)=>{if(He(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=re(r)?[]:{};return fe(r,(o,a)=>{const c=n(o,s+1);!ce(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},as=P("AsyncFunction"),cs=t=>t&&(He(t)||R(t))&&R(t.then)&&R(t.catch),u={isArray:re,isArrayBuffer:wn,isBuffer:Pr,isFormData:Br,isArrayBufferView:kr,isString:Nr,isNumber:En,isBoolean:Dr,isObject:He,isPlainObject:Ie,isUndefined:ce,isDate:Lr,isFile:Mr,isBlob:Ur,isRegExp:Zr,isFunction:R,isStream:Fr,isURLSearchParams:Hr,isTypedArray:Kr,isFileList:xr,forEach:fe,merge:it,extend:$r,trim:jr,stripBOM:Vr,inherits:zr,toFlatObject:Wr,kindOf:Fe,kindOfTest:P,endsWith:qr,toArray:Gr,forEachEntry:Jr,matchAll:Xr,isHTMLForm:Yr,hasOwnProperty:xt,hasOwnProp:xt,reduceDescriptors:Tn,freezeMethods:es,toObjectSet:ts,toCamelCase:Qr,noop:ns,toFiniteNumber:rs,findKey:vn,global:{},isContextDefined:In,ALPHABET:Sn,generateString:ss,isSpecCompliantForm:is,toJSONObject:os,isAsyncFn:as,isThenable:cs};function y(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}u.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Rn=y.prototype,An={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{An[t]={value:t}});Object.defineProperties(y,An);Object.defineProperty(Rn,"isAxiosError",{value:!0});y.from=(t,e,n,r,s,i)=>{const o=Object.create(Rn);return u.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),y.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const ls=null;function ot(t){return u.isPlainObject(t)||u.isArray(t)}function On(t){return u.endsWith(t,"[]")?t.slice(0,-2):t}function Bt(t,e,n){return t?t.concat(e).map(function(s,i){return s=On(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function us(t){return u.isArray(t)&&!t.some(ot)}const ds=u.toFlatObject(u,{},null,function(e){return/^is[A-Z]/.test(e)});function je(t,e,n){if(!u.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=u.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,w){return!u.isUndefined(w[p])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(e);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(u.isDate(f))return f.toISOString();if(!c&&u.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(f)||u.isTypedArray(f)?c&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function h(f,p,w){let E=f;if(f&&!w&&typeof f=="object"){if(u.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(u.isArray(f)&&us(f)||(u.isFileList(f)||u.endsWith(p,"[]"))&&(E=u.toArray(f)))return p=On(p),E.forEach(function(T,J){!(u.isUndefined(T)||T===null)&&e.append(o===!0?Bt([p],J,i):o===null?p:p+"[]",l(T))}),!1}return ot(f)?!0:(e.append(Bt(w,p,i),l(f)),!1)}const d=[],_=Object.assign(ds,{defaultVisitor:h,convertValue:l,isVisitable:ot});function m(f,p){if(!u.isUndefined(f)){if(d.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));d.push(f),u.forEach(f,function(E,S){(!(u.isUndefined(E)||E===null)&&s.call(e,E,u.isString(S)?S.trim():S,p,_))===!0&&m(E,p?p.concat(S):[S])}),d.pop()}}if(!u.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Ht(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function yt(t,e){this._pairs=[],t&&je(t,this,e)}const Cn=yt.prototype;Cn.append=function(e,n){this._pairs.push([e,n])};Cn.toString=function(e){const n=e?function(r){return e.call(this,r,Ht)}:Ht;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function hs(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Pn(t,e,n){if(!e)return t;const r=n&&n.encode||hs,s=n&&n.serialize;let i;if(s?i=s(e,n):i=u.isURLSearchParams(e)?e.toString():new yt(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class fs{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){u.forEach(this.handlers,function(r){r!==null&&e(r)})}}const jt=fs,kn={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ps=typeof URLSearchParams<"u"?URLSearchParams:yt,ms=typeof FormData<"u"?FormData:null,gs=typeof Blob<"u"?Blob:null,_s={isBrowser:!0,classes:{URLSearchParams:ps,FormData:ms,Blob:gs},protocols:["http","https","file","blob","url","data"]},Nn=typeof window<"u"&&typeof document<"u",ys=(t=>Nn&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),bs=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ws=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Nn,hasStandardBrowserEnv:ys,hasStandardBrowserWebWorkerEnv:bs},Symbol.toStringTag,{value:"Module"})),A={...ws,..._s};function Es(t,e){return je(t,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return A.isNode&&u.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function vs(t){return u.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Is(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Dn(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&u.isArray(s)?s.length:o,c?(u.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!u.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&u.isArray(s[o])&&(s[o]=Is(s[o])),!a)}if(u.isFormData(t)&&u.isFunction(t.entries)){const n={};return u.forEachEntry(t,(r,s)=>{e(vs(r),s,n,0)}),n}return null}function Ts(t,e,n){if(u.isString(t))try{return(e||JSON.parse)(t),u.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const bt={transitional:kn,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=u.isObject(e);if(i&&u.isHTMLForm(e)&&(e=new FormData(e)),u.isFormData(e))return s?JSON.stringify(Dn(e)):e;if(u.isArrayBuffer(e)||u.isBuffer(e)||u.isStream(e)||u.isFile(e)||u.isBlob(e))return e;if(u.isArrayBufferView(e))return e.buffer;if(u.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Es(e,this.formSerializer).toString();if((a=u.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return je(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Ts(e)):e}],transformResponse:[function(e){const n=this.transitional||bt.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&u.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?y.from(a,y.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],t=>{bt.headers[t]={}});const wt=bt,Ss=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rs=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Ss[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},$t=Symbol("internals");function oe(t){return t&&String(t).trim().toLowerCase()}function Te(t){return t===!1||t==null?t:u.isArray(t)?t.map(Te):String(t)}function As(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Os=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Je(t,e,n,r,s){if(u.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!u.isString(e)){if(u.isString(r))return e.indexOf(r)!==-1;if(u.isRegExp(r))return r.test(e)}}function Cs(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Ps(t,e){const n=u.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class $e{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const h=oe(c);if(!h)throw new Error("header name must be a non-empty string");const d=u.findKey(s,h);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||c]=Te(a))}const o=(a,c)=>u.forEach(a,(l,h)=>i(l,h,c));return u.isPlainObject(e)||e instanceof this.constructor?o(e,n):u.isString(e)&&(e=e.trim())&&!Os(e)?o(Rs(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=oe(e),e){const r=u.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return As(s);if(u.isFunction(n))return n.call(this,s,r);if(u.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=oe(e),e){const r=u.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Je(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=oe(o),o){const a=u.findKey(r,o);a&&(!n||Je(r,r[a],a,n))&&(delete r[a],s=!0)}}return u.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Je(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return u.forEach(this,(s,i)=>{const o=u.findKey(r,i);if(o){n[o]=Te(s),delete n[i];return}const a=e?Cs(i):String(i).trim();a!==i&&delete n[i],n[a]=Te(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return u.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&u.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[$t]=this[$t]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=oe(o);r[a]||(Ps(s,o),r[a]=!0)}return u.isArray(e)?e.forEach(i):i(e),this}}$e.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors($e.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});u.freezeMethods($e);const D=$e;function Xe(t,e){const n=this||wt,r=e||n,s=D.from(r.headers);let i=r.data;return u.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Ln(t){return!!(t&&t.__CANCEL__)}function pe(t,e,n){y.call(this,t??"canceled",y.ERR_CANCELED,e,n),this.name="CanceledError"}u.inherits(pe,y,{__CANCEL__:!0});function ks(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Ns=A.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];u.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),u.isString(r)&&o.push("path="+r),u.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ds(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ls(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Mn(t,e){return t&&!Ds(e)?Ls(t,e):e}const Ms=A.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=u.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Us(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function xs(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),h=r[i];o||(o=l),n[s]=c,r[s]=l;let d=i,_=0;for(;d!==s;)_+=n[d++],d=d%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=h&&l-h;return m?Math.round(_*1e3/m):void 0}}function Vt(t,e){let n=0;const r=xs(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const h={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};h[e?"download":"upload"]=!0,t(h)}}const Fs=typeof XMLHttpRequest<"u",Bs=Fs&&function(t){return new Promise(function(n,r){let s=t.data;const i=D.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let h;if(u.isFormData(s)){if(A.hasStandardBrowserEnv||A.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((h=i.getContentType())!==!1){const[p,...w]=h?h.split(";").map(E=>E.trim()).filter(Boolean):[];i.setContentType([p||"multipart/form-data",...w].join("; "))}}let d=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(p+":"+w))}const _=Mn(t.baseURL,t.url);d.open(t.method.toUpperCase(),Pn(_,t.params,t.paramsSerializer),!0),d.timeout=t.timeout;function m(){if(!d)return;const p=D.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:p,config:t,request:d};ks(function(T){n(T),l()},function(T){r(T),l()},E),d=null}if("onloadend"in d?d.onloadend=m:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(m)},d.onabort=function(){d&&(r(new y("Request aborted",y.ECONNABORTED,t,d)),d=null)},d.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,t,d)),d=null},d.ontimeout=function(){let w=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const E=t.transitional||kn;t.timeoutErrorMessage&&(w=t.timeoutErrorMessage),r(new y(w,E.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,t,d)),d=null},A.hasStandardBrowserEnv&&(a&&u.isFunction(a)&&(a=a(t)),a||a!==!1&&Ms(_))){const p=t.xsrfHeaderName&&t.xsrfCookieName&&Ns.read(t.xsrfCookieName);p&&i.set(t.xsrfHeaderName,p)}s===void 0&&i.setContentType(null),"setRequestHeader"in d&&u.forEach(i.toJSON(),function(w,E){d.setRequestHeader(E,w)}),u.isUndefined(t.withCredentials)||(d.withCredentials=!!t.withCredentials),o&&o!=="json"&&(d.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&d.addEventListener("progress",Vt(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",Vt(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=p=>{d&&(r(!p||p.type?new pe(null,t,d):p),d.abort(),d=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const f=Us(_);if(f&&A.protocols.indexOf(f)===-1){r(new y("Unsupported protocol "+f+":",y.ERR_BAD_REQUEST,t));return}d.send(s||null)})},at={http:ls,xhr:Bs};u.forEach(at,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const zt=t=>`- ${t}`,Hs=t=>u.isFunction(t)||t===null||t===!1,Un={getAdapter:t=>{t=u.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!Hs(n)&&(r=at[(o=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(zt).join(`
`):" "+zt(i[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:at};function Ye(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new pe(null,t)}function Wt(t){return Ye(t),t.headers=D.from(t.headers),t.data=Xe.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Un.getAdapter(t.adapter||wt.adapter)(t).then(function(r){return Ye(t),r.data=Xe.call(t,t.transformResponse,r),r.headers=D.from(r.headers),r},function(r){return Ln(r)||(Ye(t),r&&r.response&&(r.response.data=Xe.call(t,t.transformResponse,r.response),r.response.headers=D.from(r.response.headers))),Promise.reject(r)})}const qt=t=>t instanceof D?t.toJSON():t;function ee(t,e){e=e||{};const n={};function r(l,h,d){return u.isPlainObject(l)&&u.isPlainObject(h)?u.merge.call({caseless:d},l,h):u.isPlainObject(h)?u.merge({},h):u.isArray(h)?h.slice():h}function s(l,h,d){if(u.isUndefined(h)){if(!u.isUndefined(l))return r(void 0,l,d)}else return r(l,h,d)}function i(l,h){if(!u.isUndefined(h))return r(void 0,h)}function o(l,h){if(u.isUndefined(h)){if(!u.isUndefined(l))return r(void 0,l)}else return r(void 0,h)}function a(l,h,d){if(d in e)return r(l,h);if(d in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,h)=>s(qt(l),qt(h),!0)};return u.forEach(Object.keys(Object.assign({},t,e)),function(h){const d=c[h]||s,_=d(t[h],e[h],h);u.isUndefined(_)&&d!==a||(n[h]=_)}),n}const xn="1.6.7",Et={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Et[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Gt={};Et.transitional=function(e,n,r){function s(i,o){return"[Axios v"+xn+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new y(s(o," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Gt[o]&&(Gt[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function js(t,e,n){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new y("option "+i+" must be "+c,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const ct={assertOptions:js,validators:Et},U=ct.validators;class Pe{constructor(e){this.defaults=e,this.interceptors={request:new jt,response:new jt}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ee(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ct.assertOptions(r,{silentJSONParsing:U.transitional(U.boolean),forcedJSONParsing:U.transitional(U.boolean),clarifyTimeoutError:U.transitional(U.boolean)},!1),s!=null&&(u.isFunction(s)?n.paramsSerializer={serialize:s}:ct.assertOptions(s,{encode:U.function,serialize:U.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&u.merge(i.common,i[n.method]);i&&u.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=D.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(c=c&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const l=[];this.interceptors.response.forEach(function(p){l.push(p.fulfilled,p.rejected)});let h,d=0,_;if(!c){const f=[Wt.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,l),_=f.length,h=Promise.resolve(n);d<_;)h=h.then(f[d++],f[d++]);return h}_=a.length;let m=n;for(d=0;d<_;){const f=a[d++],p=a[d++];try{m=f(m)}catch(w){p.call(this,w);break}}try{h=Wt.call(this,m)}catch(f){return Promise.reject(f)}for(d=0,_=l.length;d<_;)h=h.then(l[d++],l[d++]);return h}getUri(e){e=ee(this.defaults,e);const n=Mn(e.baseURL,e.url);return Pn(n,e.params,e.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(e){Pe.prototype[e]=function(n,r){return this.request(ee(r||{},{method:e,url:n,data:(r||{}).data}))}});u.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(ee(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Pe.prototype[e]=n(),Pe.prototype[e+"Form"]=n(!0)});const Se=Pe;class vt{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new pe(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new vt(function(s){e=s}),cancel:e}}}const $s=vt;function Vs(t){return function(n){return t.apply(null,n)}}function zs(t){return u.isObject(t)&&t.isAxiosError===!0}const lt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lt).forEach(([t,e])=>{lt[e]=t});const Ws=lt;function Fn(t){const e=new Se(t),n=bn(Se.prototype.request,e);return u.extend(n,Se.prototype,e,{allOwnKeys:!0}),u.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Fn(ee(t,s))},n}const v=Fn(wt);v.Axios=Se;v.CanceledError=pe;v.CancelToken=$s;v.isCancel=Ln;v.VERSION=xn;v.toFormData=je;v.AxiosError=y;v.Cancel=v.CanceledError;v.all=function(e){return Promise.all(e)};v.spread=Vs;v.isAxiosError=zs;v.mergeConfig=ee;v.AxiosHeaders=D;v.formToJSON=t=>Dn(u.isHTMLForm(t)?new FormData(t):t);v.getAdapter=Un.getAdapter;v.HttpStatusCode=Ws;v.default=v;const Rc=v;function Ee(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Bn={exports:{}};(function(t,e){(function(n){t.exports=n()})(function(){return function n(r,s,i){function o(l,h){if(!s[l]){if(!r[l]){var d=typeof Ee=="function"&&Ee;if(!h&&d)return d(l,!0);if(a)return a(l,!0);var _=new Error("Cannot find module '"+l+"'");throw _.code="MODULE_NOT_FOUND",_}var m=s[l]={exports:{}};r[l][0].call(m.exports,function(f){return o(r[l][1][f]||f)},m,m.exports,n,r,s,i)}return s[l].exports}for(var a=typeof Ee=="function"&&Ee,c=0;c<i.length;c++)o(i[c]);return o}({1:[function(n,r,s){Object.defineProperty(s,"__esModule",{value:!0}),s.create=s.visible=void 0;var i=function(c){var l=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=c.trim(),l===!0?h.children:h.firstChild},o=function(c,l){var h=c.children;return h.length===1&&h[0].tagName===l},a=function(c){return(c=c||document.querySelector(".basicLightbox"))!=null&&c.ownerDocument.body.contains(c)===!0};s.visible=a,s.create=function(c,l){var h=function(m,f){var p=i(`
		<div class="basicLightbox `.concat(f.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),w=p.querySelector(".basicLightbox__placeholder");m.forEach(function(J){return w.appendChild(J)});var E=o(w,"IMG"),S=o(w,"VIDEO"),T=o(w,"IFRAME");return E===!0&&p.classList.add("basicLightbox--img"),S===!0&&p.classList.add("basicLightbox--video"),T===!0&&p.classList.add("basicLightbox--iframe"),p}(c=function(m){var f=typeof m=="string",p=m instanceof HTMLElement==1;if(f===!1&&p===!1)throw new Error("Content must be a DOM element/node or string");return f===!0?Array.from(i(m,!0)):m.tagName==="TEMPLATE"?[m.content.cloneNode(!0)]:Array.from(m.children)}(c),l=function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((m=Object.assign({},m)).closable==null&&(m.closable=!0),m.className==null&&(m.className=""),m.onShow==null&&(m.onShow=function(){}),m.onClose==null&&(m.onClose=function(){}),typeof m.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof m.className!="string")throw new Error("Property `className` must be a string");if(typeof m.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof m.onClose!="function")throw new Error("Property `onClose` must be a function");return m}(l)),d=function(m){return l.onClose(_)!==!1&&function(f,p){return f.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(f)===!1||f.parentElement.removeChild(f),p()},410),!0}(h,function(){if(typeof m=="function")return m(_)})};l.closable===!0&&h.addEventListener("click",function(m){m.target===h&&d()});var _={element:function(){return h},visible:function(){return a(h)},show:function(m){return l.onShow(_)!==!1&&function(f,p){return document.body.appendChild(f),setTimeout(function(){requestAnimationFrame(function(){return f.classList.add("basicLightbox--visible"),p()})},10),!0}(h,function(){if(typeof m=="function")return m(_)})},close:d};return _}},{}]},{},[1])(1)})})(Bn);var Ac=Bn.exports;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},qs=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let _=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(_=64)),r.push(n[h],n[d],n[_],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qs(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new Gs;const _=i<<2|a>>4;if(r.push(_),l!==64){const m=a<<4&240|l>>2;if(r.push(m),d!==64){const f=l<<6&192|d;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gs extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ks=function(t){const e=Hn(t);return jn.encodeByteArray(e,!0)},$n=function(t){return Ks(t).replace(/\./g,"")},Vn=function(t){try{return jn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=()=>Js().__FIREBASE_DEFAULTS__,Ys=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vn(t[1]);return e&&JSON.parse(e)},It=()=>{try{return Xs()||Ys()||Qs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zs=t=>{var e,n;return(n=(e=It())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zn=()=>{var t;return(t=It())===null||t===void 0?void 0:t.config},Wn=t=>{var e;return(e=It())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ti(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function ni(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ri(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function si(){const t=I();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ii(){try{return typeof indexedDB=="object"}catch{return!1}}function oi(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="FirebaseError";class z extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ai,Object.setPrototypeOf(this,z.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,me.prototype.create)}}class me{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ci(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new z(s,a,r)}}function ci(t,e){return t.replace(li,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const li=/\{\$([^}]+)}/g;function ui(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ke(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Kt(i)&&Kt(o)){if(!ke(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function di(t,e){const n=new hi(t,e);return n.subscribe.bind(n)}class hi{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fi(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qe),s.error===void 0&&(s.error=Qe),s.complete===void 0&&(s.complete=Qe);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fi(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qe(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t){return t&&t._delegate?t._delegate:t}class te{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ei;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gi(e))try{this.getOrInitializeService({instanceIdentifier:W})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=W){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=W){return this.instances.has(e)}getOptions(e=W){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mi(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=W){return this.component?this.component.multipleInstances?e:W:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mi(t){return t===W?void 0:t}function gi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pi(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const yi={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},bi=b.INFO,wi={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Ei=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wi[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qn{constructor(e){this.name=e,this._logLevel=bi,this._logHandler=Ei,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const vi=(t,e)=>e.some(n=>t instanceof n);let Jt,Xt;function Ii(){return Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ti(){return Xt||(Xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gn=new WeakMap,ut=new WeakMap,Kn=new WeakMap,Ze=new WeakMap,Tt=new WeakMap;function Si(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n($(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gn.set(n,t)}).catch(()=>{}),Tt.set(e,t),e}function Ri(t){if(ut.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ut.set(t,e)}let dt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ut.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return $(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ai(t){dt=t(dt)}function Oi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(et(this),e,...n);return Kn.set(r,e.sort?e.sort():[e]),$(r)}:Ti().includes(t)?function(...e){return t.apply(et(this),e),$(Gn.get(this))}:function(...e){return $(t.apply(et(this),e))}}function Ci(t){return typeof t=="function"?Oi(t):(t instanceof IDBTransaction&&Ri(t),vi(t,Ii())?new Proxy(t,dt):t)}function $(t){if(t instanceof IDBRequest)return Si(t);if(Ze.has(t))return Ze.get(t);const e=Ci(t);return e!==t&&(Ze.set(t,e),Tt.set(e,t)),e}const et=t=>Tt.get(t);function Pi(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=$(o);return r&&o.addEventListener("upgradeneeded",c=>{r($(o.result),c.oldVersion,c.newVersion,$(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ki=["get","getKey","getAll","getAllKeys","count"],Ni=["put","add","delete","clear"],tt=new Map;function Yt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tt.get(e))return tt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ni.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ki.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return tt.set(e,i),i}Ai(t=>({...t,get:(e,n,r)=>Yt(e,n)||t.get(e,n,r),has:(e,n)=>!!Yt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Li(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Li(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ht="@firebase/app",Qt="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G=new qn("@firebase/app"),Mi="@firebase/app-compat",Ui="@firebase/analytics-compat",xi="@firebase/analytics",Fi="@firebase/app-check-compat",Bi="@firebase/app-check",Hi="@firebase/auth",ji="@firebase/auth-compat",$i="@firebase/database",Vi="@firebase/database-compat",zi="@firebase/functions",Wi="@firebase/functions-compat",qi="@firebase/installations",Gi="@firebase/installations-compat",Ki="@firebase/messaging",Ji="@firebase/messaging-compat",Xi="@firebase/performance",Yi="@firebase/performance-compat",Qi="@firebase/remote-config",Zi="@firebase/remote-config-compat",eo="@firebase/storage",to="@firebase/storage-compat",no="@firebase/firestore",ro="@firebase/firestore-compat",so="firebase",io="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="[DEFAULT]",oo={[ht]:"fire-core",[Mi]:"fire-core-compat",[xi]:"fire-analytics",[Ui]:"fire-analytics-compat",[Bi]:"fire-app-check",[Fi]:"fire-app-check-compat",[Hi]:"fire-auth",[ji]:"fire-auth-compat",[$i]:"fire-rtdb",[Vi]:"fire-rtdb-compat",[zi]:"fire-fn",[Wi]:"fire-fn-compat",[qi]:"fire-iid",[Gi]:"fire-iid-compat",[Ki]:"fire-fcm",[Ji]:"fire-fcm-compat",[Xi]:"fire-perf",[Yi]:"fire-perf-compat",[Qi]:"fire-rc",[Zi]:"fire-rc-compat",[eo]:"fire-gcs",[to]:"fire-gcs-compat",[no]:"fire-fst",[ro]:"fire-fst-compat","fire-js":"fire-js",[so]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Map,pt=new Map;function ao(t,e){try{t.container.addComponent(e)}catch(n){G.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function le(t){const e=t.name;if(pt.has(e))return G.debug(`There were multiple attempts to register component ${e}.`),!1;pt.set(e,t);for(const n of Ne.values())ao(n,t);return!0}function Jn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},V=new me("app","Firebase",co);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new te("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=io;function uo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ft,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw V.create("bad-app-name",{appName:String(s)});if(n||(n=zn()),!n)throw V.create("no-options");const i=Ne.get(s);if(i){if(ke(n,i.options)&&ke(r,i.config))return i;throw V.create("duplicate-app",{appName:s})}const o=new _i(s);for(const c of pt.values())o.addComponent(c);const a=new lo(n,r,o);return Ne.set(s,a),a}function ho(t=ft){const e=Ne.get(t);if(!e&&t===ft&&zn())return uo();if(!e)throw V.create("no-app",{appName:t});return e}function Y(t,e,n){var r;let s=(r=oo[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),G.warn(a.join(" "));return}le(new te(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="firebase-heartbeat-database",po=1,ue="firebase-heartbeat-store";let nt=null;function Xn(){return nt||(nt=Pi(fo,po,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ue)}catch(n){console.warn(n)}}}}).catch(t=>{throw V.create("idb-open",{originalErrorMessage:t.message})})),nt}async function mo(t){try{const n=(await Xn()).transaction(ue),r=await n.objectStore(ue).get(Yn(t));return await n.done,r}catch(e){if(e instanceof z)G.warn(e.message);else{const n=V.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});G.warn(n.message)}}}async function Zt(t,e){try{const r=(await Xn()).transaction(ue,"readwrite");await r.objectStore(ue).put(e,Yn(t)),await r.done}catch(n){if(n instanceof z)G.warn(n.message);else{const r=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});G.warn(r.message)}}}function Yn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=1024,_o=30*24*60*60*1e3;class yo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=en();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_o}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=en(),{heartbeatsToSend:r,unsentEntries:s}=bo(this._heartbeatsCache.heartbeats),i=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function en(){return new Date().toISOString().substring(0,10)}function bo(t,e=go){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),tn(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),tn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ii()?oi().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Zt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function tn(t){return $n(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){le(new te("platform-logger",e=>new Di(e),"PRIVATE")),le(new te("heartbeat",e=>new yo(e),"PRIVATE")),Y(ht,Qt,t),Y(ht,Qt,"esm2017"),Y("fire-js","")}Eo("");var vo="firebase",Io="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Y(vo,Io,"app");function St(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Qn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const To=Qn,Zn=new me("auth","Firebase",Qn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De=new qn("@firebase/auth");function So(t,...e){De.logLevel<=b.WARN&&De.warn(`Auth (${_e}): ${t}`,...e)}function Re(t,...e){De.logLevel<=b.ERROR&&De.error(`Auth (${_e}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,...e){throw Rt(t,...e)}function O(t,...e){return Rt(t,...e)}function Ro(t,e,n){const r=Object.assign(Object.assign({},To()),{[e]:n});return new me("auth","Firebase",r).create(e,{appName:t.name})}function Rt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zn.create(t,...e)}function g(t,e,...n){if(!t)throw Rt(e,...n)}function k(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Re(e),new Error(e)}function M(t,e){t||k(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ao(){return nn()==="http:"||nn()==="https:"}function nn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ao()||ni()||"connection"in navigator)?navigator.onLine:!0}function Co(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){this.shortDelay=e,this.longDelay=n,M(n>e,"Short delay should be less than long delay!"),this.isMobile=ti()||ri()}get(){return Oo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){M(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;k("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;k("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;k("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new ye(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ie(t,e,n,r,s={}){return tr(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ge(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),er.fetch()(nr(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function tr(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Po),e);try{const s=new Do(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ve(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ve(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ve(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ve(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ro(t,h,l);L(t,h)}}catch(s){if(s instanceof z)throw s;L(t,"network-request-failed",{message:String(s)})}}async function No(t,e,n,r,s={}){const i=await ie(t,e,n,r,s);return"mfaPendingCredential"in i&&L(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nr(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?At(t.config,s):`${t.config.apiScheme}://${s}`}class Do{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(O(this.auth,"network-request-failed")),ko.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ve(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=O(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lo(t,e){return ie(t,"POST","/v1/accounts:delete",e)}async function Mo(t,e){return ie(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uo(t,e=!1){const n=se(t),r=await n.getIdToken(e),s=Ct(r);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ae(rt(s.auth_time)),issuedAtTime:ae(rt(s.iat)),expirationTime:ae(rt(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function rt(t){return Number(t)*1e3}function Ct(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Re("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vn(n);return s?JSON.parse(s):(Re("Failed to decode base64 JWT payload"),null)}catch(s){return Re("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xo(t){const e=Ct(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function de(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof z&&Fo(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ae(this.lastLoginAt),this.creationTime=ae(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t){var e;const n=t.auth,r=await t.getIdToken(),s=await de(t,Mo(n,{idToken:r}));g(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$o(i.providerUserInfo):[],a=jo(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rr(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function Ho(t){const e=se(t);await Le(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jo(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $o(t){return t.map(e=>{var{providerId:n}=e,r=St(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(t,e){const n=await tr(t,{},async()=>{const r=ge({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nr(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",er.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zo(t,e){return ie(t,"POST","/v2/accounts:revokeToken",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return g(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Vo(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new he;return r&&(g(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(g(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(g(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new he,this.toJSON())}_performRefresh(){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class q{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=St(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await de(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Uo(this,e)}reload(){return Ho(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new q(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Le(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await de(this,Lo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,p=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:J,isAnonymous:Mt,providerData:qe,stsTokenManager:Ut}=n;g(T&&Ut,e,"internal-error");const Ar=he.fromJSON(this.name,Ut);g(typeof T=="string",e,"internal-error"),x(d,e.name),x(_,e.name),g(typeof J=="boolean",e,"internal-error"),g(typeof Mt=="boolean",e,"internal-error"),x(m,e.name),x(f,e.name),x(p,e.name),x(w,e.name),x(E,e.name),x(S,e.name);const Ge=new q({uid:T,auth:e,email:_,emailVerified:J,displayName:d,isAnonymous:Mt,photoURL:f,phoneNumber:m,tenantId:p,stsTokenManager:Ar,createdAt:E,lastLoginAt:S});return qe&&Array.isArray(qe)&&(Ge.providerData=qe.map(Or=>Object.assign({},Or))),w&&(Ge._redirectEventId=w),Ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new he;s.updateFromServerResponse(n);const i=new q({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Le(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Map;function N(t){M(t instanceof Function,"Expected a class definition");let e=rn.get(t);return e?(M(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sr.type="NONE";const sn=sr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,e,n){return`firebase:${t}:${e}:${n}`}class Q{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ae(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ae("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?q._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Q(N(sn),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||N(sn);const o=Ae(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const d=q._fromJSON(e,h);l!==i&&(a=d),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Q(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Q(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ar(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ir(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lr(e))return"Blackberry";if(ur(e))return"Webos";if(Pt(e))return"Safari";if((e.includes("chrome/")||or(e))&&!e.includes("edge/"))return"Chrome";if(cr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ir(t=I()){return/firefox\//i.test(t)}function Pt(t=I()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function or(t=I()){return/crios\//i.test(t)}function ar(t=I()){return/iemobile/i.test(t)}function cr(t=I()){return/android/i.test(t)}function lr(t=I()){return/blackberry/i.test(t)}function ur(t=I()){return/webos/i.test(t)}function Ve(t=I()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wo(t=I()){var e;return Ve(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qo(){return si()&&document.documentMode===10}function dr(t=I()){return Ve(t)||cr(t)||ur(t)||lr(t)||/windows phone/i.test(t)||ar(t)}function Go(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e=[]){let n;switch(t){case"Browser":n=on(I());break;case"Worker":n=`${on(I())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_e}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t,e={}){return ie(t,"GET","/v2/passwordPolicy",Ot(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=6;class Yo{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xo,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new an(this),this.idTokenSubscription=new an(this),this.beforeStateQueue=new Ko(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=N(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Q.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Le(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Co()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?se(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(N(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jo(this),n=new Yo(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new me("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zo(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&N(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await Q.create(this,[N(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&So(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kt(t){return se(t)}class an{constructor(e){this.auth=e,this.observer=null,this.addObserver=di(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zo(t){Nt=t}function ea(t){return Nt.loadJS(t)}function ta(){return Nt.gapiScript}function na(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t,e){const n=Jn(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ke(i,e??{}))return s;L(s,"already-initialized")}return n.initialize({options:e})}function sa(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(N);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ia(t,e,n){const r=kt(t);g(r._canInitEmulator,r,"emulator-config-failed"),g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=fr(e),{host:o,port:a}=oa(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||aa()}function fr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oa(t){const e=fr(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cn(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cn(o)}}}function cn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aa(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return k("not implemented")}_getIdTokenResponse(e){return k("not implemented")}_linkToIdToken(e,n){return k("not implemented")}_getReauthenticationResolver(e){return k("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){return No(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca="http://localhost";class K extends pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new K(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):L("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=St(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new K(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Z(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Z(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Z(e,n)}buildRequest(){const e={requestUri:ca,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ge(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F extends be{constructor(){super("facebook.com")}static credential(e){return K._fromParams({providerId:F.PROVIDER_ID,signInMethod:F.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return F.credentialFromTaggedObject(e)}static credentialFromError(e){return F.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return F.credential(e.oauthAccessToken)}catch{return null}}}F.FACEBOOK_SIGN_IN_METHOD="facebook.com";F.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B extends be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return K._fromParams({providerId:B.PROVIDER_ID,signInMethod:B.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return B.credentialFromTaggedObject(e)}static credentialFromError(e){return B.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return B.credential(n,r)}catch{return null}}}B.GOOGLE_SIGN_IN_METHOD="google.com";B.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H extends be{constructor(){super("github.com")}static credential(e){return K._fromParams({providerId:H.PROVIDER_ID,signInMethod:H.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return H.credentialFromTaggedObject(e)}static credentialFromError(e){return H.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return H.credential(e.oauthAccessToken)}catch{return null}}}H.GITHUB_SIGN_IN_METHOD="github.com";H.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends be{constructor(){super("twitter.com")}static credential(e,n){return K._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return j.credential(n,r)}catch{return null}}}j.TWITTER_SIGN_IN_METHOD="twitter.com";j.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await q._fromIdTokenResponse(e,r,s),o=ln(r);return new ne({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ln(r);return new ne({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ln(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends z{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Me.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Me(e,n,r,s)}}function gr(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Me._fromErrorAndOperation(t,i,e,r):i})}async function la(t,e,n=!1){const r=await de(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ne._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await de(t,gr(r,s,e,t),n);g(i.idToken,r,"internal-error");const o=Ct(i.idToken);g(o,r,"internal-error");const{sub:a}=o;return g(t.uid===a,r,"user-mismatch"),ne._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&L(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(t,e,n=!1){const r="signIn",s=await gr(t,r,e),i=await ne._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function ha(t,e,n,r){return se(t).onIdTokenChanged(e,n,r)}function fa(t,e,n){return se(t).beforeAuthStateChanged(e,n)}const Ue="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ue,"1"),this.storage.removeItem(Ue),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(){const t=I();return Pt(t)||Ve(t)}const ma=1e3,ga=10;class yr extends _r{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pa()&&Go(),this.fallbackToPolling=dr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qo()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ga):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ma)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yr.type="LOCAL";const _a=yr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends _r{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}br.type="SESSION";const wr=br;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ze(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await ya(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ze.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Dt("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const _=d;if(_.data.eventId===l)switch(_.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(_.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return window}function wa(t){C().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){return typeof C().WorkerGlobalScope<"u"&&typeof C().importScripts=="function"}async function Ea(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function va(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ia(){return Er()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="firebaseLocalStorageDb",Ta=1,xe="firebaseLocalStorage",Ir="fbase_key";class we{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function We(t,e){return t.transaction([xe],e?"readwrite":"readonly").objectStore(xe)}function Sa(){const t=indexedDB.deleteDatabase(vr);return new we(t).toPromise()}function gt(){const t=indexedDB.open(vr,Ta);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xe,{keyPath:Ir})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xe)?e(r):(r.close(),await Sa(),e(await gt()))})})}async function un(t,e,n){const r=We(t,!0).put({[Ir]:e,value:n});return new we(r).toPromise()}async function Ra(t,e){const n=We(t,!1).get(e),r=await new we(n).toPromise();return r===void 0?null:r.value}function dn(t,e){const n=We(t,!0).delete(e);return new we(n).toPromise()}const Aa=800,Oa=3;class Tr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Oa)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Er()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ze._getInstance(Ia()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ea(),!this.activeServiceWorker)return;this.sender=new ba(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||va()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gt();return await un(e,Ue,"1"),await dn(e,Ue),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>un(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ra(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=We(s,!1).getAll();return new we(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Aa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tr.type="LOCAL";const Ca=Tr;new ye(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t,e){return e?N(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Z(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Z(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Z(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ka(t){return da(t.auth,new Lt(t),t.bypassAuthState)}function Na(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),ua(n,new Lt(t),t.bypassAuthState)}async function Da(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),la(n,new Lt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ka;case"linkViaPopup":case"linkViaRedirect":return Da;case"reauthViaPopup":case"reauthViaRedirect":return Na;default:L(this.auth,"internal-error")}}resolve(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){M(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new ye(2e3,1e4);class X extends Sr{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,X.currentPopupAction&&X.currentPopupAction.cancel(),X.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){M(this.filter.length===1,"Popup operations only handle one event");const e=Dt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(O(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(O(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,X.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(O(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,La.get())};e()}}X.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="pendingRedirect",Oe=new Map;class Ua extends Sr{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oe.get(this.auth._key());if(!e){try{const r=await xa(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oe.set(this.auth._key(),e)}return this.bypassAuthState||Oe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xa(t,e){const n=Ha(e),r=Ba(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fa(t,e){Oe.set(t._key(),e)}function Ba(t){return N(t._redirectPersistence)}function Ha(t){return Ae(Ma,t.config.apiKey,t.name)}async function ja(t,e,n=!1){const r=kt(t),s=Pa(r,e),o=await new Ua(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=10*60*1e3;class Va{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!za(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rr(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(O(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$a&&this.cachedEventUids.clear(),this.cachedEventUids.has(hn(e))}saveEventToCache(e){this.cachedEventUids.add(hn(e)),this.lastProcessedEventTime=Date.now()}}function hn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function za(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rr(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t,e={}){return ie(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ga=/^https?/;async function Ka(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wa(t);for(const n of e)try{if(Ja(n))return}catch{}L(t,"unauthorized-domain")}function Ja(t){const e=mt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ga.test(n))return!1;if(qa.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new ye(3e4,6e4);function fn(){const t=C().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ya(t){return new Promise((e,n)=>{var r,s,i;function o(){fn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fn(),n(O(t,"network-request-failed"))},timeout:Xa.get()})}if(!((s=(r=C().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=C().gapi)===null||i===void 0)&&i.load)o();else{const a=na("iframefcb");return C()[a]=()=>{gapi.load?o():n(O(t,"network-request-failed"))},ea(`${ta()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ce=null,e})}let Ce=null;function Qa(t){return Ce=Ce||Ya(t),Ce}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new ye(5e3,15e3),ec="__/auth/iframe",tc="emulator/auth/iframe",nc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sc(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?At(e,tc):`https://${t.config.authDomain}/${ec}`,r={apiKey:e.apiKey,appName:t.name,v:_e},s=rc.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ge(r).slice(1)}`}async function ic(t){const e=await Qa(t),n=C().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:sc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nc,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=O(t,"network-request-failed"),a=C().setTimeout(()=>{i(o)},Za.get());function c(){C().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ac=500,cc=600,lc="_blank",uc="http://localhost";class pn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dc(t,e,n,r=ac,s=cc){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},oc),{width:r.toString(),height:s.toString(),top:i,left:o}),l=I().toLowerCase();n&&(a=or(l)?lc:n),ir(l)&&(e=e||uc,c.scrollbars="yes");const h=Object.entries(c).reduce((_,[m,f])=>`${_}${m}=${f},`,"");if(Wo(l)&&a!=="_self")return hc(e||"",a),new pn(null);const d=window.open(e||"",a,h);g(d,t,"popup-blocked");try{d.focus()}catch{}return new pn(d)}function hc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="__/auth/handler",pc="emulator/auth/handler",mc=encodeURIComponent("fac");async function mn(t,e,n,r,s,i){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_e,eventId:s};if(e instanceof mr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ui(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(i||{}))o[h]=d}if(e instanceof be){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${mc}=${encodeURIComponent(c)}`:"";return`${gc(t)}?${ge(a).slice(1)}${l}`}function gc({config:t}){return t.emulator?At(t,pc):`https://${t.authDomain}/${fc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="webStorageSupport";class _c{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wr,this._completeRedirectFn=ja,this._overrideRedirectResult=Fa}async _openPopup(e,n,r,s){var i;M((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await mn(e,n,r,mt(),s);return dc(e,o,Dt())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await mn(e,n,r,mt(),s);return wa(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(M(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ic(e),r=new Va(e);return n.register("authEvent",s=>(g(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(st,{type:st},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[st];o!==void 0&&n(!!o),L(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ka(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dr()||Pt()||Ve()}}const yc=_c;var gn="@firebase/auth",_n="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ec(t){le(new te("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hr(t)},l=new Qo(r,s,i,c);return sa(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),le(new te("auth-internal",e=>{const n=kt(e.getProvider("auth").getImmediate());return(r=>new bc(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Y(gn,_n,wc(t)),Y(gn,_n,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=5*60,Ic=Wn("authIdTokenMaxAge")||vc;let yn=null;const Tc=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ic)return;const s=n==null?void 0:n.token;yn!==s&&(yn=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Oc(t=ho()){const e=Jn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ra(t,{popupRedirectResolver:yc,persistence:[Ca,_a,wr]}),r=Wn("authTokenSyncURL");if(r){const i=Tc(r);fa(n,i,()=>i(n.currentUser)),ha(n,o=>i(o))}const s=Zs("auth");return s&&ia(n,`http://${s}`),n}function Sc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zo({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=O("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Sc().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ec("Browser");export{Rc as a,Ac as b,Oc as g,uo as i};
//# sourceMappingURL=vendor-86c70ec3.js.map
