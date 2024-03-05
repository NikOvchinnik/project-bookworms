function ko(n,e){return function(){return n.apply(e,arguments)}}const{toString:cc}=Object.prototype,{getPrototypeOf:hs}=Object,ei=(n=>e=>{const t=cc.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Ie=n=>(n=n.toLowerCase(),e=>ei(e)===n),ti=n=>e=>typeof e===n,{isArray:St}=Array,Gt=ti("undefined");function uc(n){return n!==null&&!Gt(n)&&n.constructor!==null&&!Gt(n.constructor)&&he(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const xo=Ie("ArrayBuffer");function hc(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&xo(n.buffer),e}const dc=ti("string"),he=ti("function"),Lo=ti("number"),ni=n=>n!==null&&typeof n=="object",fc=n=>n===!0||n===!1,Cn=n=>{if(ei(n)!=="object")return!1;const e=hs(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},pc=Ie("Date"),_c=Ie("File"),mc=Ie("Blob"),gc=Ie("FileList"),yc=n=>ni(n)&&he(n.pipe),vc=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||he(n.append)&&((e=ei(n))==="formdata"||e==="object"&&he(n.toString)&&n.toString()==="[object FormData]"))},Ec=Ie("URLSearchParams"),wc=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function on(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,s;if(typeof n!="object"&&(n=[n]),St(n))for(i=0,s=n.length;i<s;i++)e.call(null,n[i],i,n);else{const r=t?Object.getOwnPropertyNames(n):Object.keys(n),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,n[a],a,n)}}function Do(n,e){e=e.toLowerCase();const t=Object.keys(n);let i=t.length,s;for(;i-- >0;)if(s=t[i],e===s.toLowerCase())return s;return null}const Mo=n=>!Gt(n)&&n!=={};function Ui(){const{caseless:n}=Mo(this)&&this||{},e={},t=(i,s)=>{const r=n&&Do(e,s)||s;Cn(e[r])&&Cn(i)?e[r]=Ui(e[r],i):Cn(i)?e[r]=Ui({},i):St(i)?e[r]=i.slice():e[r]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&on(arguments[i],t);return e}const Ic=(n,e,t,{allOwnKeys:i}={})=>(on(e,(s,r)=>{t&&he(s)?n[r]=ko(s,t):n[r]=s},{allOwnKeys:i}),n),Cc=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),bc=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},Tc=(n,e,t,i)=>{let s,r,o;const a={};if(e=e||{},n==null)return e;do{for(s=Object.getOwnPropertyNames(n),r=s.length;r-- >0;)o=s[r],(!i||i(o,n,e))&&!a[o]&&(e[o]=n[o],a[o]=!0);n=t!==!1&&hs(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},Sc=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},Rc=n=>{if(!n)return null;if(St(n))return n;let e=n.length;if(!Lo(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},Nc=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&hs(Uint8Array)),Ac=(n,e)=>{const i=(n&&n[Symbol.iterator]).call(n);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(n,r[0],r[1])}},Pc=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Oc=Ie("HTMLFormElement"),kc=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,s){return i.toUpperCase()+s}),fr=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),xc=Ie("RegExp"),Fo=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};on(t,(s,r)=>{let o;(o=e(s,r,n))!==!1&&(i[r]=o||s)}),Object.defineProperties(n,i)},Lc=n=>{Fo(n,(e,t)=>{if(he(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const i=n[t];if(he(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Dc=(n,e)=>{const t={},i=s=>{s.forEach(r=>{t[r]=!0})};return St(n)?i(n):i(String(n).split(e)),t},Mc=()=>{},Fc=(n,e)=>(n=+n,Number.isFinite(n)?n:e),Ei="abcdefghijklmnopqrstuvwxyz",pr="0123456789",Uo={DIGIT:pr,ALPHA:Ei,ALPHA_DIGIT:Ei+Ei.toUpperCase()+pr},Uc=(n=16,e=Uo.ALPHA_DIGIT)=>{let t="";const{length:i}=e;for(;n--;)t+=e[Math.random()*i|0];return t};function Bc(n){return!!(n&&he(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Hc=n=>{const e=new Array(10),t=(i,s)=>{if(ni(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[s]=i;const r=St(i)?[]:{};return on(i,(o,a)=>{const l=t(o,s+1);!Gt(l)&&(r[a]=l)}),e[s]=void 0,r}}return i};return t(n,0)},Wc=Ie("AsyncFunction"),Vc=n=>n&&(ni(n)||he(n))&&he(n.then)&&he(n.catch),v={isArray:St,isArrayBuffer:xo,isBuffer:uc,isFormData:vc,isArrayBufferView:hc,isString:dc,isNumber:Lo,isBoolean:fc,isObject:ni,isPlainObject:Cn,isUndefined:Gt,isDate:pc,isFile:_c,isBlob:mc,isRegExp:xc,isFunction:he,isStream:yc,isURLSearchParams:Ec,isTypedArray:Nc,isFileList:gc,forEach:on,merge:Ui,extend:Ic,trim:wc,stripBOM:Cc,inherits:bc,toFlatObject:Tc,kindOf:ei,kindOfTest:Ie,endsWith:Sc,toArray:Rc,forEachEntry:Ac,matchAll:Pc,isHTMLForm:Oc,hasOwnProperty:fr,hasOwnProp:fr,reduceDescriptors:Fo,freezeMethods:Lc,toObjectSet:Dc,toCamelCase:kc,noop:Mc,toFiniteNumber:Fc,findKey:Do,global:{},isContextDefined:Mo,ALPHABET:Uo,generateString:Uc,isSpecCompliantForm:Bc,toJSONObject:Hc,isAsyncFn:Wc,isThenable:Vc};function W(n,e,t,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),s&&(this.response=s)}v.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Bo=W.prototype,Ho={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Ho[n]={value:n}});Object.defineProperties(W,Ho);Object.defineProperty(Bo,"isAxiosError",{value:!0});W.from=(n,e,t,i,s,r)=>{const o=Object.create(Bo);return v.toFlatObject(n,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,n.message,e,t,i,s),o.cause=n,o.name=n.name,r&&Object.assign(o,r),o};const jc=null;function Bi(n){return v.isPlainObject(n)||v.isArray(n)}function Wo(n){return v.endsWith(n,"[]")?n.slice(0,-2):n}function _r(n,e,t){return n?n.concat(e).map(function(s,r){return s=Wo(s),!t&&r?"["+s+"]":s}).join(t?".":""):e}function zc(n){return v.isArray(n)&&!n.some(Bi)}const qc=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function ii(n,e,t){if(!v.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=v.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,y){return!v.isUndefined(y[m])});const i=t.metaTokens,s=t.visitor||h,r=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function c(d){if(d===null)return"";if(v.isDate(d))return d.toISOString();if(!l&&v.isBlob(d))throw new W("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(d)||v.isTypedArray(d)?l&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function h(d,m,y){let I=d;if(d&&!y&&typeof d=="object"){if(v.endsWith(m,"{}"))m=i?m:m.slice(0,-2),d=JSON.stringify(d);else if(v.isArray(d)&&zc(d)||(v.isFileList(d)||v.endsWith(m,"[]"))&&(I=v.toArray(d)))return m=Wo(m),I.forEach(function(M,T){!(v.isUndefined(M)||M===null)&&e.append(o===!0?_r([m],T,r):o===null?m:m+"[]",c(M))}),!1}return Bi(d)?!0:(e.append(_r(y,m,r),c(d)),!1)}const u=[],g=Object.assign(qc,{defaultVisitor:h,convertValue:c,isVisitable:Bi});function p(d,m){if(!v.isUndefined(d)){if(u.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));u.push(d),v.forEach(d,function(I,R){(!(v.isUndefined(I)||I===null)&&s.call(e,I,v.isString(R)?R.trim():R,m,g))===!0&&p(I,m?m.concat(R):[R])}),u.pop()}}if(!v.isObject(n))throw new TypeError("data must be an object");return p(n),e}function mr(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function ds(n,e){this._pairs=[],n&&ii(n,this,e)}const Vo=ds.prototype;Vo.append=function(e,t){this._pairs.push([e,t])};Vo.toString=function(e){const t=e?function(i){return e.call(this,i,mr)}:mr;return this._pairs.map(function(s){return t(s[0])+"="+t(s[1])},"").join("&")};function Gc(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jo(n,e,t){if(!e)return n;const i=t&&t.encode||Gc,s=t&&t.serialize;let r;if(s?r=s(e,t):r=v.isURLSearchParams(e)?e.toString():new ds(e,t).toString(i),r){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+r}return n}class $c{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(i){i!==null&&e(i)})}}const gr=$c,zo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Kc=typeof URLSearchParams<"u"?URLSearchParams:ds,Yc=typeof FormData<"u"?FormData:null,Jc=typeof Blob<"u"?Blob:null,Xc={isBrowser:!0,classes:{URLSearchParams:Kc,FormData:Yc,Blob:Jc},protocols:["http","https","file","blob","url","data"]},qo=typeof window<"u"&&typeof document<"u",Qc=(n=>qo&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),Zc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),eu=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:qo,hasStandardBrowserEnv:Qc,hasStandardBrowserWebWorkerEnv:Zc},Symbol.toStringTag,{value:"Module"})),ve={...eu,...Xc};function tu(n,e){return ii(n,new ve.classes.URLSearchParams,Object.assign({visitor:function(t,i,s,r){return ve.isNode&&v.isBuffer(t)?(this.append(i,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function nu(n){return v.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function iu(n){const e={},t=Object.keys(n);let i;const s=t.length;let r;for(i=0;i<s;i++)r=t[i],e[r]=n[r];return e}function Go(n){function e(t,i,s,r){let o=t[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=t.length;return o=!o&&v.isArray(s)?s.length:o,l?(v.hasOwnProp(s,o)?s[o]=[s[o],i]:s[o]=i,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(t,i,s[o],r)&&v.isArray(s[o])&&(s[o]=iu(s[o])),!a)}if(v.isFormData(n)&&v.isFunction(n.entries)){const t={};return v.forEachEntry(n,(i,s)=>{e(nu(i),s,t,0)}),t}return null}function su(n,e,t){if(v.isString(n))try{return(e||JSON.parse)(n),v.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const fs={transitional:zo,adapter:["xhr","http"],transformRequest:[function(e,t){const i=t.getContentType()||"",s=i.indexOf("application/json")>-1,r=v.isObject(e);if(r&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(Go(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(i.indexOf("application/x-www-form-urlencoded")>-1)return tu(e,this.formSerializer).toString();if((a=v.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ii(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||s?(t.setContentType("application/json",!1),su(e)):e}],transformResponse:[function(e){const t=this.transitional||fs.transitional,i=t&&t.forcedJSONParsing,s=this.responseType==="json";if(e&&v.isString(e)&&(i&&!this.responseType||s)){const o=!(t&&t.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ve.classes.FormData,Blob:ve.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],n=>{fs.headers[n]={}});const ps=fs,ru=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ou=n=>{const e={};let t,i,s;return n&&n.split(`
`).forEach(function(o){s=o.indexOf(":"),t=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!t||e[t]&&ru[t])&&(t==="set-cookie"?e[t]?e[t].push(i):e[t]=[i]:e[t]=e[t]?e[t]+", "+i:i)}),e},yr=Symbol("internals");function Lt(n){return n&&String(n).trim().toLowerCase()}function bn(n){return n===!1||n==null?n:v.isArray(n)?n.map(bn):String(n)}function au(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const lu=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function wi(n,e,t,i,s){if(v.isFunction(i))return i.call(this,e,t);if(s&&(e=t),!!v.isString(e)){if(v.isString(i))return e.indexOf(i)!==-1;if(v.isRegExp(i))return i.test(e)}}function cu(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function uu(n,e){const t=v.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}class si{constructor(e){e&&this.set(e)}set(e,t,i){const s=this;function r(a,l,c){const h=Lt(l);if(!h)throw new Error("header name must be a non-empty string");const u=v.findKey(s,h);(!u||s[u]===void 0||c===!0||c===void 0&&s[u]!==!1)&&(s[u||l]=bn(a))}const o=(a,l)=>v.forEach(a,(c,h)=>r(c,h,l));return v.isPlainObject(e)||e instanceof this.constructor?o(e,t):v.isString(e)&&(e=e.trim())&&!lu(e)?o(ou(e),t):e!=null&&r(t,e,i),this}get(e,t){if(e=Lt(e),e){const i=v.findKey(this,e);if(i){const s=this[i];if(!t)return s;if(t===!0)return au(s);if(v.isFunction(t))return t.call(this,s,i);if(v.isRegExp(t))return t.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Lt(e),e){const i=v.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||wi(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let s=!1;function r(o){if(o=Lt(o),o){const a=v.findKey(i,o);a&&(!t||wi(i,i[a],a,t))&&(delete i[a],s=!0)}}return v.isArray(e)?e.forEach(r):r(e),s}clear(e){const t=Object.keys(this);let i=t.length,s=!1;for(;i--;){const r=t[i];(!e||wi(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const t=this,i={};return v.forEach(this,(s,r)=>{const o=v.findKey(i,r);if(o){t[o]=bn(s),delete t[r];return}const a=e?cu(r):String(r).trim();a!==r&&delete t[r],t[a]=bn(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return v.forEach(this,(i,s)=>{i!=null&&i!==!1&&(t[s]=e&&v.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const i=new this(e);return t.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[yr]=this[yr]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=Lt(o);i[a]||(uu(s,o),i[a]=!0)}return v.isArray(e)?e.forEach(r):r(e),this}}si.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(si.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});v.freezeMethods(si);const Se=si;function Ii(n,e){const t=this||ps,i=e||t,s=Se.from(i.headers);let r=i.data;return v.forEach(n,function(a){r=a.call(t,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function $o(n){return!!(n&&n.__CANCEL__)}function an(n,e,t){W.call(this,n??"canceled",W.ERR_CANCELED,e,t),this.name="CanceledError"}v.inherits(an,W,{__CANCEL__:!0});function hu(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new W("Request failed with status code "+t.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}const du=ve.hasStandardBrowserEnv?{write(n,e,t,i,s,r){const o=[n+"="+encodeURIComponent(e)];v.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),v.isString(i)&&o.push("path="+i),v.isString(s)&&o.push("domain="+s),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function fu(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function pu(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Ko(n,e){return n&&!fu(e)?pu(n,e):e}const _u=ve.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let i;function s(r){let o=r;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function mu(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function gu(n,e){n=n||10;const t=new Array(n),i=new Array(n);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),h=i[r];o||(o=c),t[s]=l,i[s]=c;let u=r,g=0;for(;u!==s;)g+=t[u++],u=u%n;if(s=(s+1)%n,s===r&&(r=(r+1)%n),c-o<e)return;const p=h&&c-h;return p?Math.round(g*1e3/p):void 0}}function vr(n,e){let t=0;const i=gu(50,250);return s=>{const r=s.loaded,o=s.lengthComputable?s.total:void 0,a=r-t,l=i(a),c=r<=o;t=r;const h={loaded:r,total:o,progress:o?r/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-r)/l:void 0,event:s};h[e?"download":"upload"]=!0,n(h)}}const yu=typeof XMLHttpRequest<"u",vu=yu&&function(n){return new Promise(function(t,i){let s=n.data;const r=Se.from(n.headers).normalize();let{responseType:o,withXSRFToken:a}=n,l;function c(){n.cancelToken&&n.cancelToken.unsubscribe(l),n.signal&&n.signal.removeEventListener("abort",l)}let h;if(v.isFormData(s)){if(ve.hasStandardBrowserEnv||ve.hasStandardBrowserWebWorkerEnv)r.setContentType(!1);else if((h=r.getContentType())!==!1){const[m,...y]=h?h.split(";").map(I=>I.trim()).filter(Boolean):[];r.setContentType([m||"multipart/form-data",...y].join("; "))}}let u=new XMLHttpRequest;if(n.auth){const m=n.auth.username||"",y=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";r.set("Authorization","Basic "+btoa(m+":"+y))}const g=Ko(n.baseURL,n.url);u.open(n.method.toUpperCase(),jo(g,n.params,n.paramsSerializer),!0),u.timeout=n.timeout;function p(){if(!u)return;const m=Se.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),I={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:m,config:n,request:u};hu(function(M){t(M),c()},function(M){i(M),c()},I),u=null}if("onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){u&&(i(new W("Request aborted",W.ECONNABORTED,n,u)),u=null)},u.onerror=function(){i(new W("Network Error",W.ERR_NETWORK,n,u)),u=null},u.ontimeout=function(){let y=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const I=n.transitional||zo;n.timeoutErrorMessage&&(y=n.timeoutErrorMessage),i(new W(y,I.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,n,u)),u=null},ve.hasStandardBrowserEnv&&(a&&v.isFunction(a)&&(a=a(n)),a||a!==!1&&_u(g))){const m=n.xsrfHeaderName&&n.xsrfCookieName&&du.read(n.xsrfCookieName);m&&r.set(n.xsrfHeaderName,m)}s===void 0&&r.setContentType(null),"setRequestHeader"in u&&v.forEach(r.toJSON(),function(y,I){u.setRequestHeader(I,y)}),v.isUndefined(n.withCredentials)||(u.withCredentials=!!n.withCredentials),o&&o!=="json"&&(u.responseType=n.responseType),typeof n.onDownloadProgress=="function"&&u.addEventListener("progress",vr(n.onDownloadProgress,!0)),typeof n.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",vr(n.onUploadProgress)),(n.cancelToken||n.signal)&&(l=m=>{u&&(i(!m||m.type?new an(null,n,u):m),u.abort(),u=null)},n.cancelToken&&n.cancelToken.subscribe(l),n.signal&&(n.signal.aborted?l():n.signal.addEventListener("abort",l)));const d=mu(g);if(d&&ve.protocols.indexOf(d)===-1){i(new W("Unsupported protocol "+d+":",W.ERR_BAD_REQUEST,n));return}u.send(s||null)})},Hi={http:jc,xhr:vu};v.forEach(Hi,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Er=n=>`- ${n}`,Eu=n=>v.isFunction(n)||n===null||n===!1,Yo={getAdapter:n=>{n=v.isArray(n)?n:[n];const{length:e}=n;let t,i;const s={};for(let r=0;r<e;r++){t=n[r];let o;if(i=t,!Eu(t)&&(i=Hi[(o=String(t)).toLowerCase()],i===void 0))throw new W(`Unknown adapter '${o}'`);if(i)break;s[o||"#"+r]=i}if(!i){const r=Object.entries(s).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(Er).join(`
`):" "+Er(r[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Hi};function Ci(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new an(null,n)}function wr(n){return Ci(n),n.headers=Se.from(n.headers),n.data=Ii.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Yo.getAdapter(n.adapter||ps.adapter)(n).then(function(i){return Ci(n),i.data=Ii.call(n,n.transformResponse,i),i.headers=Se.from(i.headers),i},function(i){return $o(i)||(Ci(n),i&&i.response&&(i.response.data=Ii.call(n,n.transformResponse,i.response),i.response.headers=Se.from(i.response.headers))),Promise.reject(i)})}const Ir=n=>n instanceof Se?n.toJSON():n;function Et(n,e){e=e||{};const t={};function i(c,h,u){return v.isPlainObject(c)&&v.isPlainObject(h)?v.merge.call({caseless:u},c,h):v.isPlainObject(h)?v.merge({},h):v.isArray(h)?h.slice():h}function s(c,h,u){if(v.isUndefined(h)){if(!v.isUndefined(c))return i(void 0,c,u)}else return i(c,h,u)}function r(c,h){if(!v.isUndefined(h))return i(void 0,h)}function o(c,h){if(v.isUndefined(h)){if(!v.isUndefined(c))return i(void 0,c)}else return i(void 0,h)}function a(c,h,u){if(u in e)return i(c,h);if(u in n)return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,h)=>s(Ir(c),Ir(h),!0)};return v.forEach(Object.keys(Object.assign({},n,e)),function(h){const u=l[h]||s,g=u(n[h],e[h],h);v.isUndefined(g)&&u!==a||(t[h]=g)}),t}const Jo="1.6.7",_s={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{_s[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const Cr={};_s.transitional=function(e,t,i){function s(r,o){return"[Axios v"+Jo+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!Cr[o]&&(Cr[o]=!0,console.warn(s(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(r,o,a):!0}};function wu(n,e,t){if(typeof n!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let s=i.length;for(;s-- >0;){const r=i[s],o=e[r];if(o){const a=n[r],l=a===void 0||o(a,r,n);if(l!==!0)throw new W("option "+r+" must be "+l,W.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new W("Unknown option "+r,W.ERR_BAD_OPTION)}}const Wi={assertOptions:wu,validators:_s},xe=Wi.validators;class Pn{constructor(e){this.defaults=e,this.interceptors={request:new gr,response:new gr}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const r=s.stack?s.stack.replace(/^.+\n/,""):"";i.stack?r&&!String(i.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+r):i.stack=r}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Et(this.defaults,t);const{transitional:i,paramsSerializer:s,headers:r}=t;i!==void 0&&Wi.assertOptions(i,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),s!=null&&(v.isFunction(s)?t.paramsSerializer={serialize:s}:Wi.assertOptions(s,{encode:xe.function,serialize:xe.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=r&&v.merge(r.common,r[t.method]);r&&v.forEach(["delete","get","head","post","put","patch","common"],d=>{delete r[d]}),t.headers=Se.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(t)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const c=[];this.interceptors.response.forEach(function(m){c.push(m.fulfilled,m.rejected)});let h,u=0,g;if(!l){const d=[wr.bind(this),void 0];for(d.unshift.apply(d,a),d.push.apply(d,c),g=d.length,h=Promise.resolve(t);u<g;)h=h.then(d[u++],d[u++]);return h}g=a.length;let p=t;for(u=0;u<g;){const d=a[u++],m=a[u++];try{p=d(p)}catch(y){m.call(this,y);break}}try{h=wr.call(this,p)}catch(d){return Promise.reject(d)}for(u=0,g=c.length;u<g;)h=h.then(c[u++],c[u++]);return h}getUri(e){e=Et(this.defaults,e);const t=Ko(e.baseURL,e.url);return jo(t,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Pn.prototype[e]=function(t,i){return this.request(Et(i||{},{method:e,url:t,data:(i||{}).data}))}});v.forEach(["post","put","patch"],function(e){function t(i){return function(r,o,a){return this.request(Et(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}Pn.prototype[e]=t(),Pn.prototype[e+"Form"]=t(!0)});const Tn=Pn;class ms{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(r){t=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new an(r,o,a),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new ms(function(s){e=s}),cancel:e}}}const Iu=ms;function Cu(n){return function(t){return n.apply(null,t)}}function bu(n){return v.isObject(n)&&n.isAxiosError===!0}const Vi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vi).forEach(([n,e])=>{Vi[e]=n});const Tu=Vi;function Xo(n){const e=new Tn(n),t=ko(Tn.prototype.request,e);return v.extend(t,Tn.prototype,e,{allOwnKeys:!0}),v.extend(t,e,null,{allOwnKeys:!0}),t.create=function(s){return Xo(Et(n,s))},t}const Z=Xo(ps);Z.Axios=Tn;Z.CanceledError=an;Z.CancelToken=Iu;Z.isCancel=$o;Z.VERSION=Jo;Z.toFormData=ii;Z.AxiosError=W;Z.Cancel=Z.CanceledError;Z.all=function(e){return Promise.all(e)};Z.spread=Cu;Z.isAxiosError=bu;Z.mergeConfig=Et;Z.AxiosHeaders=Se;Z.formToJSON=n=>Go(v.isHTMLForm(n)?new FormData(n):n);Z.getAdapter=Yo.getAdapter;Z.HttpStatusCode=Tu;Z.default=Z;const Sg=Z;var yn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function vn(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Zo={exports:{}};(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,s,r){function o(c,h){if(!s[c]){if(!i[c]){var u=typeof vn=="function"&&vn;if(!h&&u)return u(c,!0);if(a)return a(c,!0);var g=new Error("Cannot find module '"+c+"'");throw g.code="MODULE_NOT_FOUND",g}var p=s[c]={exports:{}};i[c][0].call(p.exports,function(d){return o(i[c][1][d]||d)},p,p.exports,t,i,s,r)}return s[c].exports}for(var a=typeof vn=="function"&&vn,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(t,i,s){Object.defineProperty(s,"__esModule",{value:!0}),s.create=s.visible=void 0;var r=function(l){var c=arguments.length>1&&arguments[1]!==void 0&&arguments[1],h=document.createElement("div");return h.innerHTML=l.trim(),c===!0?h.children:h.firstChild},o=function(l,c){var h=l.children;return h.length===1&&h[0].tagName===c},a=function(l){return(l=l||document.querySelector(".basicLightbox"))!=null&&l.ownerDocument.body.contains(l)===!0};s.visible=a,s.create=function(l,c){var h=function(p,d){var m=r(`
		<div class="basicLightbox `.concat(d.className,`">
			<div class="basicLightbox__placeholder" role="dialog"></div>
		</div>
	`)),y=m.querySelector(".basicLightbox__placeholder");p.forEach(function(T){return y.appendChild(T)});var I=o(y,"IMG"),R=o(y,"VIDEO"),M=o(y,"IFRAME");return I===!0&&m.classList.add("basicLightbox--img"),R===!0&&m.classList.add("basicLightbox--video"),M===!0&&m.classList.add("basicLightbox--iframe"),m}(l=function(p){var d=typeof p=="string",m=p instanceof HTMLElement==1;if(d===!1&&m===!1)throw new Error("Content must be a DOM element/node or string");return d===!0?Array.from(r(p,!0)):p.tagName==="TEMPLATE"?[p.content.cloneNode(!0)]:Array.from(p.children)}(l),c=function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if((p=Object.assign({},p)).closable==null&&(p.closable=!0),p.className==null&&(p.className=""),p.onShow==null&&(p.onShow=function(){}),p.onClose==null&&(p.onClose=function(){}),typeof p.closable!="boolean")throw new Error("Property `closable` must be a boolean");if(typeof p.className!="string")throw new Error("Property `className` must be a string");if(typeof p.onShow!="function")throw new Error("Property `onShow` must be a function");if(typeof p.onClose!="function")throw new Error("Property `onClose` must be a function");return p}(c)),u=function(p){return c.onClose(g)!==!1&&function(d,m){return d.classList.remove("basicLightbox--visible"),setTimeout(function(){return a(d)===!1||d.parentElement.removeChild(d),m()},410),!0}(h,function(){if(typeof p=="function")return p(g)})};c.closable===!0&&h.addEventListener("click",function(p){p.target===h&&u()});var g={element:function(){return h},visible:function(){return a(h)},show:function(p){return c.onShow(g)!==!1&&function(d,m){return document.body.appendChild(d),setTimeout(function(){requestAnimationFrame(function(){return d.classList.add("basicLightbox--visible"),m()})},10),!0}(h,function(){if(typeof p=="function")return p(g)})},close:u};return g}},{}]},{},[1])(1)})})(Zo);var Rg=Zo.exports;var ea={exports:{}};(function(n,e){(function(t,i){n.exports=i(t)})(typeof yn<"u"?yn:window||yn.window||yn.global,function(t){var i={},s="iziToast";document.querySelector("body");var r=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),a=typeof InstallTrigger<"u",l="ontouchstart"in document.documentElement,c=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],h={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},u=568,g={};i.children={};var p={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var d=function(w,E){E=E||{bubbles:!1,cancelable:!1,detail:void 0};var f=document.createEvent("CustomEvent");return f.initCustomEvent(w,E.bubbles,E.cancelable,E.detail),f};d.prototype=window.Event.prototype,window.CustomEvent=d}var m=function(w,E,f){if(Object.prototype.toString.call(w)==="[object Object]")for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&E.call(f,w[_],_,w);else if(w)for(var N=0,k=w.length;N<k;N++)E.call(f,w[N],N,w)},y=function(w,E){var f={};return m(w,function(_,N){f[N]=w[N]}),m(E,function(_,N){f[N]=E[N]}),f},I=function(w){var E=document.createDocumentFragment(),f=document.createElement("div");for(f.innerHTML=w;f.firstChild;)E.appendChild(f.firstChild);return E},R=function(w){var E=btoa(encodeURIComponent(w));return E.replace(/=/g,"")},M=function(w){return w.substring(0,1)=="#"||w.substring(0,3)=="rgb"||w.substring(0,3)=="hsl"},T=function(w){try{return btoa(atob(w))==w}catch{return!1}},S=function(){return{move:function(w,E,f,_){var N,k=.3,b=180;_!==0&&(w.classList.add(s+"-dragged"),w.style.transform="translateX("+_+"px)",_>0?(N=(b-_)/b,N<k&&E.hide(y(f,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),w,"drag")):(N=(b+_)/b,N<k&&E.hide(y(f,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),w,"drag")),w.style.opacity=N,N<k&&((o||a)&&(w.style.left=_+"px"),w.parentNode.style.opacity=k,this.stopMoving(w,null)))},startMoving:function(w,E,f,_){_=_||window.event;var N=l?_.touches[0].clientX:_.clientX,k=w.style.transform.replace("px)","");k=k.replace("translateX(","");var b=N-k;f.transitionIn&&w.classList.remove(f.transitionIn),f.transitionInMobile&&w.classList.remove(f.transitionInMobile),w.style.transition="",l?document.ontouchmove=function(P){P.preventDefault(),P=P||window.event;var V=P.touches[0].clientX,J=V-b;S.move(w,E,f,J)}:document.onmousemove=function(P){P.preventDefault(),P=P||window.event;var V=P.clientX,J=V-b;S.move(w,E,f,J)}},stopMoving:function(w,E){l?document.ontouchmove=function(){}:document.onmousemove=function(){},w.style.opacity="",w.style.transform="",w.classList.contains(s+"-dragged")&&(w.classList.remove(s+"-dragged"),w.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){w.style.transition=""},400))}}}();return i.setSetting=function(w,E,f){i.children[w][E]=f},i.getSetting=function(w,E){return i.children[w][E]},i.destroy=function(){m(document.querySelectorAll("."+s+"-overlay"),function(w,E){w.remove()}),m(document.querySelectorAll("."+s+"-wrapper"),function(w,E){w.remove()}),m(document.querySelectorAll("."+s),function(w,E){w.remove()}),this.children={},document.removeEventListener(s+"-opened",{},!1),document.removeEventListener(s+"-opening",{},!1),document.removeEventListener(s+"-closing",{},!1),document.removeEventListener(s+"-closed",{},!1),document.removeEventListener("keyup",{},!1),g={}},i.settings=function(w){i.destroy(),g=w,p=y(p,w||{})},m(h,function(w,E){i[E]=function(f){var _=y(g,f||{});_=y(w,_||{}),this.show(_)}}),i.progress=function(w,E,f){var _=this,N=E.getAttribute("data-iziToast-ref"),k=y(this.children[N],w||{}),b=E.querySelector("."+s+"-progressbar div");return{start:function(){typeof k.time.REMAINING>"u"&&(E.classList.remove(s+"-reseted"),b!==null&&(b.style.transition="width "+k.timeout+"ms "+k.progressBarEasing,b.style.width="0%"),k.time.START=new Date().getTime(),k.time.END=k.time.START+k.timeout,k.time.TIMER=setTimeout(function(){clearTimeout(k.time.TIMER),E.classList.contains(s+"-closing")||(_.hide(k,E,"timeout"),typeof f=="function"&&f.apply(_))},k.timeout),_.setSetting(N,"time",k.time))},pause:function(){if(typeof k.time.START<"u"&&!E.classList.contains(s+"-paused")&&!E.classList.contains(s+"-reseted")){if(E.classList.add(s+"-paused"),k.time.REMAINING=k.time.END-new Date().getTime(),clearTimeout(k.time.TIMER),_.setSetting(N,"time",k.time),b!==null){var P=window.getComputedStyle(b),V=P.getPropertyValue("width");b.style.transition="none",b.style.width=V}typeof f=="function"&&setTimeout(function(){f.apply(_)},10)}},resume:function(){typeof k.time.REMAINING<"u"?(E.classList.remove(s+"-paused"),b!==null&&(b.style.transition="width "+k.time.REMAINING+"ms "+k.progressBarEasing,b.style.width="0%"),k.time.END=new Date().getTime()+k.time.REMAINING,k.time.TIMER=setTimeout(function(){clearTimeout(k.time.TIMER),E.classList.contains(s+"-closing")||(_.hide(k,E,"timeout"),typeof f=="function"&&f.apply(_))},k.time.REMAINING),_.setSetting(N,"time",k.time)):this.start()},reset:function(){clearTimeout(k.time.TIMER),delete k.time.REMAINING,_.setSetting(N,"time",k.time),E.classList.add(s+"-reseted"),E.classList.remove(s+"-paused"),b!==null&&(b.style.transition="none",b.style.width="100%"),typeof f=="function"&&setTimeout(function(){f.apply(_)},10)}}},i.hide=function(w,E,f){typeof E!="object"&&(E=document.querySelector(E));var _=this,N=y(this.children[E.getAttribute("data-iziToast-ref")],w||{});N.closedBy=f||null,delete N.time.REMAINING,E.classList.add(s+"-closing"),function(){var P=document.querySelector("."+s+"-overlay");if(P!==null){var V=P.getAttribute("data-iziToast-ref");V=V.split(",");var J=V.indexOf(String(N.ref));J!==-1&&V.splice(J,1),P.setAttribute("data-iziToast-ref",V.join()),V.length===0&&(P.classList.remove("fadeIn"),P.classList.add("fadeOut"),setTimeout(function(){P.remove()},700))}}(),N.transitionIn&&E.classList.remove(N.transitionIn),N.transitionInMobile&&E.classList.remove(N.transitionInMobile),r||window.innerWidth<=u?N.transitionOutMobile&&E.classList.add(N.transitionOutMobile):N.transitionOut&&E.classList.add(N.transitionOut);var k=E.parentNode.offsetHeight;E.parentNode.style.height=k+"px",E.style.pointerEvents="none",(!r||window.innerWidth>u)&&(E.parentNode.style.transitionDelay="0.2s");try{var b=new CustomEvent(s+"-closing",{detail:N,bubbles:!0,cancelable:!0});document.dispatchEvent(b)}catch(P){console.warn(P)}setTimeout(function(){E.parentNode.style.height="0px",E.parentNode.style.overflow="",setTimeout(function(){delete _.children[N.ref],E.parentNode.remove();try{var P=new CustomEvent(s+"-closed",{detail:N,bubbles:!0,cancelable:!0});document.dispatchEvent(P)}catch(V){console.warn(V)}typeof N.onClosed<"u"&&N.onClosed.apply(null,[N,E,f])},1e3)},200),typeof N.onClosing<"u"&&N.onClosing.apply(null,[N,E,f])},i.show=function(w){var E=this,f=y(g,w||{});if(f=y(p,f),f.time={},f.id===null&&(f.id=R(f.title+f.message+f.color)),f.displayMode===1||f.displayMode=="once")try{if(document.querySelectorAll("."+s+"#"+f.id).length>0)return!1}catch{console.warn("["+s+"] Could not find an element with this selector: #"+f.id+". Try to set an valid id.")}if(f.displayMode===2||f.displayMode=="replace")try{m(document.querySelectorAll("."+s+"#"+f.id),function(b,P){E.hide(f,b,"replaced")})}catch{console.warn("["+s+"] Could not find an element with this selector: #"+f.id+". Try to set an valid id.")}f.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),i.children[f.ref]=f;var _={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:f.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};_.toast.setAttribute("data-iziToast-ref",f.ref),_.toast.appendChild(_.toastBody),_.toastCapsule.appendChild(_.toast),function(){if(_.toast.classList.add(s),_.toast.classList.add(s+"-opening"),_.toastCapsule.classList.add(s+"-capsule"),_.toastBody.classList.add(s+"-body"),_.toastTexts.classList.add(s+"-texts"),r||window.innerWidth<=u?f.transitionInMobile&&_.toast.classList.add(f.transitionInMobile):f.transitionIn&&_.toast.classList.add(f.transitionIn),f.class){var b=f.class.split(" ");m(b,function(P,V){_.toast.classList.add(P)})}f.id&&(_.toast.id=f.id),f.rtl&&(_.toast.classList.add(s+"-rtl"),_.toast.setAttribute("dir","rtl")),f.layout>1&&_.toast.classList.add(s+"-layout"+f.layout),f.balloon&&_.toast.classList.add(s+"-balloon"),f.maxWidth&&(isNaN(f.maxWidth)?_.toast.style.maxWidth=f.maxWidth:_.toast.style.maxWidth=f.maxWidth+"px"),(f.theme!==""||f.theme!=="light")&&_.toast.classList.add(s+"-theme-"+f.theme),f.color&&(M(f.color)?_.toast.style.background=f.color:_.toast.classList.add(s+"-color-"+f.color)),f.backgroundColor&&(_.toast.style.background=f.backgroundColor,f.balloon&&(_.toast.style.borderColor=f.backgroundColor))}(),function(){f.image&&(_.cover.classList.add(s+"-cover"),_.cover.style.width=f.imageWidth+"px",T(f.image.replace(/ /g,""))?_.cover.style.backgroundImage="url(data:image/png;base64,"+f.image.replace(/ /g,"")+")":_.cover.style.backgroundImage="url("+f.image+")",f.rtl?_.toastBody.style.marginRight=f.imageWidth+10+"px":_.toastBody.style.marginLeft=f.imageWidth+10+"px",_.toast.appendChild(_.cover))}(),function(){f.close?(_.buttonClose=document.createElement("button"),_.buttonClose.type="button",_.buttonClose.classList.add(s+"-close"),_.buttonClose.addEventListener("click",function(b){b.target,E.hide(f,_.toast,"button")}),_.toast.appendChild(_.buttonClose)):f.rtl?_.toast.style.paddingLeft="18px":_.toast.style.paddingRight="18px"}(),function(){f.progressBar&&(_.progressBar=document.createElement("div"),_.progressBarDiv=document.createElement("div"),_.progressBar.classList.add(s+"-progressbar"),_.progressBarDiv.style.background=f.progressBarColor,_.progressBar.appendChild(_.progressBarDiv),_.toast.appendChild(_.progressBar)),f.timeout&&(f.pauseOnHover&&!f.resetOnHover&&(_.toast.addEventListener("mouseenter",function(b){E.progress(f,_.toast).pause()}),_.toast.addEventListener("mouseleave",function(b){E.progress(f,_.toast).resume()})),f.resetOnHover&&(_.toast.addEventListener("mouseenter",function(b){E.progress(f,_.toast).reset()}),_.toast.addEventListener("mouseleave",function(b){E.progress(f,_.toast).start()})))}(),function(){f.iconUrl?(_.icon.setAttribute("class",s+"-icon"),_.icon.setAttribute("src",f.iconUrl)):f.icon&&(_.icon.setAttribute("class",s+"-icon "+f.icon),f.iconText&&_.icon.appendChild(document.createTextNode(f.iconText)),f.iconColor&&(_.icon.style.color=f.iconColor)),(f.icon||f.iconUrl)&&(f.rtl?_.toastBody.style.paddingRight="33px":_.toastBody.style.paddingLeft="33px",_.toastBody.appendChild(_.icon))}(),function(){f.title.length>0&&(_.strong=document.createElement("strong"),_.strong.classList.add(s+"-title"),_.strong.appendChild(I(f.title)),_.toastTexts.appendChild(_.strong),f.titleColor&&(_.strong.style.color=f.titleColor),f.titleSize&&(isNaN(f.titleSize)?_.strong.style.fontSize=f.titleSize:_.strong.style.fontSize=f.titleSize+"px"),f.titleLineHeight&&(isNaN(f.titleSize)?_.strong.style.lineHeight=f.titleLineHeight:_.strong.style.lineHeight=f.titleLineHeight+"px")),f.message.length>0&&(_.p=document.createElement("p"),_.p.classList.add(s+"-message"),_.p.appendChild(I(f.message)),_.toastTexts.appendChild(_.p),f.messageColor&&(_.p.style.color=f.messageColor),f.messageSize&&(isNaN(f.titleSize)?_.p.style.fontSize=f.messageSize:_.p.style.fontSize=f.messageSize+"px"),f.messageLineHeight&&(isNaN(f.titleSize)?_.p.style.lineHeight=f.messageLineHeight:_.p.style.lineHeight=f.messageLineHeight+"px")),f.title.length>0&&f.message.length>0&&(f.rtl?_.strong.style.marginLeft="10px":f.layout!==2&&!f.rtl&&(_.strong.style.marginRight="10px"))}(),_.toastBody.appendChild(_.toastTexts);var N;(function(){f.inputs.length>0&&(_.inputs.classList.add(s+"-inputs"),m(f.inputs,function(b,P){_.inputs.appendChild(I(b[0])),N=_.inputs.childNodes,N[P].classList.add(s+"-inputs-child"),b[3]&&setTimeout(function(){N[P].focus()},300),N[P].addEventListener(b[1],function(V){var J=b[2];return J(E,_.toast,this,V)})}),_.toastBody.appendChild(_.inputs))})(),function(){f.buttons.length>0&&(_.buttons.classList.add(s+"-buttons"),m(f.buttons,function(b,P){_.buttons.appendChild(I(b[0]));var V=_.buttons.childNodes;V[P].classList.add(s+"-buttons-child"),b[2]&&setTimeout(function(){V[P].focus()},300),V[P].addEventListener("click",function(J){J.preventDefault();var vi=b[1];return vi(E,_.toast,this,J,N)})})),_.toastBody.appendChild(_.buttons)}(),f.message.length>0&&(f.inputs.length>0||f.buttons.length>0)&&(_.p.style.marginBottom="0"),(f.inputs.length>0||f.buttons.length>0)&&(f.rtl?_.toastTexts.style.marginLeft="10px":_.toastTexts.style.marginRight="10px",f.inputs.length>0&&f.buttons.length>0&&(f.rtl?_.inputs.style.marginLeft="8px":_.inputs.style.marginRight="8px")),function(){_.toastCapsule.style.visibility="hidden",setTimeout(function(){var b=_.toast.offsetHeight,P=_.toast.currentStyle||window.getComputedStyle(_.toast),V=P.marginTop;V=V.split("px"),V=parseInt(V[0]);var J=P.marginBottom;J=J.split("px"),J=parseInt(J[0]),_.toastCapsule.style.visibility="",_.toastCapsule.style.height=b+J+V+"px",setTimeout(function(){_.toastCapsule.style.height="auto",f.target&&(_.toastCapsule.style.overflow="visible")},500),f.timeout&&E.progress(f,_.toast).start()},100)}(),function(){var b=f.position;if(f.target)_.wrapper=document.querySelector(f.target),_.wrapper.classList.add(s+"-target"),f.targetFirst?_.wrapper.insertBefore(_.toastCapsule,_.wrapper.firstChild):_.wrapper.appendChild(_.toastCapsule);else{if(c.indexOf(f.position)==-1){console.warn("["+s+`] Incorrect position.
It can be › `+c);return}r||window.innerWidth<=u?f.position=="bottomLeft"||f.position=="bottomRight"||f.position=="bottomCenter"?b=s+"-wrapper-bottomCenter":f.position=="topLeft"||f.position=="topRight"||f.position=="topCenter"?b=s+"-wrapper-topCenter":b=s+"-wrapper-center":b=s+"-wrapper-"+b,_.wrapper=document.querySelector("."+s+"-wrapper."+b),_.wrapper||(_.wrapper=document.createElement("div"),_.wrapper.classList.add(s+"-wrapper"),_.wrapper.classList.add(b),document.body.appendChild(_.wrapper)),f.position=="topLeft"||f.position=="topCenter"||f.position=="topRight"?_.wrapper.insertBefore(_.toastCapsule,_.wrapper.firstChild):_.wrapper.appendChild(_.toastCapsule)}isNaN(f.zindex)?console.warn("["+s+"] Invalid zIndex."):_.wrapper.style.zIndex=f.zindex}(),function(){f.overlay&&(document.querySelector("."+s+"-overlay.fadeIn")!==null?(_.overlay=document.querySelector("."+s+"-overlay"),_.overlay.setAttribute("data-iziToast-ref",_.overlay.getAttribute("data-iziToast-ref")+","+f.ref),!isNaN(f.zindex)&&f.zindex!==null&&(_.overlay.style.zIndex=f.zindex-1)):(_.overlay.classList.add(s+"-overlay"),_.overlay.classList.add("fadeIn"),_.overlay.style.background=f.overlayColor,_.overlay.setAttribute("data-iziToast-ref",f.ref),!isNaN(f.zindex)&&f.zindex!==null&&(_.overlay.style.zIndex=f.zindex-1),document.querySelector("body").appendChild(_.overlay)),f.overlayClose?(_.overlay.removeEventListener("click",{}),_.overlay.addEventListener("click",function(b){E.hide(f,_.toast,"overlay")})):_.overlay.removeEventListener("click",{}))}(),function(){if(f.animateInside){_.toast.classList.add(s+"-animateInside");var b=[200,100,300];(f.transitionIn=="bounceInLeft"||f.transitionIn=="bounceInRight")&&(b=[400,200,400]),f.title.length>0&&setTimeout(function(){_.strong.classList.add("slideIn")},b[0]),f.message.length>0&&setTimeout(function(){_.p.classList.add("slideIn")},b[1]),(f.icon||f.iconUrl)&&setTimeout(function(){_.icon.classList.add("revealIn")},b[2]);var P=150;f.buttons.length>0&&_.buttons&&setTimeout(function(){m(_.buttons.childNodes,function(V,J){setTimeout(function(){V.classList.add("revealIn")},P),P=P+150})},f.inputs.length>0?150:0),f.inputs.length>0&&_.inputs&&(P=150,m(_.inputs.childNodes,function(V,J){setTimeout(function(){V.classList.add("revealIn")},P),P=P+150}))}}(),f.onOpening.apply(null,[f,_.toast]);try{var k=new CustomEvent(s+"-opening",{detail:f,bubbles:!0,cancelable:!0});document.dispatchEvent(k)}catch(b){console.warn(b)}setTimeout(function(){_.toast.classList.remove(s+"-opening"),_.toast.classList.add(s+"-opened");try{var b=new CustomEvent(s+"-opened",{detail:f,bubbles:!0,cancelable:!0});document.dispatchEvent(b)}catch(P){console.warn(P)}f.onOpened.apply(null,[f,_.toast])},1e3),f.drag&&(l?(_.toast.addEventListener("touchstart",function(b){S.startMoving(this,E,f,b)},!1),_.toast.addEventListener("touchend",function(b){S.stopMoving(this,b)},!1)):(_.toast.addEventListener("mousedown",function(b){b.preventDefault(),S.startMoving(this,E,f,b)},!1),_.toast.addEventListener("mouseup",function(b){b.preventDefault(),S.stopMoving(this,b)},!1))),f.closeOnEscape&&document.addEventListener("keyup",function(b){b=b||window.event,b.keyCode==27&&E.hide(f,_.toast,"esc")}),f.closeOnClick&&_.toast.addEventListener("click",function(b){E.hide(f,_.toast,"toast")}),E.toast=_.toast},i})})(ea);var Su=ea.exports;const Ng=Qo(Su);/**
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
 */const ta={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const C=function(n,e){if(!n)throw Rt(e)},Rt=function(n){return new Error("Firebase Database ("+ta.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const na=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ru=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},gs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let g=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(g=64)),i.push(t[h],t[u],t[g],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(na(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ru(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new Nu;const g=r<<2|a>>4;if(i.push(g),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const d=c<<6&192|u;i.push(d)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ia=function(n){const e=na(n);return gs.encodeByteArray(e,!0)},On=function(n){return ia(n).replace(/\./g,"")},kn=function(n){try{return gs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Au(n){return sa(void 0,n)}function sa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pu(t)||(n[t]=sa(n[t],e[t]));return n}function Pu(n){return n!=="__proto__"}/**
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
 */function Ou(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ku=()=>Ou().__FIREBASE_DEFAULTS__,xu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Lu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kn(n[1]);return e&&JSON.parse(e)},ys=()=>{try{return ku()||xu()||Lu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ra=n=>{var e,t;return(t=(e=ys())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Du=n=>{const e=ra(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},oa=()=>{var n;return(n=ys())===null||n===void 0?void 0:n.config},aa=n=>{var e;return(e=ys())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ri{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Mu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[On(JSON.stringify(t)),On(JSON.stringify(o)),a].join(".")}/**
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
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function Fu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function la(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uu(){const n=oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function ca(){return ta.NODE_ADMIN===!0}function Bu(){try{return typeof indexedDB=="object"}catch{return!1}}function Hu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Wu="FirebaseError";class qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Wu,Object.setPrototypeOf(this,qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ln.prototype.create)}}class ln{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Vu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new qe(s,a,i)}}function Vu(n,e){return n.replace(ju,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const ju=/\{\$([^}]+)}/g;/**
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
 */function $t(n){return JSON.parse(n)}function ie(n){return JSON.stringify(n)}/**
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
 */const ua=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=$t(kn(r[0])||""),t=$t(kn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},zu=function(n){const e=ua(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},qu=function(n){const e=ua(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Oe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function wt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ji(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function xn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(br(r)&&br(o)){if(!Ln(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function br(n){return n!==null&&typeof n=="object"}/**
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
 */function Nt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Bt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ht(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Gu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const g=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const g=(s<<5|s>>>27)+c+l+h+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function $u(n,e){const t=new Ku(n,e);return t.subscribe.bind(t)}class Ku{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Yu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=bi),s.error===void 0&&(s.error=bi),s.complete===void 0&&(s.complete=bi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}function Es(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Ju=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,C(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},oi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function de(n){return n&&n._delegate?n._delegate:n}class et{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ke="[DEFAULT]";/**
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
 */class Xu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ri;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zu(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Qu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qu(n){return n===Ke?void 0:n}function Zu(n){return n.instantiationMode==="EAGER"}/**
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
 */class eh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const th={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},nh=q.INFO,ih={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},sh=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ih[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ws{constructor(e){this.name=e,this._logLevel=nh,this._logHandler=sh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const rh=(n,e)=>e.some(t=>n instanceof t);let Tr,Sr;function oh(){return Tr||(Tr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ah(){return Sr||(Sr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ha=new WeakMap,zi=new WeakMap,da=new WeakMap,Ti=new WeakMap,Is=new WeakMap;function lh(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Be(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ha.set(t,n)}).catch(()=>{}),Is.set(e,n),e}function ch(n){if(zi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});zi.set(n,e)}let qi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return zi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||da.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Be(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uh(n){qi=n(qi)}function hh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Si(this),e,...t);return da.set(i,e.sort?e.sort():[e]),Be(i)}:ah().includes(n)?function(...e){return n.apply(Si(this),e),Be(ha.get(this))}:function(...e){return Be(n.apply(Si(this),e))}}function dh(n){return typeof n=="function"?hh(n):(n instanceof IDBTransaction&&ch(n),rh(n,oh())?new Proxy(n,qi):n)}function Be(n){if(n instanceof IDBRequest)return lh(n);if(Ti.has(n))return Ti.get(n);const e=dh(n);return e!==n&&(Ti.set(n,e),Is.set(e,n)),e}const Si=n=>Is.get(n);function fh(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Be(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Be(o.result),l.oldVersion,l.newVersion,Be(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ph=["get","getKey","getAll","getAllKeys","count"],_h=["put","add","delete","clear"],Ri=new Map;function Rr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=_h.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ph.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ri.set(e,r),r}uh(n=>({...n,get:(e,t,i)=>Rr(e,t)||n.get(e,t,i),has:(e,t)=>!!Rr(e,t)||n.has(e,t)}));/**
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
 */class mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gh(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function gh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",Nr="0.9.28";/**
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
 */const tt=new ws("@firebase/app"),yh="@firebase/app-compat",vh="@firebase/analytics-compat",Eh="@firebase/analytics",wh="@firebase/app-check-compat",Ih="@firebase/app-check",Ch="@firebase/auth",bh="@firebase/auth-compat",Th="@firebase/database",Sh="@firebase/database-compat",Rh="@firebase/functions",Nh="@firebase/functions-compat",Ah="@firebase/installations",Ph="@firebase/installations-compat",Oh="@firebase/messaging",kh="@firebase/messaging-compat",xh="@firebase/performance",Lh="@firebase/performance-compat",Dh="@firebase/remote-config",Mh="@firebase/remote-config-compat",Fh="@firebase/storage",Uh="@firebase/storage-compat",Bh="@firebase/firestore",Hh="@firebase/firestore-compat",Wh="firebase",Vh="10.8.1";/**
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
 */const $i="[DEFAULT]",jh={[Gi]:"fire-core",[yh]:"fire-core-compat",[Eh]:"fire-analytics",[vh]:"fire-analytics-compat",[Ih]:"fire-app-check",[wh]:"fire-app-check-compat",[Ch]:"fire-auth",[bh]:"fire-auth-compat",[Th]:"fire-rtdb",[Sh]:"fire-rtdb-compat",[Rh]:"fire-fn",[Nh]:"fire-fn-compat",[Ah]:"fire-iid",[Ph]:"fire-iid-compat",[Oh]:"fire-fcm",[kh]:"fire-fcm-compat",[xh]:"fire-perf",[Lh]:"fire-perf-compat",[Dh]:"fire-rc",[Mh]:"fire-rc-compat",[Fh]:"fire-gcs",[Uh]:"fire-gcs-compat",[Bh]:"fire-fst",[Hh]:"fire-fst-compat","fire-js":"fire-js",[Wh]:"fire-js-all"};/**
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
 */const Dn=new Map,Ki=new Map;function zh(n,e){try{n.container.addComponent(e)}catch(t){tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function It(n){const e=n.name;if(Ki.has(e))return tt.debug(`There were multiple attempts to register component ${e}.`),!1;Ki.set(e,n);for(const t of Dn.values())zh(t,n);return!0}function Cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const qh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},He=new ln("app","Firebase",qh);/**
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
 */class Gh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw He.create("app-deleted",{appName:this._name})}}/**
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
 */const At=Vh;function $h(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:$i,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw He.create("bad-app-name",{appName:String(s)});if(t||(t=oa()),!t)throw He.create("no-options");const r=Dn.get(s);if(r){if(Ln(t,r.options)&&Ln(i,r.config))return r;throw He.create("duplicate-app",{appName:s})}const o=new eh(s);for(const l of Ki.values())o.addComponent(l);const a=new Gh(t,i,o);return Dn.set(s,a),a}function fa(n=$i){const e=Dn.get(n);if(!e&&n===$i&&oa())return $h();if(!e)throw He.create("no-app",{appName:n});return e}function We(n,e,t){var i;let s=(i=jh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tt.warn(a.join(" "));return}It(new et(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kh="firebase-heartbeat-database",Yh=1,Kt="firebase-heartbeat-store";let Ni=null;function pa(){return Ni||(Ni=fh(Kh,Yh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Kt)}catch(t){console.warn(t)}}}}).catch(n=>{throw He.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Jh(n){try{const t=(await pa()).transaction(Kt),i=await t.objectStore(Kt).get(_a(n));return await t.done,i}catch(e){if(e instanceof qe)tt.warn(e.message);else{const t=He.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tt.warn(t.message)}}}async function Ar(n,e){try{const i=(await pa()).transaction(Kt,"readwrite");await i.objectStore(Kt).put(e,_a(n)),await i.done}catch(t){if(t instanceof qe)tt.warn(t.message);else{const i=He.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tt.warn(i.message)}}}function _a(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Xh=1024,Qh=30*24*60*60*1e3;class Zh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new td(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pr();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Qh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Pr(),{heartbeatsToSend:i,unsentEntries:s}=ed(this._heartbeatsCache.heartbeats),r=On(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Pr(){return new Date().toISOString().substring(0,10)}function ed(n,e=Xh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Or(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Or(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class td{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bu()?Hu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ar(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ar(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Or(n){return On(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function nd(n){It(new et("platform-logger",e=>new mh(e),"PRIVATE")),It(new et("heartbeat",e=>new Zh(e),"PRIVATE")),We(Gi,Nr,n),We(Gi,Nr,"esm2017"),We("fire-js","")}nd("");var id="firebase",sd="10.8.1";/**
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
 */We(id,sd,"app");function bs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ma(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rd=ma,ga=new ln("auth","Firebase",ma());/**
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
 */const Mn=new ws("@firebase/auth");function od(n,...e){Mn.logLevel<=q.WARN&&Mn.warn(`Auth (${At}): ${n}`,...e)}function Sn(n,...e){Mn.logLevel<=q.ERROR&&Mn.error(`Auth (${At}): ${n}`,...e)}/**
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
 */function ye(n,...e){throw Ts(n,...e)}function Ee(n,...e){return Ts(n,...e)}function ad(n,e,t){const i=Object.assign(Object.assign({},rd()),{[e]:t});return new ln("auth","Firebase",i).create(e,{appName:n.name})}function Ts(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ga.create(n,...e)}function x(n,e,...t){if(!n)throw Ts(e,...t)}function Ce(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sn(e),new Error(e)}function Ne(n,e){n||Ce(e)}/**
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
 */function Yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ld(){return kr()==="http:"||kr()==="https:"}function kr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function cd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ld()||Fu()||"connection"in navigator)?navigator.onLine:!0}function ud(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class cn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ne(t>e,"Short delay should be less than long delay!"),this.isMobile=vs()||la()}get(){return cd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ss(n,e){Ne(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ya{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dd=new cn(3e4,6e4);function Ge(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $e(n,e,t,i,s={}){return va(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Nt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ya.fetch()(Ea(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function va(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},hd),e);try{const s=new pd(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw En(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw En(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw En(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw En(n,"user-disabled",o);const h=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ad(n,h,c);ye(n,h)}}catch(s){if(s instanceof qe)throw s;ye(n,"network-request-failed",{message:String(s)})}}async function un(n,e,t,i,s={}){const r=await $e(n,e,t,i,s);return"mfaPendingCredential"in r&&ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ea(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ss(n.config,s):`${n.config.apiScheme}://${s}`}function fd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),dd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function En(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ee(n,e,i);return s.customData._tokenResponse=t,s}function xr(n){return n!==void 0&&n.enterprise!==void 0}class _d{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return fd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function md(n,e){return $e(n,"GET","/v2/recaptchaConfig",Ge(n,e))}/**
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
 */async function gd(n,e){return $e(n,"POST","/v1/accounts:delete",e)}async function yd(n,e){return $e(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vd(n,e=!1){const t=de(n),i=await t.getIdToken(e),s=Rs(i);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Wt(Ai(s.auth_time)),issuedAtTime:Wt(Ai(s.iat)),expirationTime:Wt(Ai(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ai(n){return Number(n)*1e3}function Rs(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Sn("JWT malformed, contained fewer than 3 sections"),null;try{const s=kn(t);return s?JSON.parse(s):(Sn("Failed to decode base64 JWT payload"),null)}catch(s){return Sn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ed(n){const e=Rs(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Yt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qe&&wd(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function wd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Id{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wt(this.lastLoginAt),this.creationTime=Wt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Yt(n,yd(t,{idToken:i}));x(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Td(r.providerUserInfo):[],a=bd(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new wa(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function Cd(n){const e=de(n);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bd(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Td(n){return n.map(e=>{var{providerId:t}=e,i=bs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Sd(n,e){const t=await va(n,{},async()=>{const i=Nt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Ea(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ya.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Rd(n,e){return $e(n,"POST","/v2/accounts:revokeToken",Ge(n,e))}/**
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
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return x(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Sd(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Jt;return i&&(x(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(x(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return Ce("not implemented")}}/**
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
 */function Le(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Qe{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=bs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Id(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new wa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Yt(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vd(this,e)}reload(){return Cd(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yt(this,gd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,h;const u=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,d=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=t.createdAt)!==null&&c!==void 0?c:void 0,R=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:T,isAnonymous:S,providerData:w,stsTokenManager:E}=t;x(M&&E,e,"internal-error");const f=Jt.fromJSON(this.name,E);x(typeof M=="string",e,"internal-error"),Le(u,e.name),Le(g,e.name),x(typeof T=="boolean",e,"internal-error"),x(typeof S=="boolean",e,"internal-error"),Le(p,e.name),Le(d,e.name),Le(m,e.name),Le(y,e.name),Le(I,e.name),Le(R,e.name);const _=new Qe({uid:M,auth:e,email:g,emailVerified:T,displayName:u,isAnonymous:S,photoURL:d,phoneNumber:p,tenantId:m,stsTokenManager:f,createdAt:I,lastLoginAt:R});return w&&Array.isArray(w)&&(_.providerData=w.map(N=>Object.assign({},N))),y&&(_._redirectEventId=y),_}static async _fromIdTokenResponse(e,t,i=!1){const s=new Jt;s.updateFromServerResponse(t);const r=new Qe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Fn(r),r}}/**
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
 */const Lr=new Map;function be(n){Ne(n instanceof Function,"Expected a class definition");let e=Lr.get(n);return e?(Ne(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Lr.set(n,e),e)}/**
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
 */class Ia{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ia.type="NONE";const Dr=Ia;/**
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
 */function Rn(n,e,t){return`firebase:${n}:${e}:${t}`}class pt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Rn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Rn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pt(be(Dr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||be(Dr);const o=Rn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){const u=Qe._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new pt(r,e,i))}}/**
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
 */function Mr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ta(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ca(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ra(e))return"Blackberry";if(Na(e))return"Webos";if(Ns(e))return"Safari";if((e.includes("chrome/")||ba(e))&&!e.includes("edge/"))return"Chrome";if(Sa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ca(n=oe()){return/firefox\//i.test(n)}function Ns(n=oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ba(n=oe()){return/crios\//i.test(n)}function Ta(n=oe()){return/iemobile/i.test(n)}function Sa(n=oe()){return/android/i.test(n)}function Ra(n=oe()){return/blackberry/i.test(n)}function Na(n=oe()){return/webos/i.test(n)}function ai(n=oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Nd(n=oe()){var e;return ai(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ad(){return Uu()&&document.documentMode===10}function Aa(n=oe()){return ai(n)||Sa(n)||Na(n)||Ra(n)||/windows phone/i.test(n)||Ta(n)}function Pd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pa(n,e=[]){let t;switch(n){case"Browser":t=Mr(oe());break;case"Worker":t=`${Mr(oe())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${i}`}/**
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
 */class Od{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function kd(n,e={}){return $e(n,"GET","/v2/passwordPolicy",Ge(n,e))}/**
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
 */const xd=6;class Ld{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:xd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Dd{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new Od(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ga,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ud()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?de(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kd(this),t=new Ld(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ln("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Rd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&od(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function lt(n){return de(n)}class Fr{constructor(e){this.auth=e,this.observer=null,this.addObserver=$u(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Md(n){li=n}function Oa(n){return li.loadJS(n)}function Fd(){return li.recaptchaEnterpriseScript}function Ud(){return li.gapiScript}function Bd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Hd="recaptcha-enterprise",Wd="NO_RECAPTCHA";class Vd{constructor(e){this.type=Hd,this.auth=lt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{md(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new _d(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;xr(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Wd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&xr(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Fd();l.length!==0&&(l+=a),Oa(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ur(n,e,t,i=!1){const s=new Vd(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ji(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ur(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ur(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function jd(n,e){const t=Cs(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Ln(r,e??{}))return s;ye(s,"already-initialized")}return t.initialize({options:e})}function zd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(be);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qd(n,e,t){const i=lt(n);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=ka(e),{host:o,port:a}=Gd(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||$d()}function ka(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gd(n){const e=ka(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Br(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Br(o)}}}function Br(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $d(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class As{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,t){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}async function Kd(n,e){return $e(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Yd(n,e){return un(n,"POST","/v1/accounts:signInWithPassword",Ge(n,e))}/**
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
 */async function Jd(n,e){return un(n,"POST","/v1/accounts:signInWithEmailLink",Ge(n,e))}async function Xd(n,e){return un(n,"POST","/v1/accounts:signInWithEmailLink",Ge(n,e))}/**
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
 */class Xt extends As{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Xt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Xt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,t,"signInWithPassword",Yd);case"emailLink":return Jd(e,{email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,i,"signUpPassword",Kd);case"emailLink":return Xd(e,{idToken:t,email:this._email,oobCode:this._password});default:ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _t(n,e){return un(n,"POST","/v1/accounts:signInWithIdp",Ge(n,e))}/**
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
 */const Qd="http://localhost";class nt extends As{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=bs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new nt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _t(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_t(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_t(e,t)}buildRequest(){const e={requestUri:Qd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Nt(t)}return e}}/**
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
 */function Zd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ef(n){const e=Bt(Ht(n)).link,t=e?Bt(Ht(e)).deep_link_id:null,i=Bt(Ht(n)).deep_link_id;return(i?Bt(Ht(i)).link:null)||i||t||e||n}class Ps{constructor(e){var t,i,s,r,o,a;const l=Bt(Ht(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,h=(i=l.oobCode)!==null&&i!==void 0?i:null,u=Zd((s=l.mode)!==null&&s!==void 0?s:null);x(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=ef(e);try{return new Ps(t)}catch{return null}}}/**
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
 */class Pt{constructor(){this.providerId=Pt.PROVIDER_ID}static credential(e,t){return Xt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ps.parseLink(t);return x(i,"argument-error"),Xt._fromEmailAndCode(e,i.code,i.tenantId)}}Pt.PROVIDER_ID="password";Pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hn extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class De extends hn{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
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
 */class Me extends hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Me.credential(t,i)}catch{return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
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
 */class Fe extends hn{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.GITHUB_SIGN_IN_METHOD="github.com";Fe.PROVIDER_ID="github.com";/**
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
 */class Ue extends hn{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ue.credential(t,i)}catch{return null}}}Ue.TWITTER_SIGN_IN_METHOD="twitter.com";Ue.PROVIDER_ID="twitter.com";/**
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
 */async function tf(n,e){return un(n,"POST","/v1/accounts:signUp",Ge(n,e))}/**
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
 */class it{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Qe._fromIdTokenResponse(e,i,s),o=Hr(i);return new it({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Hr(i);return new it({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Hr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Un extends qe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Un.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Un(e,t,i,s)}}function La(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Un._fromErrorAndOperation(n,r,e,i):r})}async function nf(n,e,t=!1){const i=await Yt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return it._forOperation(n,"link",i)}/**
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
 */async function sf(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Yt(n,La(i,s,e,n),t);x(r.idToken,i,"internal-error");const o=Rs(r.idToken);x(o,i,"internal-error");const{sub:a}=o;return x(n.uid===a,i,"user-mismatch"),it._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ye(i,"user-mismatch"),r}}/**
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
 */async function Da(n,e,t=!1){const i="signIn",s=await La(n,i,e),r=await it._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function rf(n,e){return Da(lt(n),e)}/**
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
 */async function Ma(n){const e=lt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ag(n,e,t){const i=lt(n),o=await Ji(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tf).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ma(n),l}),a=await it._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Pg(n,e,t){return rf(de(n),Pt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ma(n),i})}function of(n,e,t,i){return de(n).onIdTokenChanged(e,t,i)}function af(n,e,t){return de(n).beforeAuthStateChanged(e,t)}const Bn="__sak";/**
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
 */class Fa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bn,"1"),this.storage.removeItem(Bn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lf(){const n=oe();return Ns(n)||ai(n)}const cf=1e3,uf=10;class Ua extends Fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lf()&&Pd(),this.fallbackToPolling=Aa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Ad()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uf):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ua.type="LOCAL";const hf=Ua;/**
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
 */class Ba extends Fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ba.type="SESSION";const Ha=Ba;/**
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
 */function df(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ci{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ci(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await df(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ci.receivers=[];/**
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
 */function Os(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ff{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Os("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(u){const g=u;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(g.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function we(){return window}function pf(n){we().location.href=n}/**
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
 */function Wa(){return typeof we().WorkerGlobalScope<"u"&&typeof we().importScripts=="function"}async function _f(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function gf(){return Wa()?self:null}/**
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
 */const Va="firebaseLocalStorageDb",yf=1,Hn="firebaseLocalStorage",ja="fbase_key";class dn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ui(n,e){return n.transaction([Hn],e?"readwrite":"readonly").objectStore(Hn)}function vf(){const n=indexedDB.deleteDatabase(Va);return new dn(n).toPromise()}function Xi(){const n=indexedDB.open(Va,yf);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Hn,{keyPath:ja})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Hn)?e(i):(i.close(),await vf(),e(await Xi()))})})}async function Wr(n,e,t){const i=ui(n,!0).put({[ja]:e,value:t});return new dn(i).toPromise()}async function Ef(n,e){const t=ui(n,!1).get(e),i=await new dn(t).toPromise();return i===void 0?null:i.value}function Vr(n,e){const t=ui(n,!0).delete(e);return new dn(t).toPromise()}const wf=800,If=3;class za{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>If)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ci._getInstance(gf()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _f(),!this.activeServiceWorker)return;this.sender=new ff(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await Wr(e,Bn,"1"),await Vr(e,Bn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Wr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ef(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=ui(s,!1).getAll();return new dn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}za.type="LOCAL";const Cf=za;new cn(3e4,6e4);/**
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
 */function bf(n,e){return e?be(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ks extends As{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _t(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _t(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _t(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tf(n){return Da(n.auth,new ks(n),n.bypassAuthState)}function Sf(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),sf(t,new ks(n),n.bypassAuthState)}async function Rf(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),nf(t,new ks(n),n.bypassAuthState)}/**
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
 */class qa{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tf;case"linkViaPopup":case"linkViaRedirect":return Rf;case"reauthViaPopup":case"reauthViaRedirect":return Sf;default:ye(this.auth,"internal-error")}}resolve(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nf=new cn(2e3,1e4);class dt extends qa{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,dt.currentPopupAction&&dt.currentPopupAction.cancel(),dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Ne(this.filter.length===1,"Popup operations only handle one event");const e=Os();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nf.get())};e()}}dt.currentPopupAction=null;/**
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
 */const Af="pendingRedirect",Nn=new Map;class Pf extends qa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Nn.get(this.auth._key());if(!e){try{const i=await Of(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Nn.set(this.auth._key(),e)}return this.bypassAuthState||Nn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Of(n,e){const t=Lf(e),i=xf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function kf(n,e){Nn.set(n._key(),e)}function xf(n){return be(n._redirectPersistence)}function Lf(n){return Rn(Af,n.config.apiKey,n.name)}async function Df(n,e,t=!1){const i=lt(n),s=bf(i,e),o=await new Pf(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Mf=10*60*1e3;class Ff{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ga(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mf&&this.cachedEventUids.clear(),this.cachedEventUids.has(jr(e))}saveEventToCache(e){this.cachedEventUids.add(jr(e)),this.lastProcessedEventTime=Date.now()}}function jr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ga({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ga(n);default:return!1}}/**
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
 */async function Bf(n,e={}){return $e(n,"GET","/v1/projects",e)}/**
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
 */const Hf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Wf=/^https?/;async function Vf(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Bf(n);for(const t of e)try{if(jf(t))return}catch{}ye(n,"unauthorized-domain")}function jf(n){const e=Yi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Wf.test(t))return!1;if(Hf.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const zf=new cn(3e4,6e4);function zr(){const n=we().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function qf(n){return new Promise((e,t)=>{var i,s,r;function o(){zr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zr(),t(Ee(n,"network-request-failed"))},timeout:zf.get()})}if(!((s=(i=we().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=we().gapi)===null||r===void 0)&&r.load)o();else{const a=Bd("iframefcb");return we()[a]=()=>{gapi.load?o():t(Ee(n,"network-request-failed"))},Oa(`${Ud()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw An=null,e})}let An=null;function Gf(n){return An=An||qf(n),An}/**
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
 */const $f=new cn(5e3,15e3),Kf="__/auth/iframe",Yf="emulator/auth/iframe",Jf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qf(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ss(e,Yf):`https://${n.config.authDomain}/${Kf}`,i={apiKey:e.apiKey,appName:n.name,v:At},s=Xf.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Nt(i).slice(1)}`}async function Zf(n){const e=await Gf(n),t=we().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:Qf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=Ee(n,"network-request-failed"),a=we().setTimeout(()=>{r(o)},$f.get());function l(){we().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ep={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tp=500,np=600,ip="_blank",sp="http://localhost";class qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rp(n,e,t,i=tp,s=np){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ep),{width:i.toString(),height:s.toString(),top:r,left:o}),c=oe().toLowerCase();t&&(a=ba(c)?ip:t),Ca(c)&&(e=e||sp,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[p,d])=>`${g}${p}=${d},`,"");if(Nd(c)&&a!=="_self")return op(e||"",a),new qr(null);const u=window.open(e||"",a,h);x(u,n,"popup-blocked");try{u.focus()}catch{}return new qr(u)}function op(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const ap="__/auth/handler",lp="emulator/auth/handler",cp=encodeURIComponent("fac");async function Gr(n,e,t,i,s,r){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:At,eventId:s};if(e instanceof xa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(r||{}))o[h]=u}if(e instanceof hn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${cp}=${encodeURIComponent(l)}`:"";return`${up(n)}?${Nt(a).slice(1)}${c}`}function up({config:n}){return n.emulator?Ss(n,lp):`https://${n.authDomain}/${ap}`}/**
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
 */const Pi="webStorageSupport";class hp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ha,this._completeRedirectFn=Df,this._overrideRedirectResult=kf}async _openPopup(e,t,i,s){var r;Ne((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Gr(e,t,i,Yi(),s);return rp(e,o,Os())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Gr(e,t,i,Yi(),s);return pf(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ne(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Zf(e),i=new Ff(e);return t.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pi,{type:Pi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Pi];o!==void 0&&t(!!o),ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vf(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Aa()||Ns()||ai()}}const dp=hp;var $r="@firebase/auth",Kr="1.6.1";/**
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
 */class fp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _p(n){It(new et("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pa(n)},c=new Dd(i,s,r,l);return zd(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),It(new et("auth-internal",e=>{const t=lt(e.getProvider("auth").getImmediate());return(i=>new fp(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),We($r,Kr,pp(n)),We($r,Kr,"esm2017")}/**
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
 */const mp=5*60,gp=aa("authIdTokenMaxAge")||mp;let Yr=null;const yp=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>gp)return;const s=t==null?void 0:t.token;Yr!==s&&(Yr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Og(n=fa()){const e=Cs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=jd(n,{popupRedirectResolver:dp,persistence:[Cf,hf,Ha]}),i=aa("authTokenSyncURL");if(i){const r=yp(i);af(t,r,()=>r(t.currentUser)),of(t,o=>r(o))}const s=ra("auth");return s&&qd(t,`http://${s}`),t}function vp(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Md({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ee("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",vp().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_p("Browser");const Jr="@firebase/database",Xr="1.0.3";/**
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
 */let $a="";function Ep(n){$a=n}/**
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
 */class wp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$t(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ip{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Oe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ka=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wp(e)}}catch{}return new Ip},Je=Ka("localStorage"),Qi=Ka("sessionStorage");/**
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
 */const mt=new ws("@firebase/database"),Cp=function(){let n=1;return function(){return n++}}(),Ya=function(n){const e=Ju(n),t=new Gu;t.update(e);const i=t.digest();return gs.encodeByteArray(i)},fn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=fn.apply(null,i):typeof i=="object"?e+=ie(i):e+=i,e+=" "}return e};let Ze=null,Qr=!0;const bp=function(n,e){C(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(mt.logLevel=q.VERBOSE,Ze=mt.log.bind(mt),e&&Qi.set("logging_enabled",!0)):typeof n=="function"?Ze=n:(Ze=null,Qi.remove("logging_enabled"))},re=function(...n){if(Qr===!0&&(Qr=!1,Ze===null&&Qi.get("logging_enabled")===!0&&bp(!0)),Ze){const e=fn.apply(null,n);Ze(e)}},pn=function(n){return function(...e){re(n,...e)}},Zi=function(...n){const e="FIREBASE INTERNAL ERROR: "+fn(...n);mt.error(e)},Ae=function(...n){const e=`FIREBASE FATAL ERROR: ${fn(...n)}`;throw mt.error(e),new Error(e)},ce=function(...n){const e="FIREBASE WARNING: "+fn(...n);mt.warn(e)},Tp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ce("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ja=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Sp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ct="[MIN_NAME]",st="[MAX_NAME]",Ot=function(n,e){if(n===e)return 0;if(n===Ct||e===st)return-1;if(e===Ct||n===st)return 1;{const t=Zr(n),i=Zr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Rp=function(n,e){return n===e?0:n<e?-1:1},Dt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ie(e))},xs=function(n){if(typeof n!="object"||n===null)return ie(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ie(e[i]),t+=":",t+=xs(n[e[i]]);return t+="}",t},Xa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ue(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Qa=function(n){C(!Ja(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let g=parseInt(h.substr(l,8),2).toString(16);g.length===1&&(g="0"+g),u=u+g}return u.toLowerCase()},Np=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ap=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Op=new RegExp("^-?(0*)\\d{1,10}$"),kp=-2147483648,xp=2147483647,Zr=function(n){if(Op.test(n)){const e=Number(n);if(e>=kp&&e<=xp)return e}return null},kt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ce("Exception was thrown by user callback.",t),e},Math.floor(0))}},Lp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Dp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ce(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ce(e)}}class gt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gt.OWNER="owner";/**
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
 */const Ls="5",Za="v",el="s",tl="r",nl="f",il=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,sl="ls",rl="p",es="ac",ol="websocket",al="long_polling";/**
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
 */class ll{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Je.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Je.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function cl(n,e,t){C(typeof e=="string","typeof type must == string"),C(typeof t=="object","typeof params must == object");let i;if(e===ol)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===al)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fp(n)&&(t.ns=n.namespace);const s=[];return ue(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Up{constructor(){this.counters_={}}incrementCounter(e,t=1){Oe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Au(this.counters_)}}/**
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
 */const Oi={},ki={};function Ds(n){const e=n.toString();return Oi[e]||(Oi[e]=new Up),Oi[e]}function Bp(n,e){const t=n.toString();return ki[t]||(ki[t]=e()),ki[t]}/**
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
 */class Hp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&kt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const eo="start",Wp="close",Vp="pLPCommand",jp="pRTLPCB",ul="id",hl="pw",dl="ser",zp="cb",qp="seg",Gp="ts",$p="d",Kp="dframe",fl=1870,pl=30,Yp=fl-pl,Jp=25e3,Xp=3e4;class ft{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pn(e),this.stats_=Ds(t),this.urlFn=l=>(this.appCheckToken&&(l[es]=this.appCheckToken),cl(t,al,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Hp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xp)),Sp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ms((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===eo)this.id=a,this.password=l;else if(o===Wp)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[eo]="t",i[dl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[zp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Za]=Ls,this.transportSessionId&&(i[el]=this.transportSessionId),this.lastSessionId&&(i[sl]=this.lastSessionId),this.applicationId&&(i[rl]=this.applicationId),this.appCheckToken&&(i[es]=this.appCheckToken),typeof location<"u"&&location.hostname&&il.test(location.hostname)&&(i[tl]=nl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ft.forceAllow_=!0}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){return ft.forceAllow_?!0:!ft.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Np()&&!Ap()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ia(t),s=Xa(i,Yp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Kp]="t",i[ul]=e,i[hl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ms{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Cp(),window[Vp+this.uniqueCallbackIdentifier]=e,window[jp+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ms.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){re("frame writing exception"),a.stack&&re(a.stack),re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||re("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ul]=this.myID,e[hl]=this.myPW,e[dl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pl+i.length<=fl;){const o=this.pendingSegs.shift();i=i+"&"+qp+s+"="+o.seg+"&"+Gp+s+"="+o.ts+"&"+$p+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Jp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Qp=16384,Zp=45e3;let Wn=null;typeof MozWebSocket<"u"?Wn=MozWebSocket:typeof WebSocket<"u"&&(Wn=WebSocket);class pe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pn(this.connId),this.stats_=Ds(t),this.connURL=pe.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Za]=Ls,typeof location<"u"&&location.hostname&&il.test(location.hostname)&&(o[tl]=nl),t&&(o[el]=t),i&&(o[sl]=i),s&&(o[es]=s),r&&(o[rl]=r),cl(e,ol,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Je.set("previous_websocket_failure",!0);try{let i;ca(),this.mySock=new Wn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wn!==null&&!pe.forceDisallow_}static previouslyFailed(){return Je.isInMemoryStorage||Je.get("previous_websocket_failure")===!0}markConnectionHealthy(){Je.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=$t(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xa(t,Qp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Zp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
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
 */class Qt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ft,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pe&&pe.isAvailable();let i=t&&!pe.previouslyFailed();if(e.webSocketOnly&&(t||ce("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{const s=this.transports_=[];for(const r of Qt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qt.globalTransportInitialized_=!1;/**
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
 */const e_=6e4,t_=5e3,n_=10*1024,i_=100*1024,xi="t",to="d",s_="s",no="r",r_="e",io="o",so="a",ro="n",oo="p",o_="h";class a_{constructor(e,t,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pn("c:"+this.id+":"),this.transportManager_=new Qt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Vt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>i_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>n_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(xi in e){const t=e[xi];t===so?this.upgradeIfSecondaryHealthy_():t===no?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===io&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Dt("t",e),i=Dt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:oo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:so,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ro,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Dt("t",e),i=Dt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Dt(xi,e);if(to in e){const i=e[to];if(t===o_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===ro){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===s_?this.onConnectionShutdown_(i):t===no?this.onReset_(i):t===r_?Zi("Server Error: "+i):t===io?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ls!==i&&ce("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Vt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(e_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(t_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:oo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class _l{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class ml{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){C(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Vn extends ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vn}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ao=32,lo=768;class G{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function j(){return new G("")}function F(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function je(n){return n.pieces_.length-n.pieceNum_}function $(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new G(n.pieces_,e)}function gl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function l_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function vl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new G(e,0)}function ee(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof G)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new G(t,0)}function B(n){return n.pieceNum_>=n.pieces_.length}function ae(n,e){const t=F(n),i=F(e);if(t===null)return e;if(t===i)return ae($(n),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Fs(n,e){if(je(n)!==je(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function _e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(je(n)>je(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class c_{constructor(e,t){this.errorPrefix_=t,this.parts_=yl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=oi(this.parts_[i]);El(this)}}function u_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=oi(e),El(n)}function h_(n){const e=n.parts_.pop();n.byteLength_-=oi(e),n.parts_.length>0&&(n.byteLength_-=1)}function El(n){if(n.byteLength_>lo)throw new Error(n.errorPrefix_+"has a key path longer than "+lo+" bytes ("+n.byteLength_+").");if(n.parts_.length>ao)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ao+") or object contains a cycle "+Ye(n))}function Ye(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Us extends ml{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Us}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Mt=1e3,d_=60*5*1e3,co=30*1e3,f_=1.3,p_=3e4,__="server_kill",uo=3;class Re extends _l{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Re.nextPersistentConnectionId_++,this.log_=pn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mt,this.maxReconnectDelay_=d_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ca())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Us.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(ie(r)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new ri,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Re.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Oe(e,"w")){const i=wt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ce(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=co)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zi("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>p_&&(this.reconnectDelay_=Mt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*f_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){C(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?re("getToken() completed but was canceled"):(re("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=g&&g.token,a=new a_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{ce(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(__)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ce(u),l())}}}interrupt(e){re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ji(this.interruptReasons_)&&(this.reconnectDelay_=Mt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>xs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new G(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){re("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uo&&(this.reconnectDelay_=co,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){re("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+$a.replace(/\./g,"-")]=1,vs()?e["framework.cordova"]=1:la()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vn.getInstance().currentlyOnline();return ji(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
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
 */class U{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new U(e,t)}}/**
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
 */class hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new U(Ct,e),s=new U(Ct,t);return this.compare(i,s)!==0}minPost(){return U.MIN}}/**
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
 */let wn;class wl extends hi{static get __EMPTY_NODE(){return wn}static set __EMPTY_NODE(e){wn=e}compare(e,t){return Ot(e.name,t.name)}isDefinedOn(e){throw Rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return U.MIN}maxPost(){return new U(st,wn)}makePost(e,t){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,wn)}toString(){return".key"}}const yt=new wl;/**
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
 */class In{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ne.RED,this.left=s??le.EMPTY_NODE,this.right=r??le.EMPTY_NODE}copy(e,t,i,s,r){return new ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return le.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ne.RED=!0;ne.BLACK=!1;class m_{copy(e,t,i,s,r){return this}insert(e,t,i){return new ne(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class le{constructor(e,t=le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ne.BLACK,null,null))}remove(e){return new le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ne.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new In(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new In(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new In(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new In(this.root_,null,this.comparator_,!0,e)}}le.EMPTY_NODE=new m_;/**
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
 */function g_(n,e){return Ot(n.name,e.name)}function Bs(n,e){return Ot(n,e)}/**
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
 */let ts;function y_(n){ts=n}const Il=function(n){return typeof n=="number"?"number:"+Qa(n):"string:"+n},Cl=function(n){if(n.isLeafNode()){const e=n.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Oe(e,".sv"),"Priority must be a string or number.")}else C(n===ts||n.isEmpty(),"priority of unexpected type.");C(n===ts||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ho;class te{constructor(e,t=te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cl(this.priorityNode_)}static set __childrenNodeConstructor(e){ho=e}static get __childrenNodeConstructor(){return ho}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return B(e)?this:F(e)===".priority"?this.priorityNode_:te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=F(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(C(i!==".priority"||je(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,te.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Il(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Qa(this.value_):e+=this.value_,this.lazyHash_=Ya(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof te.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=te.VALUE_TYPE_ORDER.indexOf(t),r=te.VALUE_TYPE_ORDER.indexOf(i);return C(s>=0,"Unknown leaf type: "+t),C(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let bl,Tl;function v_(n){bl=n}function E_(n){Tl=n}class w_ extends hi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Ot(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return U.MIN}maxPost(){return new U(st,new te("[PRIORITY-POST]",Tl))}makePost(e,t){const i=bl(e);return new U(t,new te("[PRIORITY-POST]",i))}toString(){return".priority"}}const X=new w_;/**
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
 */const I_=Math.log(2);class C_{constructor(e){const t=r=>parseInt(Math.log(r)/I_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jn=function(n,e,t,i){n.sort(e);const s=function(l,c){const h=c-l;let u,g;if(h===0)return null;if(h===1)return u=n[l],g=t?t(u):u,new ne(g,u.node,ne.BLACK,null,null);{const p=parseInt(h/2,10)+l,d=s(l,p),m=s(p+1,c);return u=n[p],g=t?t(u):u,new ne(g,u.node,ne.BLACK,d,m)}},r=function(l){let c=null,h=null,u=n.length;const g=function(d,m){const y=u-d,I=u;u-=d;const R=s(y+1,I),M=n[y],T=t?t(M):M;p(new ne(T,M.node,m,null,R))},p=function(d){c?(c.left=d,c=d):(h=d,c=d)};for(let d=0;d<l.count;++d){const m=l.nextBitIsOne(),y=Math.pow(2,l.count-(d+1));m?g(y,ne.BLACK):(g(y,ne.BLACK),g(y,ne.RED))}return h},o=new C_(n.length),a=r(o);return new le(i||e,a)};/**
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
 */let Li;const ht={};class Te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return C(ht&&X,"ChildrenNode.ts has not been loaded"),Li=Li||new Te({".priority":ht},{".priority":X}),Li}get(e){const t=wt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof le?t:null}hasIndex(e){return Oe(this.indexSet_,e.toString())}addIndex(e,t){C(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(U.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=jn(i,e.getCompare()):a=ht;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Te(h,c)}addToIndexes(e,t){const i=xn(this.indexes_,(s,r)=>{const o=wt(this.indexSet_,r);if(C(o,"Missing index implementation for "+r),s===ht)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),jn(a,o.getCompare())}else return ht;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new Te(i,this.indexSet_)}removeFromIndexes(e,t){const i=xn(this.indexes_,s=>{if(s===ht)return s;{const r=t.get(e.name);return r?s.remove(new U(e.name,r)):s}});return new Te(i,this.indexSet_)}}/**
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
 */let Ft;class O{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Cl(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ft||(Ft=new O(new le(Bs),null,Te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ft}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ft:t}}getChild(e){const t=F(e);return t===null?this:this.getImmediateChild(t).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(C(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new U(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ft:this.priorityNode_;return new O(s,o,r)}}updateChild(e,t){const i=F(e);if(i===null)return t;{C(F(e)!==".priority"||je(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild($(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(X,(o,a)=>{t[o]=a.val(e),i++,r&&O.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Il(this.getPriority().val())+":"),this.forEachChild(X,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ya(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new U(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new U(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new U(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_n?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(X),s=t.getIterator(X);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class b_ extends O{constructor(){super(new le(Bs),O.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const _n=new b_;Object.defineProperties(U,{MIN:{value:new U(Ct,O.EMPTY_NODE)},MAX:{value:new U(st,_n)}});wl.__EMPTY_NODE=O.EMPTY_NODE;te.__childrenNodeConstructor=O;y_(_n);E_(_n);/**
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
 */const T_=!0;function se(n,e=null){if(n===null)return O.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new te(t,se(e))}if(!(n instanceof Array)&&T_){const t=[];let i=!1;if(ue(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=se(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new U(o,l)))}}),t.length===0)return O.EMPTY_NODE;const r=jn(t,g_,o=>o.name,Bs);if(i){const o=jn(t,X.getCompare());return new O(r,se(e),new Te({".priority":o},{".priority":X}))}else return new O(r,se(e),Te.Default)}else{let t=O.EMPTY_NODE;return ue(n,(i,s)=>{if(Oe(n,i)&&i.substring(0,1)!=="."){const r=se(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(se(e))}}v_(se);/**
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
 */class S_ extends hi{constructor(e){super(),this.indexPath_=e,C(!B(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Ot(e.name,t.name):r}makePost(e,t){const i=se(e),s=O.EMPTY_NODE.updateChild(this.indexPath_,i);return new U(t,s)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,_n);return new U(st,e)}toString(){return yl(this.indexPath_,0).join("/")}}/**
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
 */class R_ extends hi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Ot(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,t){const i=se(e);return new U(t,i)}toString(){return".value"}}const N_=new R_;/**
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
 */function Sl(n){return{type:"value",snapshotNode:n}}function bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Zt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function en(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function A_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Hs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Zt(t,a)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bt(t,i)):o.trackChildChange(en(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(X,(s,r)=>{t.hasChild(s)||i.trackChildChange(Zt(s,r))}),t.isLeafNode()||t.forEachChild(X,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(en(s,r,o))}else i.trackChildChange(bt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class tn{constructor(e){this.indexedFilter_=new Hs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=tn.getStartPost_(e),this.endPost_=tn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new U(t,i))||(i=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=O.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(O.EMPTY_NODE);const r=this;return t.forEachChild(X,(o,a)=>{r.matches(new U(o,a))||(s=s.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class P_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new tn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new U(t,i))||(i=O.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=O.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(O.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(g,p)=>u(p,g)}else o=this.index_.getCompare();const a=e;C(a.numChildren()===this.limit_,"");const l=new U(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===t||a.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const p=g==null?1:o(g,l);if(h&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(en(t,i,u)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Zt(t,u));const m=a.updateImmediateChild(t,O.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(r!=null&&r.trackChildChange(bt(g.name,g.node)),m.updateImmediateChild(g.name,g.node)):m}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Zt(c.name,c.node)),r.trackChildChange(bt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
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
 */class Ws{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ct}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:st}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Ws;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function O_(n){return n.loadsAllData()?new Hs(n.getIndex()):n.hasLimit()?new P_(n):new tn(n)}function fo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===X?t="$priority":n.index_===N_?t="$value":n.index_===yt?t="$key":(C(n.index_ instanceof S_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ie(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ie(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ie(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ie(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ie(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function po(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==X&&(e.i=n.index_.toString()),e}/**
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
 */class zn extends _l{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=pn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=zn.getListenId_(e,i),a={};this.listens_[o]=a;const l=fo(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),wt(this.listens_,o)===a){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,t){const i=zn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=fo(e._queryParams),i=e._path.toString(),s=new ri;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$t(a.responseText)}catch{ce("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ce("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class k_{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function qn(){return{value:null,children:new Map}}function Rl(n,e,t){if(B(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=F(e);n.children.has(i)||n.children.set(i,qn());const s=n.children.get(i);e=$(e),Rl(s,e,t)}}function ns(n,e,t){n.value!==null?t(e,n.value):x_(n,(i,s)=>{const r=new G(e.toString()+"/"+i);ns(s,r,t)})}function x_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class L_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ue(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const _o=10*1e3,D_=30*1e3,M_=5*60*1e3;class F_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new L_(e);const i=_o+(D_-_o)*Math.random();Vt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ue(e,(s,r)=>{r>0&&Oe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Vt(this.reportStats_.bind(this),Math.floor(Math.random()*2*M_))}}/**
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
 */var me;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(me||(me={}));function Nl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function js(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Gn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=me.ACK_USER_WRITE,this.source=Nl()}operationForChild(e){if(B(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new G(e));return new Gn(j(),t,this.revert)}}else return C(F(this.path)===e,"operationForChild called for unrelated child."),new Gn($(this.path),this.affectedTree,this.revert)}}/**
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
 */class nn{constructor(e,t){this.source=e,this.path=t,this.type=me.LISTEN_COMPLETE}operationForChild(e){return B(this.path)?new nn(this.source,j()):new nn(this.source,$(this.path))}}/**
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
 */class rt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=me.OVERWRITE}operationForChild(e){return B(this.path)?new rt(this.source,j(),this.snap.getImmediateChild(e)):new rt(this.source,$(this.path),this.snap)}}/**
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
 */class sn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=me.MERGE}operationForChild(e){if(B(this.path)){const t=this.children.subtree(new G(e));return t.isEmpty()?null:t.value?new rt(this.source,j(),t.value):new sn(this.source,j(),t)}else return C(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new sn(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ot{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(B(e))return this.isFullyInitialized()&&!this.filtered_;const t=F(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class U_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function B_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(A_(o.childName,o.snapshotNode))}),Ut(n,s,"child_removed",e,i,t),Ut(n,s,"child_added",e,i,t),Ut(n,s,"child_moved",r,i,t),Ut(n,s,"child_changed",e,i,t),Ut(n,s,"value",e,i,t),s}function Ut(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>W_(n,a,l)),o.forEach(a=>{const l=H_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function H_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function W_(n,e,t){if(e.childName==null||t.childName==null)throw Rt("Should only compare child_ events.");const i=new U(e.childName,e.snapshotNode),s=new U(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function di(n,e){return{eventCache:n,serverCache:e}}function jt(n,e,t,i){return di(new ot(e,t,i),n.serverCache)}function Al(n,e,t,i){return di(n.eventCache,new ot(e,t,i))}function is(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function at(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Di;const V_=()=>(Di||(Di=new le(Rp)),Di);class Y{constructor(e,t=V_()){this.value=e,this.children=t}static fromObject(e){let t=new Y(null);return ue(e,(i,s)=>{t=t.set(new G(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:j(),value:this.value};if(B(e))return null;{const i=F(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue($(e),t);return r!=null?{path:ee(new G(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(B(e))return this;{const t=F(e),i=this.children.get(t);return i!==null?i.subtree($(e)):new Y(null)}}set(e,t){if(B(e))return new Y(t,this.children);{const i=F(e),r=(this.children.get(i)||new Y(null)).set($(e),t),o=this.children.insert(i,r);return new Y(this.value,o)}}remove(e){if(B(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const t=F(e),i=this.children.get(t);if(i){const s=i.remove($(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new Y(null):new Y(this.value,r)}else return this}}get(e){if(B(e))return this.value;{const t=F(e),i=this.children.get(t);return i?i.get($(e)):null}}setTree(e,t){if(B(e))return t;{const i=F(e),r=(this.children.get(i)||new Y(null)).setTree($(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new Y(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ee(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,j(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(B(e))return null;{const r=F(e),o=this.children.get(r);return o?o.findOnPath_($(e),ee(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,j(),t)}foreachOnPath_(e,t,i){if(B(e))return this;{this.value&&i(t,this.value);const s=F(e),r=this.children.get(s);return r?r.foreachOnPath_($(e),ee(t,s),i):new Y(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ee(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class ge{constructor(e){this.writeTree_=e}static empty(){return new ge(new Y(null))}}function zt(n,e,t){if(B(e))return new ge(new Y(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=ae(s,e);return r=r.updateChild(o,t),new ge(n.writeTree_.set(s,r))}else{const s=new Y(t),r=n.writeTree_.setTree(e,s);return new ge(r)}}}function mo(n,e,t){let i=n;return ue(t,(s,r)=>{i=zt(i,ee(e,s),r)}),i}function go(n,e){if(B(e))return ge.empty();{const t=n.writeTree_.setTree(e,new Y(null));return new ge(t)}}function ss(n,e){return ct(n,e)!=null}function ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ae(t.path,e)):null}function yo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(X,(i,s)=>{e.push(new U(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new U(i,s.value))}),e}function Ve(n,e){if(B(e))return n;{const t=ct(n,e);return t!=null?new ge(new Y(t)):new ge(n.writeTree_.subtree(e))}}function rs(n){return n.writeTree_.isEmpty()}function Tt(n,e){return Pl(j(),n.writeTree_,e)}function Pl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(C(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Pl(ee(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ee(n,".priority"),i)),t}}/**
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
 */function zs(n,e){return Ll(e,n)}function j_(n,e,t,i,s){C(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=zt(n.visibleWrites,e,t)),n.lastWriteId=i}function z_(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function q_(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);C(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&G_(a,i.path)?s=!1:_e(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return $_(n),!0;if(i.snap)n.visibleWrites=go(n.visibleWrites,i.path);else{const a=i.children;ue(a,l=>{n.visibleWrites=go(n.visibleWrites,ee(i.path,l))})}return!0}else return!1}function G_(n,e){if(n.snap)return _e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&_e(ee(n.path,t),e))return!0;return!1}function $_(n){n.visibleWrites=Ol(n.allWrites,K_,j()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function K_(n){return n.visible}function Ol(n,e,t){let i=ge.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)_e(t,o)?(a=ae(t,o),i=zt(i,a,r.snap)):_e(o,t)&&(a=ae(o,t),i=zt(i,j(),r.snap.getChild(a)));else if(r.children){if(_e(t,o))a=ae(t,o),i=mo(i,a,r.children);else if(_e(o,t))if(a=ae(o,t),B(a))i=mo(i,j(),r.children);else{const l=wt(r.children,F(a));if(l){const c=l.getChild($(a));i=zt(i,j(),c)}}}else throw Rt("WriteRecord should have .snap or .children")}}return i}function kl(n,e,t,i,s){if(!i&&!s){const r=ct(n.visibleWrites,e);if(r!=null)return r;{const o=Ve(n.visibleWrites,e);if(rs(o))return t;if(t==null&&!ss(o,j()))return null;{const a=t||O.EMPTY_NODE;return Tt(o,a)}}}else{const r=Ve(n.visibleWrites,e);if(!s&&rs(r))return t;if(!s&&t==null&&!ss(r,j()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(_e(c.path,e)||_e(e,c.path))},a=Ol(n.allWrites,o,e),l=t||O.EMPTY_NODE;return Tt(a,l)}}}function Y_(n,e,t){let i=O.EMPTY_NODE;const s=ct(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(X,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ve(n.visibleWrites,e);return t.forEachChild(X,(o,a)=>{const l=Tt(Ve(r,new G(o)),a);i=i.updateImmediateChild(o,l)}),yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ve(n.visibleWrites,e);return yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function J_(n,e,t,i,s){C(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ee(e,t);if(ss(n.visibleWrites,r))return null;{const o=Ve(n.visibleWrites,r);return rs(o)?s.getChild(t):Tt(o,s.getChild(t))}}function X_(n,e,t,i){const s=ee(e,t),r=ct(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ve(n.visibleWrites,s);return Tt(o,i.getNode().getImmediateChild(t))}else return null}function Q_(n,e){return ct(n.visibleWrites,e)}function Z_(n,e,t,i,s,r,o){let a;const l=Ve(n.visibleWrites,e),c=ct(l,j());if(c!=null)a=c;else if(t!=null)a=Tt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),g=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=g.getNext();for(;p&&h.length<s;)u(p,i)!==0&&h.push(p),p=g.getNext();return h}else return[]}function em(){return{visibleWrites:ge.empty(),allWrites:[],lastWriteId:-1}}function $n(n,e,t,i){return kl(n.writeTree,n.treePath,e,t,i)}function qs(n,e){return Y_(n.writeTree,n.treePath,e)}function vo(n,e,t,i){return J_(n.writeTree,n.treePath,e,t,i)}function Kn(n,e){return Q_(n.writeTree,ee(n.treePath,e))}function tm(n,e,t,i,s,r){return Z_(n.writeTree,n.treePath,e,t,i,s,r)}function Gs(n,e,t){return X_(n.writeTree,n.treePath,e,t)}function xl(n,e){return Ll(ee(n.treePath,e),n.writeTree)}function Ll(n,e){return{treePath:n,writeTree:e}}/**
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
 */class nm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;C(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),C(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,en(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Zt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,bt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,en(i,e.snapshotNode,s.oldSnap));else throw Rt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class im{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Dl=new im;class $s{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:at(this.viewCache_),r=tm(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function sm(n){return{filter:n}}function rm(n,e){C(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function om(n,e,t,i,s){const r=new nm;let o,a;if(t.type===me.OVERWRITE){const c=t;c.source.fromUser?o=os(n,e,c.path,c.snap,i,s,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!B(c.path),o=Yn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===me.MERGE){const c=t;c.source.fromUser?o=lm(n,e,c.path,c.children,i,s,r):(C(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=as(n,e,c.path,c.children,i,s,a,r))}else if(t.type===me.ACK_USER_WRITE){const c=t;c.revert?o=hm(n,e,c.path,i,s,r):o=cm(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===me.LISTEN_COMPLETE)o=um(n,e,t.path,i,r);else throw Rt("Unknown operation type: "+t.type);const l=r.getChanges();return am(e,o,l),{viewCache:o,changes:l}}function am(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=is(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Sl(is(e)))}}function Ml(n,e,t,i,s,r){const o=e.eventCache;if(Kn(i,t)!=null)return e;{let a,l;if(B(t))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=at(e),h=c instanceof O?c:O.EMPTY_NODE,u=qs(i,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=$n(i,at(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=F(t);if(c===".priority"){C(je(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=vo(i,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=$(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const g=vo(i,t,o.getNode(),l);g!=null?u=o.getNode().getImmediateChild(c).updateChild(h,g):u=o.getNode().getImmediateChild(c)}else u=Gs(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,s,r):a=o.getNode()}}return jt(e,a,o.isFullyInitialized()||B(t),n.filter.filtersNodes())}}function Yn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(B(t))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=F(t);if(!l.isCompleteForPath(t)&&je(t)>1)return e;const d=$(t),y=l.getNode().getImmediateChild(p).updateChild(d,i);p===".priority"?c=h.updatePriority(l.getNode(),y):c=h.updateChild(l.getNode(),p,y,d,Dl,null)}const u=Al(e,c,l.isFullyInitialized()||B(t),h.filtersNodes()),g=new $s(s,u,r);return Ml(n,u,t,s,g,a)}function os(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const h=new $s(s,e,r);if(B(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=jt(e,c,!0,n.filter.filtersNodes());else{const u=F(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=jt(e,c,a.isFullyInitialized(),a.isFiltered());else{const g=$(t),p=a.getNode().getImmediateChild(u);let d;if(B(g))d=i;else{const m=h.getCompleteChild(u);m!=null?gl(g)===".priority"&&m.getChild(vl(g)).isEmpty()?d=m:d=m.updateChild(g,i):d=O.EMPTY_NODE}if(p.equals(d))l=e;else{const m=n.filter.updateChild(a.getNode(),u,d,g,h,o);l=jt(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Eo(n,e){return n.eventCache.isCompleteForChild(e)}function lm(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=ee(t,l);Eo(e,F(h))&&(a=os(n,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=ee(t,l);Eo(e,F(h))||(a=os(n,a,h,c,s,r,o))}),a}function wo(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function as(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;B(t)?c=i:c=new Y(null).setTree(t,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,g)=>{if(h.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),d=wo(n,p,g);l=Yn(n,l,new G(u),d,s,r,o,a)}}),c.children.inorderTraversal((u,g)=>{const p=!e.serverCache.isCompleteForChild(u)&&g.value===null;if(!h.hasChild(u)&&!p){const d=e.serverCache.getNode().getImmediateChild(u),m=wo(n,d,g);l=Yn(n,l,new G(u),m,s,r,o,a)}}),l}function cm(n,e,t,i,s,r,o){if(Kn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(B(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Yn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(B(t)){let c=new Y(null);return l.getNode().forEachChild(yt,(h,u)=>{c=c.set(new G(h),u)}),as(n,e,t,c,s,r,a,o)}else return e}else{let c=new Y(null);return i.foreach((h,u)=>{const g=ee(t,h);l.isCompleteForPath(g)&&(c=c.set(h,l.getNode().getChild(g)))}),as(n,e,t,c,s,r,a,o)}}function um(n,e,t,i,s){const r=e.serverCache,o=Al(e,r.getNode(),r.isFullyInitialized()||B(t),r.isFiltered());return Ml(n,o,t,i,Dl,s)}function hm(n,e,t,i,s,r){let o;if(Kn(i,t)!=null)return e;{const a=new $s(i,e,s),l=e.eventCache.getNode();let c;if(B(t)||F(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=$n(i,at(e));else{const u=e.serverCache.getNode();C(u instanceof O,"serverChildren would be complete if leaf node"),h=qs(i,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=F(t);let u=Gs(i,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,$(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,O.EMPTY_NODE,$(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$n(i,at(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Kn(i,j())!=null,jt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class dm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Hs(i.getIndex()),r=O_(i);this.processor_=sm(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(O.EMPTY_NODE,a.getNode(),null),h=new ot(l,o.isFullyInitialized(),s.filtersNodes()),u=new ot(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=di(u,h),this.eventGenerator_=new U_(this.query_)}get query(){return this.query_}}function fm(n){return n.viewCache_.serverCache.getNode()}function pm(n,e){const t=at(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!B(e)&&!t.getImmediateChild(F(e)).isEmpty())?t.getChild(e):null}function Io(n){return n.eventRegistrations_.length===0}function _m(n,e){n.eventRegistrations_.push(e)}function Co(n,e,t){const i=[];if(t){C(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function bo(n,e,t,i){e.type===me.MERGE&&e.source.queryId!==null&&(C(at(n.viewCache_),"We should always have a full cache before handling merges"),C(is(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=om(n.processor_,s,e,t,i);return rm(n.processor_,r.viewCache),C(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Fl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function mm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(X,(r,o)=>{i.push(bt(r,o))}),t.isFullyInitialized()&&i.push(Sl(t.getNode())),Fl(n,i,t.getNode(),e)}function Fl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return B_(n.eventGenerator_,e,t,s)}/**
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
 */let Jn;class gm{constructor(){this.views=new Map}}function ym(n){C(!Jn,"__referenceConstructor has already been defined"),Jn=n}function vm(){return C(Jn,"Reference.ts has not been loaded"),Jn}function Em(n){return n.views.size===0}function Ks(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return C(r!=null,"SyncTree gave us an op for an invalid query."),bo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(bo(o,e,t,i));return r}}function wm(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=$n(t,s?i:null),l=!1;a?l=!0:i instanceof O?(a=qs(t,i),l=!1):(a=O.EMPTY_NODE,l=!1);const c=di(new ot(a,l,!1),new ot(i,s,!1));return new dm(e,c)}return o}function Im(n,e,t,i,s,r){const o=wm(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),_m(o,t),mm(o,t)}function Cm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=ze(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Co(c,t,i)),Io(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Co(l,t,i)),Io(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ze(n)&&r.push(new(vm())(e._repo,e._path)),{removed:r,events:o}}function Ul(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function vt(n,e){let t=null;for(const i of n.views.values())t=t||pm(i,e);return t}function Bl(n,e){if(e._queryParams.loadsAllData())return fi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Hl(n,e){return Bl(n,e)!=null}function ze(n){return fi(n)!=null}function fi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xn;function bm(n){C(!Xn,"__referenceConstructor has already been defined"),Xn=n}function Tm(){return C(Xn,"Reference.ts has not been loaded"),Xn}let Sm=1;class To{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=em(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wl(n,e,t,i,s){return j_(n.pendingWriteTree_,e,t,i,s),s?mn(n,new rt(Nl(),e,t)):[]}function Xe(n,e,t=!1){const i=z_(n.pendingWriteTree_,e);if(q_(n.pendingWriteTree_,e)){let r=new Y(null);return i.snap!=null?r=r.set(j(),!0):ue(i.children,o=>{r=r.set(new G(o),!0)}),mn(n,new Gn(i.path,r,t))}else return[]}function pi(n,e,t){return mn(n,new rt(Vs(),e,t))}function Rm(n,e,t){const i=Y.fromObject(t);return mn(n,new sn(Vs(),e,i))}function Nm(n,e){return mn(n,new nn(Vs(),e))}function Am(n,e,t){const i=Js(n,t);if(i){const s=Xs(i),r=s.path,o=s.queryId,a=ae(r,e),l=new nn(js(o),a);return Qs(n,r,l)}else return[]}function ls(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Hl(o,e))){const l=Cm(o,e,t,i);Em(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(g,p)=>ze(p));if(h&&!u){const g=n.syncPointTree_.subtree(r);if(!g.isEmpty()){const p=km(g);for(let d=0;d<p.length;++d){const m=p[d],y=m.query,I=zl(n,m);n.listenProvider_.startListening(qt(y),Qn(n,y),I.hashFn,I.onComplete)}}}!u&&c.length>0&&!i&&(h?n.listenProvider_.stopListening(qt(e),null):c.forEach(g=>{const p=n.queryToTagMap.get(_i(g));n.listenProvider_.stopListening(qt(g),p)}))}xm(n,c)}return a}function Pm(n,e,t,i){const s=Js(n,i);if(s!=null){const r=Xs(s),o=r.path,a=r.queryId,l=ae(o,e),c=new rt(js(a),l,t);return Qs(n,o,c)}else return[]}function Om(n,e,t,i){const s=Js(n,i);if(s){const r=Xs(s),o=r.path,a=r.queryId,l=ae(o,e),c=Y.fromObject(t),h=new sn(js(a),l,c);return Qs(n,o,h)}else return[]}function So(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(g,p)=>{const d=ae(g,s);r=r||vt(p,d),o=o||ze(p)});let a=n.syncPointTree_.get(s);a?(o=o||ze(a),r=r||vt(a,j())):(a=new gm,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=O.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,d)=>{const m=vt(d,j());m&&(r=r.updateImmediateChild(p,m))}));const c=Hl(a,e);if(!c&&!e._queryParams.loadsAllData()){const g=_i(e);C(!n.queryToTagMap.has(g),"View does not exist, but we have a tag");const p=Lm();n.queryToTagMap.set(g,p),n.tagToQueryMap.set(p,g)}const h=zs(n.pendingWriteTree_,s);let u=Im(a,e,t,h,r,l);if(!c&&!o&&!i){const g=Bl(a,e);u=u.concat(Dm(n,e,g))}return u}function Ys(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=ae(o,e),c=vt(a,l);if(c)return c});return kl(s,e,r,t,!0)}function mn(n,e){return Vl(e,n.syncPointTree_,null,zs(n.pendingWriteTree_,j()))}function Vl(n,e,t,i){if(B(n.path))return jl(n,e,t,i);{const s=e.get(j());t==null&&s!=null&&(t=vt(s,j()));let r=[];const o=F(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=xl(i,o);r=r.concat(Vl(a,l,c,h))}return s&&(r=r.concat(Ks(s,n,i,t))),r}}function jl(n,e,t,i){const s=e.get(j());t==null&&s!=null&&(t=vt(s,j()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=xl(i,o),h=n.operationForChild(o);h&&(r=r.concat(jl(h,a,l,c)))}),s&&(r=r.concat(Ks(s,n,i,t))),r}function zl(n,e){const t=e.query,i=Qn(n,t);return{hashFn:()=>(fm(e)||O.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Am(n,t._path,i):Nm(n,t._path);{const r=Pp(s,t);return ls(n,t,null,r)}}}}function Qn(n,e){const t=_i(e);return n.queryToTagMap.get(t)}function _i(n){return n._path.toString()+"$"+n._queryIdentifier}function Js(n,e){return n.tagToQueryMap.get(e)}function Xs(n){const e=n.indexOf("$");return C(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new G(n.substr(0,e))}}function Qs(n,e,t){const i=n.syncPointTree_.get(e);C(i,"Missing sync point for query tag that we're tracking");const s=zs(n.pendingWriteTree_,e);return Ks(i,t,s,null)}function km(n){return n.fold((e,t,i)=>{if(t&&ze(t))return[fi(t)];{let s=[];return t&&(s=Ul(t)),ue(i,(r,o)=>{s=s.concat(o)}),s}})}function qt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Tm())(n._repo,n._path):n}function xm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=_i(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Lm(){return Sm++}function Dm(n,e,t){const i=e._path,s=Qn(n,e),r=zl(n,t),o=n.listenProvider_.startListening(qt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)C(!ze(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!B(c)&&h&&ze(h))return[fi(h).query];{let g=[];return h&&(g=g.concat(Ul(h).map(p=>p.query))),ue(u,(p,d)=>{g=g.concat(d)}),g}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(qt(h),Qn(n,h))}}return o}/**
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
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ee(this.path_,e);return new er(this.syncTree_,t)}node(){return Ys(this.syncTree_,this.path_)}}const Mm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ro=function(n,e,t){if(!n||typeof n!="object")return n;if(C(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Um(n[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:C(!1,"Unexpected server value: "+n)}},Um=function(n,e,t){n.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&C(!1,"Unexpected increment value: "+i);const s=e.node();if(C(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Bm=function(n,e,t,i){return tr(e,new er(t,n),i)},ql=function(n,e,t){return tr(n,new Zs(e),t)};function tr(n,e,t){const i=n.getPriority().val(),s=Ro(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ro(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new te(a,se(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new te(s))),o.forEachChild(X,(a,l)=>{const c=tr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class nr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function ir(n,e){let t=e instanceof G?e:new G(e),i=n,s=F(t);for(;s!==null;){const r=wt(i.node.children,s)||{children:{},childCount:0};i=new nr(s,i,r),t=$(t),s=F(t)}return i}function xt(n){return n.node.value}function Gl(n,e){n.node.value=e,cs(n)}function $l(n){return n.node.childCount>0}function Hm(n){return xt(n)===void 0&&!$l(n)}function mi(n,e){ue(n.node.children,(t,i)=>{e(new nr(t,n,i))})}function Kl(n,e,t,i){t&&!i&&e(n),mi(n,s=>{Kl(s,e,!0,i)}),t&&i&&e(n)}function Wm(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function gn(n){return new G(n.parent===null?n.name:gn(n.parent)+"/"+n.name)}function cs(n){n.parent!==null&&Vm(n.parent,n.name,n)}function Vm(n,e,t){const i=Hm(t),s=Oe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,cs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,cs(n))}/**
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
 */const jm=/[\[\].#$\/\u0000-\u001F\u007F]/,zm=/[\[\].#$\u0000-\u001F\u007F]/,Mi=10*1024*1024,Yl=function(n){return typeof n=="string"&&n.length!==0&&!jm.test(n)},Jl=function(n){return typeof n=="string"&&n.length!==0&&!zm.test(n)},qm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jl(n)},Gm=function(n,e,t,i){i&&e===void 0||sr(Es(n,"value"),e,t)},sr=function(n,e,t){const i=t instanceof G?new c_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ye(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ye(i)+" with contents = "+e.toString());if(Ja(e))throw new Error(n+"contains "+e.toString()+" "+Ye(i));if(typeof e=="string"&&e.length>Mi/3&&oi(e)>Mi)throw new Error(n+"contains a string greater than "+Mi+" utf8 bytes "+Ye(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Yl(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ye(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);u_(i,o),sr(n,a,i),h_(i)}),s&&r)throw new Error(n+' contains ".value" child '+Ye(i)+" in addition to actual children.")}},Xl=function(n,e,t,i){if(!(i&&t===void 0)&&!Jl(t))throw new Error(Es(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$m=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xl(n,e,t,i)},Km=function(n,e){if(F(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Ym=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Yl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!qm(t))throw new Error(Es(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function rr(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Fs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ql(n,e,t){rr(n,t),Zl(n,i=>Fs(i,e))}function Pe(n,e,t){rr(n,t),Zl(n,i=>_e(i,e)||_e(e,i))}function Zl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Xm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Xm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ze&&re("event: "+t.toString()),kt(i)}}}/**
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
 */const Qm="repo_interrupt",Zm=25;class eg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=qn(),this.transactionQueueTree_=new nr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function tg(n,e,t){if(n.stats_=Ds(n.repoInfo_),n.forceRestClient_||Lp())n.server_=new zn(n.repoInfo_,(i,s,r,o)=>{No(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ao(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Re(n.repoInfo_,e,(i,s,r,o)=>{No(n,i,s,r,o)},i=>{Ao(n,i)},i=>{ig(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Bp(n.repoInfo_,()=>new F_(n.stats_,n.server_)),n.infoData_=new k_,n.infoSyncTree_=new To({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=pi(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ar(n,"connected",!1),n.serverSyncTree_=new To({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Pe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function ng(n){const t=n.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function or(n){return Mm({timestamp:ng(n)})}function No(n,e,t,i,s){n.dataUpdateCount++;const r=new G(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=xn(t,c=>se(c));o=Om(n.serverSyncTree_,r,l,s)}else{const l=se(t);o=Pm(n.serverSyncTree_,r,l,s)}else if(i){const l=xn(t,c=>se(c));o=Rm(n.serverSyncTree_,r,l)}else{const l=se(t);o=pi(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=gi(n,r)),Pe(n.eventQueue_,a,o)}function Ao(n,e){ar(n,"connected",e),e===!1&&rg(n)}function ig(n,e){ue(e,(t,i)=>{ar(n,t,i)})}function ar(n,e,t){const i=new G("/.info/"+e),s=se(t);n.infoData_.updateSnapshot(i,s);const r=pi(n.infoSyncTree_,i,s);Pe(n.eventQueue_,i,r)}function ec(n){return n.nextWriteId_++}function sg(n,e,t,i,s){lr(n,"set",{path:e.toString(),value:t,priority:i});const r=or(n),o=se(t,i),a=Ys(n.serverSyncTree_,e),l=ql(o,a,r),c=ec(n),h=Wl(n.serverSyncTree_,e,l,c,!0);rr(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(g,p)=>{const d=g==="ok";d||ce("set at "+e+" failed: "+g);const m=Xe(n.serverSyncTree_,c,!d);Pe(n.eventQueue_,e,m),lg(n,s,g,p)});const u=rc(n,e);gi(n,u),Pe(n.eventQueue_,u,[])}function rg(n){lr(n,"onDisconnectEvents");const e=or(n),t=qn();ns(n.onDisconnect_,j(),(s,r)=>{const o=Bm(s,r,n.serverSyncTree_,e);Rl(t,s,o)});let i=[];ns(t,j(),(s,r)=>{i=i.concat(pi(n.serverSyncTree_,s,r));const o=rc(n,s);gi(n,o)}),n.onDisconnect_=qn(),Pe(n.eventQueue_,j(),i)}function og(n,e,t){let i;F(e._path)===".info"?i=So(n.infoSyncTree_,e,t):i=So(n.serverSyncTree_,e,t),Ql(n.eventQueue_,e._path,i)}function Po(n,e,t){let i;F(e._path)===".info"?i=ls(n.infoSyncTree_,e,t):i=ls(n.serverSyncTree_,e,t),Ql(n.eventQueue_,e._path,i)}function ag(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Qm)}function lr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),re(t,...e)}function lg(n,e,t,i){e&&kt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function tc(n,e,t){return Ys(n.serverSyncTree_,e,t)||O.EMPTY_NODE}function cr(n,e=n.transactionQueueTree_){if(e||yi(n,e),xt(e)){const t=ic(n,e);C(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&cg(n,gn(e),t)}else $l(e)&&mi(e,t=>{cr(n,t)})}function cg(n,e,t){const i=t.map(c=>c.currentWriteId),s=tc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const h=t[c];C(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ae(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{lr(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(Xe(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&u.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();yi(n,ir(n.transactionQueueTree_,e)),cr(n,n.transactionQueueTree_),Pe(n.eventQueue_,e,h);for(let g=0;g<u.length;g++)kt(u[g])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ce("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}gi(n,e)}},o)}function gi(n,e){const t=nc(n,e),i=gn(t),s=ic(n,t);return ug(n,s,i),i}function ug(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ae(t,l.path);let h=!1,u;if(C(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Zm)h=!0,u="maxretry",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else{const g=tc(n,l.path,o);l.currentInputSnapshot=g;const p=e[a].update(g.val());if(p!==void 0){sr("transaction failed: Data returned ",p,l.path);let d=se(p);typeof p=="object"&&p!=null&&Oe(p,".priority")||(d=d.updatePriority(g.getPriority()));const y=l.currentWriteId,I=or(n),R=ql(d,g,I);l.currentOutputSnapshotRaw=d,l.currentOutputSnapshotResolved=R,l.currentWriteId=ec(n),o.splice(o.indexOf(y),1),s=s.concat(Wl(n.serverSyncTree_,l.path,R,l.currentWriteId,l.applyLocally)),s=s.concat(Xe(n.serverSyncTree_,y,!0))}else h=!0,u="nodata",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0))}Pe(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}yi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)kt(i[a]);cr(n,n.transactionQueueTree_)}function nc(n,e){let t,i=n.transactionQueueTree_;for(t=F(e);t!==null&&xt(i)===void 0;)i=ir(i,t),e=$(e),t=F(e);return i}function ic(n,e){const t=[];return sc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function sc(n,e,t){const i=xt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);mi(e,s=>{sc(n,s,t)})}function yi(n,e){const t=xt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Gl(e,t.length>0?t:void 0)}mi(e,i=>{yi(n,i)})}function rc(n,e){const t=gn(nc(n,e)),i=ir(n.transactionQueueTree_,e);return Wm(i,s=>{Fi(n,s)}),Fi(n,i),Kl(i,s=>{Fi(n,s)}),t}function Fi(n,e){const t=xt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(C(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(C(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Gl(e,void 0):t.length=r+1,Pe(n.eventQueue_,gn(e),s);for(let o=0;o<i.length;o++)kt(i[o])}}/**
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
 */function hg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ce(`Invalid query segment '${t}' in query '${n}'`)}return e}const Oo=function(n,e){const t=fg(n),i=t.namespace;t.domain==="firebase.com"&&Ae(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ae("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ll(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new G(t.pathString)}},fg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(s=hg(n.substring(h,u)));const g=dg(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const d=e.indexOf(".");i=e.substring(0,d).toLowerCase(),t=e.substring(d+1),r=i}"ns"in g&&(r=g.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class oc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class ac{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class pg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ur{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return B(this._path)?null:gl(this._path)}get ref(){return new ke(this._repo,this._path)}get _queryIdentifier(){const e=po(this._queryParams),t=xs(e);return t==="{}"?"default":t}get _queryObject(){return po(this._queryParams)}isEqual(e){if(e=de(e),!(e instanceof ur))return!1;const t=this._repo===e._repo,i=Fs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+l_(this._path)}}class ke extends ur{constructor(e,t){super(e,t,new Ws,!1)}get parent(){const e=vl(this._path);return e===null?null:new ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new G(e),i=Zn(this.ref,e);return new rn(this._node.getChild(t),i,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new rn(s,Zn(this.ref,i),X)))}hasChild(e){const t=new G(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kg(n,e){return n=de(n),n._checkNotDeleted("ref"),e!==void 0?Zn(n._root,e):n._root}function Zn(n,e){return n=de(n),F(n._path)===null?$m("child","path",e,!1):Xl("child","path",e,!1),new ke(n._repo,ee(n._path,e))}function xg(n,e){n=de(n),Km("set",n._path),Gm("set",e,n._path,!1);const t=new ri;return sg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class hr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new oc("value",this,new rn(e.snapshotNode,new ke(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ac(this,e,t):null}matches(e){return e instanceof hr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ac(this,e,t):null}createEvent(e,t){C(e.childName!=null,"Child events should have a childName.");const i=Zn(new ke(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new oc(e.type,this,new rn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function _g(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(h,u)=>{Po(n._repo,n,a),l(h,u)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new pg(t,r||void 0),a=e==="value"?new hr(o):new dr(e,o);return og(n._repo,n,a),()=>Po(n._repo,n,a)}function Lg(n,e,t,i){return _g(n,"value",e,t,i)}ym(ke);bm(ke);/**
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
 */const mg="FIREBASE_DATABASE_EMULATOR_HOST",us={};let gg=!1;function yg(n,e,t,i){n.repoInfo_=new ll(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function vg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Ae("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),re("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Oo(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[mg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Oo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const h=s&&l?new gt(gt.OWNER):new Mp(n.name,n.options,e);Ym("Invalid Firebase Database URL",o),B(o.path)||Ae("Database URL must point to the root of a Firebase Database (not including a child path).");const u=wg(a,n,h,new Dp(n.name,t));return new Ig(u,n)}function Eg(n,e){const t=us[e];(!t||t[n.key]!==n)&&Ae(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ag(n),delete t[n.key]}function wg(n,e,t,i){let s=us[e.name];s||(s={},us[e.name]=s);let r=s[n.toURLString()];return r&&Ae("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new eg(n,gg,t,i),s[n.toURLString()]=r,r}class Ig{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(tg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ke(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Eg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ae("Cannot call "+e+" on a deleted database.")}}function Dg(n=fa(),e){const t=Cs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Du("database");i&&Cg(t,...i)}return t}function Cg(n,e,t,i={}){n=de(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ae("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ae('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new gt(gt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Mu(i.mockUserToken,n.app.options.projectId);r=new gt(o)}yg(s,e,t,r)}/**
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
 */function bg(n){Ep(At),It(new et("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),We(Jr,Xr,n),We(Jr,Xr,"esm2017")}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};bg();var lc={exports:{}};/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */(function(n,e){(function(i,s){n.exports=s()})(window,function(){return function(t){var i={};function s(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,s),o.l=!0,o.exports}return s.m=t,s.c=i,s.d=function(r,o,a){s.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:a})},s.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},s.t=function(r,o){if(o&1&&(r=s(r)),o&8||o&4&&typeof r=="object"&&r&&r.__esModule)return r;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:r}),o&2&&typeof r!="string")for(var l in r)s.d(a,l,(function(c){return r[c]}).bind(null,l));return a},s.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return s.d(o,"a",o),o},s.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},s.p="dist",s(s.s=10)}([function(t,i,s){function r(o,a){var l=Object.prototype.hasOwnProperty,c,h,u,g;for(u=1,g=arguments.length;u<g;u+=1){c=arguments[u];for(h in c)l.call(c,h)&&(o[h]=c[h])}return o}t.exports=r},function(t,i,s){function r(o){return o===void 0}t.exports=r},function(t,i,s){function r(o){return o instanceof Array}t.exports=r},function(t,i,s){var r=s(2),o=s(17),a=s(6);function l(c,h,u){r(c)?o(c,h,u):a(c,h,u)}t.exports=l},function(t,i,s){function r(o){return typeof o=="string"||o instanceof String}t.exports=r},function(t,i,s){function r(o){return o instanceof Function}t.exports=r},function(t,i,s){function r(o,a,l){var c;l=l||null;for(c in o)if(o.hasOwnProperty(c)&&a.call(l,o[c],c,o)===!1)break}t.exports=r},function(t,i,s){var r=s(18),o=s(0);function a(l,c){var h;return c||(c=l,l=null),h=c.init||function(){},l&&r(h,l),c.hasOwnProperty("static")&&(o(h,c.static),delete c.static),o(h.prototype,c),h}t.exports=a},function(t,i,s){var r=s(2);function o(a,l,c){var h,u;if(c=c||0,!r(l))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(l,a,c);for(u=l.length,h=c;c>=0&&h<u;h+=1)if(l[h]===a)return h;return-1}t.exports=o},function(t,i,s){var r=s(29),o=s(30),a=s(5),l={capitalizeFirstLetter:function(c){return c.substring(0,1).toUpperCase()+c.substring(1,c.length)},isContained:function(c,h){return h?c===h?!0:h.contains(c):!1},createElementByTemplate:function(c,h){var u=document.createElement("div"),g=a(c)?c(h):r(c,h);return u.innerHTML=g,u.firstChild},bind:function(c,h){var u=Array.prototype.slice,g;return c.bind?c.bind.apply(c,u.call(arguments,1)):(g=u.call(arguments,2),function(){return c.apply(h,g.length?g.concat(u.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=l},function(t,i,s){s(11),t.exports=s(12)},function(t,i,s){},function(t,i,s){var r=s(13),o=s(7),a=s(0),l=s(1),c=s(20),h=s(9),u={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},g=o({init:function(p,d){this._options=a({},u,d),this._currentPage=0,this._view=new c(p,this._options,h.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&h.sendHostName()},_setCurrentPage:function(p){this._currentPage=p||this._options.page},_getLastPage:function(){var p=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return p||1},_getPageIndex:function(p){var d,m;return this._options.centerAlign?(d=Math.floor(this._options.visiblePages/2),m=p-d,m=Math.max(m,1),m=Math.min(m,this._getLastPage()-this._options.visiblePages+1),m):Math.ceil(p/this._options.visiblePages)},_getRelativePage:function(p){var d=p==="prev",m=this.getCurrentPage();return d?m-1:m+1},_getMorePageIndex:function(p){var d=this._getPageIndex(this.getCurrentPage()),m=this._options.visiblePages,y=p==="prev",I;return this._options.centerAlign?I=y?d-1:d+m:I=y?(d-1)*m:d*m+1,I},_convertToValidPage:function(p){var d=this._getLastPage();return p=Math.max(p,1),p=Math.min(p,d),p},_paginate:function(p){var d=this._makeViewData(p||this._options.page);this._setCurrentPage(p),this._view.update(d)},_makeViewData:function(p){var d={},m=this._getLastPage(),y=this._getPageIndex(p),I=this._getPageIndex(m),R=this._getEdge(p);return d.leftPageNumber=R.left,d.rightPageNumber=R.right,d.prevMore=y>1,d.nextMore=y<I,d.page=p,d.currentPageIndex=p,d.lastPage=m,d.lastPageListIndex=m,d},_getEdge:function(p){var d,m,y,I=this._getLastPage(),R=this._options.visiblePages,M=this._getPageIndex(p);return this._options.centerAlign?(y=Math.floor(R/2),d=Math.max(p-y,1),m=d+R-1,m>I&&(d=Math.max(I-R+1,1),m=I)):(d=(M-1)*R+1,m=M*R,m=Math.min(m,I)),{left:d,right:m}},_onClickHandler:function(p,d){switch(p){case"first":d=1;break;case"prev":d=this._getRelativePage("prev");break;case"next":d=this._getRelativePage("next");break;case"prevMore":d=this._getMorePageIndex("prev");break;case"nextMore":d=this._getMorePageIndex("next");break;case"last":d=this._getLastPage();break;default:if(!d)return}this.movePageTo(d)},reset:function(p){l(p)&&(p=this._options.totalItems),this._options.totalItems=p,this._paginate(1)},movePageTo:function(p){p=this._convertToValidPage(p),this.invoke("beforeMove",{page:p})&&(this._paginate(p),this.fire("afterMove",{page:p}))},setTotalItems:function(p){this._options.totalItems=p},setItemsPerPage:function(p){this._options.itemsPerPage=p},getCurrentPage:function(){return this._currentPage||this._options.page}});r.mixin(g),t.exports=g},function(t,i,s){var r=s(0),o=s(14),a=s(4),l=s(16),c=s(2),h=s(5),u=s(3),g=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(d){r(d.prototype,p.prototype)},p.prototype._getHandlerItem=function(d,m){var y={handler:d};return m&&(y.context=m),y},p.prototype._safeEvent=function(d){var m=this.events,y;return m||(m=this.events={}),d&&(y=m[d],y||(y=[],m[d]=y),m=y),m},p.prototype._safeContext=function(){var d=this.contexts;return d||(d=this.contexts=[]),d},p.prototype._indexOfContext=function(d){for(var m=this._safeContext(),y=0;m[y];){if(d===m[y][0])return y;y+=1}return-1},p.prototype._memorizeContext=function(d){var m,y;o(d)&&(m=this._safeContext(),y=this._indexOfContext(d),y>-1?m[y][1]+=1:m.push([d,1]))},p.prototype._forgetContext=function(d){var m,y;o(d)&&(m=this._safeContext(),y=this._indexOfContext(d),y>-1&&(m[y][1]-=1,m[y][1]<=0&&m.splice(y,1)))},p.prototype._bindEvent=function(d,m,y){var I=this._safeEvent(d);this._memorizeContext(y),I.push(this._getHandlerItem(m,y))},p.prototype.on=function(d,m,y){var I=this;a(d)?(d=d.split(g),u(d,function(R){I._bindEvent(R,m,y)})):l(d)&&(y=m,u(d,function(R,M){I.on(M,R,y)}))},p.prototype.once=function(d,m,y){var I=this;if(l(d)){y=m,u(d,function(M,T){I.once(T,M,y)});return}function R(){m.apply(y,arguments),I.off(d,R,y)}this.on(d,R,y)},p.prototype._spliceMatches=function(d,m){var y=0,I;if(c(d))for(I=d.length;y<I;y+=1)m(d[y])===!0&&(d.splice(y,1),I-=1,y-=1)},p.prototype._matchHandler=function(d){var m=this;return function(y){var I=d===y.handler;return I&&m._forgetContext(y.context),I}},p.prototype._matchContext=function(d){var m=this;return function(y){var I=d===y.context;return I&&m._forgetContext(y.context),I}},p.prototype._matchHandlerAndContext=function(d,m){var y=this;return function(I){var R=d===I.handler,M=m===I.context,T=R&&M;return T&&y._forgetContext(I.context),T}},p.prototype._offByEventName=function(d,m){var y=this,I=h(m),R=y._matchHandler(m);d=d.split(g),u(d,function(M){var T=y._safeEvent(M);I?y._spliceMatches(T,R):(u(T,function(S){y._forgetContext(S.context)}),y.events[M]=[])})},p.prototype._offByHandler=function(d){var m=this,y=this._matchHandler(d);u(this._safeEvent(),function(I){m._spliceMatches(I,y)})},p.prototype._offByObject=function(d,m){var y=this,I;this._indexOfContext(d)<0?u(d,function(R,M){y.off(M,R)}):a(m)?(I=this._matchContext(d),y._spliceMatches(this._safeEvent(m),I)):h(m)?(I=this._matchHandlerAndContext(m,d),u(this._safeEvent(),function(R){y._spliceMatches(R,I)})):(I=this._matchContext(d),u(this._safeEvent(),function(R){y._spliceMatches(R,I)}))},p.prototype.off=function(d,m){a(d)?this._offByEventName(d,m):arguments.length?h(d)?this._offByHandler(d):l(d)&&this._offByObject(d,m):(this.events={},this.contexts=[])},p.prototype.fire=function(d){this.invoke.apply(this,arguments)},p.prototype.invoke=function(d){var m,y,I,R;if(!this.hasListener(d))return!0;for(m=this._safeEvent(d),y=Array.prototype.slice.call(arguments,1),I=0;m[I];){if(R=m[I],R.handler.apply(R.context,y)===!1)return!1;I+=1}return!0},p.prototype.hasListener=function(d){return this.getListenerLength(d)>0},p.prototype.getListenerLength=function(d){var m=this._safeEvent(d);return m.length},t.exports=p},function(t,i,s){var r=s(1),o=s(15);function a(l){return!r(l)&&!o(l)}t.exports=a},function(t,i,s){function r(o){return o===null}t.exports=r},function(t,i,s){function r(o){return o===Object(o)}t.exports=r},function(t,i,s){function r(o,a,l){var c=0,h=o.length;for(l=l||null;c<h&&a.call(l,o[c],c,o)!==!1;c+=1);}t.exports=r},function(t,i,s){var r=s(19);function o(a,l){var c=r(l.prototype);c.constructor=a,a.prototype=c}t.exports=o},function(t,i,s){function r(o){function a(){}return a.prototype=o,new a}t.exports=r},function(t,i,s){var r=s(3),o=s(7),a=s(21),l=s(22),c=s(24),h=s(25),u=s(0),g=s(4),p=s(28),d=s(9),m={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},y=["first","prev","next","last"],I=["prev","next"],R="The container element is invalid.",M=o({init:function(T,S,w){this._containerElement=null,this._firstItemClassName=S.firstItemClassName,this._lastItemClassName=S.lastItemClassName,this._template=u({},m,S.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(T),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(w)},_setRootElement:function(T){if(g(T)?T=document.getElementById(T)||document.querySelector(T):T.jquery&&(T=T[0]),!p(T))throw new Error(R);this._containerElement=T},_setMoveButtons:function(){r(y,function(T){this._buttons[T]=d.createElementByTemplate(this._template.moveButton,{type:T})},this)},_setDisabledMoveButtons:function(){r(y,function(T){var S="disabled"+d.capitalizeFirstLetter(T);this._buttons[S]=d.createElementByTemplate(this._template.disabledMoveButton,{type:T})},this)},_setMoreButtons:function(){r(I,function(T){var S=T+"More";this._buttons[S]=d.createElementByTemplate(this._template.moreButton,{type:T})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(T){var S;T.page>1?S=this._buttons.first:S=this._buttons.disabledFirst,this._getContainerElement().appendChild(S)},_appendPrevButton:function(T){var S;T.currentPageIndex>1?S=this._buttons.prev:S=this._buttons.disabledPrev,this._getContainerElement().appendChild(S)},_appendNextButton:function(T){var S;T.currentPageIndex<T.lastPageListIndex?S=this._buttons.next:S=this._buttons.disabledNext,this._getContainerElement().appendChild(S)},_appendLastButton:function(T){var S;T.page<T.lastPage?S=this._buttons.last:S=this._buttons.disabledLast,this._getContainerElement().appendChild(S)},_appendPrevMoreButton:function(T){var S;T.prevMore&&(S=this._buttons.prevMore,h(S,this._firstItemClassName),this._getContainerElement().appendChild(S))},_appendNextMoreButton:function(T){var S;T.nextMore&&(S=this._buttons.nextMore,h(S,this._lastItemClassName),this._getContainerElement().appendChild(S))},_appendPages:function(T){var S=T.leftPageNumber,w=T.rightPageNumber,E,f;for(f=S;f<=w;f+=1)f===T.page?E=d.createElementByTemplate(this._template.currentPage,{page:f}):(E=d.createElementByTemplate(this._template.page,{page:f}),this._enabledPageElements.push(E)),f===S&&!T.prevMore&&h(E,this._firstItemClassName),f===w&&!T.nextMore&&h(E,this._lastItemClassName),this._getContainerElement().appendChild(E)},_attachClickEvent:function(T){var S=this._getContainerElement();l(S,"click",function(w){var E=a(w),f,_;c(w),_=this._getButtonType(E),_||(f=this._getPageNumber(E)),T(_,f)},this)},_getButtonType:function(T){var S,w=this._buttons;return r(w,function(E,f){return d.isContained(T,E)?(S=f,!1):!0},this),S},_getPageNumber:function(T){var S=this._findPageElement(T),w;return S&&(w=parseInt(S.innerText,10)),w},_findPageElement:function(T){for(var S=0,w=this._enabledPageElements.length,E;S<w;S+=1)if(E=this._enabledPageElements[S],d.isContained(T,E))return E;return null},_empty:function(){this._enabledPageElements=[],r(this._buttons,function(T,S){this._buttons[S]=T.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(T){this._empty(),this._appendFirstButton(T),this._appendPrevButton(T),this._appendPrevMoreButton(T),this._appendPages(T),this._appendNextMoreButton(T),this._appendNextButton(T),this._appendLastButton(T)}});t.exports=M},function(t,i,s){function r(o){return o.target||o.srcElement}t.exports=r},function(t,i,s){var r=s(4),o=s(3),a=s(23);function l(u,g,p,d){if(r(g)){o(g.split(/\s+/g),function(m){c(u,m,p,d)});return}o(g,function(m,y){c(u,y,m,p)})}function c(u,g,p,d){function m(y){p.call(d||u,y||window.event)}"addEventListener"in u?u.addEventListener(g,m):"attachEvent"in u&&u.attachEvent("on"+g,m),h(u,g,p,m)}function h(u,g,p,d){var m=a(u,g),y=!1;o(m,function(I){return I.handler===p?(y=!0,!1):!0}),y||m.push({handler:p,wrappedHandler:d})}t.exports=l},function(t,i,s){var r="_feEventKey";function o(a,l){var c=a[r],h;return c||(c=a[r]={}),h=c[l],h||(h=c[l]=[]),h}t.exports=o},function(t,i,s){function r(o){if(o.preventDefault){o.preventDefault();return}o.returnValue=!1}t.exports=r},function(t,i,s){var r=s(3),o=s(8),a=s(26),l=s(27);function c(h){var u=Array.prototype.slice.call(arguments,1),g=h.classList,p=[],d;if(g){r(u,function(m){h.classList.add(m)});return}d=a(h),d&&(u=[].concat(d.split(/\s+/),u)),r(u,function(m){o(m,p)<0&&p.push(m)}),l(h,p)}t.exports=c},function(t,i,s){var r=s(1);function o(a){return!a||!a.className?"":r(a.className.baseVal)?a.className:a.className.baseVal}t.exports=o},function(t,i,s){var r=s(2),o=s(1);function a(l,c){if(c=r(c)?c.join(" "):c,c=c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(l.className.baseVal)){l.className=c;return}l.className.baseVal=c}t.exports=a},function(t,i,s){function r(o){return typeof HTMLElement=="object"?o&&(o instanceof HTMLElement||!!o.nodeType):!!(o&&o.nodeType)}t.exports=r},function(t,i,s){var r=s(8),o=s(3),a=s(2),l=s(4),c=s(0),h=/{{\s?|\s?}}/g,u=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,g=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,d=/\./,m=/^["']\w+["']$/,y=/"|'/g,I=/^-?\d+\.?\d*$/,R=2,M={if:f,each:_,with:N},T="a".split(/a/).length===3,S=function(){return T?function(A,L){return A.split(L)}:function(A,L){var D=[],H=0,z,K;for(L.global||(L=new RegExp(L,"g")),z=L.exec(A);z!==null;)K=z.index,D.push(A.slice(H,K)),H=K+z[0].length,z=L.exec(A);return D.push(A.slice(H)),D}}();function w(A,L){var D,H=L[A];return A==="true"?H=!0:A==="false"?H=!1:m.test(A)?H=A.replace(y,""):u.test(A)?(D=A.split(g),H=w(D[0],L)[w(D[1],L)]):p.test(A)?(D=A.split(d),H=w(D[0],L)[D[1]]):I.test(A)&&(H=parseFloat(A)),H}function E(A,L){var D=[A],H=[],z=0,K=0;return o(L,function(Q,fe){Q.indexOf("if")===0?z+=1:Q==="/if"?z-=1:!z&&(Q.indexOf("elseif")===0||Q==="else")&&(D.push(Q==="else"?["true"]:Q.split(" ").slice(1)),H.push(L.slice(K,fe)),K=fe+1)}),H.push(L.slice(K)),{exps:D,sourcesInsideIf:H}}function f(A,L,D){var H=E(A,L),z=!1,K="";return o(H.exps,function(Q,fe){return z=P(Q,D),z&&(K=J(H.sourcesInsideIf[fe],D)),!z}),K}function _(A,L,D){var H=P(A,D),z=a(H)?"@index":"@key",K={},Q="";return o(H,function(fe,ut){K[z]=ut,K["@this"]=fe,c(D,K),Q+=J(L.slice(),D)}),Q}function N(A,L,D){var H=r("as",A),z=A[H+1],K=P(A.slice(0,H),D),Q={};return Q[z]=K,J(L,c(D,Q))||""}function k(A,L,D){var H=A.splice(L+1,D-L);return H.pop(),H}function b(A,L,D){for(var H=M[A],z=1,K=0,Q,fe=K+R,ut=L[fe];z&&l(ut);)ut.indexOf(A)===0?z+=1:ut.indexOf("/"+A)===0&&(z-=1,Q=fe),fe+=R,ut=L[fe];if(z)throw Error(A+" needs {{/"+A+"}} expression.");return L[K]=H(L[K].split(" ").slice(1),k(L,K,Q),D),L}function P(A,L){var D=w(A[0],L);return D instanceof Function?V(D,A.slice(1),L):D}function V(A,L,D){var H=[];return o(L,function(z){H.push(w(z,D))}),A.apply(null,H)}function J(A,L){for(var D=1,H=A[D],z,K,Q;l(H);)z=H.split(" "),K=z[0],M[K]?(Q=b(K,A.splice(D,A.length-D),L),A=A.concat(Q)):A[D]=P(z,L),D+=R,H=A[D];return A.join("")}function vi(A,L){return J(S(A,h),L)}t.exports=vi},function(t,i,s){var r=s(1),o=s(31),a=7*24*60*60*1e3;function l(h){var u=new Date().getTime();return u-h>a}function c(h,u){var g="https://www.google-analytics.com/collect",p=location.hostname,d="event",m="use",y="TOAST UI "+h+" for "+p+": Statistics",I=window.localStorage.getItem(y);!r(window.tui)&&window.tui.usageStatistics===!1||I&&!l(I)||(window.localStorage.setItem(y,new Date().getTime()),setTimeout(function(){(document.readyState==="interactive"||document.readyState==="complete")&&o(g,{v:1,t:d,tid:u,cid:p,dp:p,dh:h,el:h,ec:m})},1e3))}t.exports=c},function(t,i,s){var r=s(6);function o(a,l){var c=document.createElement("img"),h="";return r(l,function(u,g){h+="&"+g+"="+u}),h=h.substring(1),c.src=a+"?"+h,c.style.display="none",document.body.appendChild(c),document.body.removeChild(c),c}t.exports=o}])})})(lc);var Tg=lc.exports;const Mg=Qo(Tg);export{Sg as a,Rg as b,$h as c,Dg as d,Ag as e,Pg as f,Og as g,Ng as i,Lg as o,kg as r,xg as s,Mg as t};
//# sourceMappingURL=vendor-08007cbf.js.map
