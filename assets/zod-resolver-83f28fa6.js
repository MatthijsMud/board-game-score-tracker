import{Z as me,r as p}from"./index-2ff8c1a9.js";var Ee=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var s,o,c;if(Array.isArray(e)){if(s=e.length,s!=r.length)return!1;for(o=s;o--!==0;)if(!t(e[o],r[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(c=Object.keys(e),s=c.length,s!==Object.keys(r).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(r,c[o]))return!1;for(o=s;o--!==0;){var i=c[o];if(!t(e[i],r[i]))return!1}return!0}return e!==e&&r!==r};const B=me(Ee);function k(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const s=t[r];return s!=null&&s!==!1&&(e[r]=s),e},{})}var ve=Object.defineProperty,X=Object.getOwnPropertySymbols,we=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Z=(t,e,r)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Se=(t,e)=>{for(var r in e||(e={}))we.call(e,r)&&Z(t,r,e[r]);if(X)for(var r of X(e))$e.call(e,r)&&Z(t,r,e[r]);return t};function ce(t,e){if(e===null||typeof e!="object")return{};const r=Se({},e);return Object.keys(e).forEach(s=>{s.includes(`${String(t)}.`)&&delete r[s]}),r}const he="__MANTINE_FORM_INDEX__";function G(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]/g,`.${he}`)):!1:!1}function J(t,e,r){typeof r.value=="object"&&(r.value=w(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function w(t){if(typeof t!="object")return t;var e=0,r,s,o,c=Object.prototype.toString.call(t);if(c==="[object Object]"?o=Object.create(t.__proto__||null):c==="[object Array]"?o=Array(t.length):c==="[object Set]"?(o=new Set,t.forEach(function(i){o.add(w(i))})):c==="[object Map]"?(o=new Map,t.forEach(function(i,a){o.set(w(a),w(i))})):c==="[object Date]"?o=new Date(+t):c==="[object RegExp]"?o=new RegExp(t.source,t.flags):c==="[object DataView]"?o=new t.constructor(w(t.buffer)):c==="[object ArrayBuffer]"?o=t.slice(0):c.slice(-6)==="Array]"&&(o=new t.constructor(t)),o){for(s=Object.getOwnPropertySymbols(t);e<s.length;e++)J(o,s[e],Object.getOwnPropertyDescriptor(t,s[e]));for(e=0,s=Object.getOwnPropertyNames(t);e<s.length;e++)Object.hasOwnProperty.call(o,r=s[e])&&o[r]===t[r]||J(o,r,Object.getOwnPropertyDescriptor(t,r))}return o||t}function ie(t){return typeof t!="string"?[]:t.split(".")}function D(t,e,r){const s=ie(t);if(s.length===0)return r;const o=w(r);if(s.length===1)return o[s[0]]=e,o;let c=o[s[0]];for(let i=1;i<s.length-1;i+=1){if(c===void 0)return o;c=c[s[i]]}return c[s[s.length-1]]=e,o}function j(t,e){const r=ie(t);if(r.length===0||typeof e!="object"||e===null)return;let s=e[r[0]];for(let o=1;o<r.length&&s!==void 0;o+=1)s=s[r[o]];return s}function Q(t){const e=k(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function T(t,e,r="",s={}){return typeof t!="object"||t===null?s:Object.keys(t).reduce((o,c)=>{const i=t[c],a=`${r===""?"":`${r}.`}${c}`,u=j(a,e);let d=!1;return typeof i=="function"&&(o[a]=i(u,e,a)),typeof i=="object"&&Array.isArray(u)&&(d=!0,u.forEach((_,b)=>T(i,e,`${a}.${b}`,o))),typeof i=="object"&&typeof u=="object"&&u!==null&&(d||T(i,e,a,o)),o},s)}function M(t,e){return Q(typeof t=="function"?t(e):T(t,e))}function C(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const s=M(e,r),o=Object.keys(s.errors).find(c=>t.split(".").every((i,a)=>i===c.split(".")[a]));return{hasError:!!o,error:o?s.errors[o]:null}}function Ae(t,{from:e,to:r},s){const o=j(t,s);if(!Array.isArray(o))return s;const c=[...o],i=o[e];return c.splice(e,1),c.splice(r,0,i),D(t,c,s)}var Ie=Object.defineProperty,U=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Y=(t,e,r)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Re=(t,e)=>{for(var r in e||(e={}))Ce.call(e,r)&&Y(t,r,e[r]);if(U)for(var r of U(e))De.call(e,r)&&Y(t,r,e[r]);return t};function Ve(t,{from:e,to:r},s){const o=`${t}.${e}`,c=`${t}.${r}`,i=Re({},s);return Object.keys(s).every(a=>{let u,d;if(a.startsWith(o)&&(u=a,d=a.replace(o,c)),a.startsWith(c)&&(u=a.replace(c,o),d=a),u&&d){const _=i[u],b=i[d];return b===void 0?delete i[u]:i[u]=b,_===void 0?delete i[d]:i[d]=_,!1}return!0}),i}function Ne(t,e,r){const s=j(t,r);return Array.isArray(s)?D(t,s.filter((o,c)=>c!==e),r):r}var Fe=Object.defineProperty,x=Object.getOwnPropertySymbols,ke=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,ee=(t,e,r)=>e in t?Fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Me=(t,e)=>{for(var r in e||(e={}))ke.call(e,r)&&ee(t,r,e[r]);if(x)for(var r of x(e))Te.call(e,r)&&ee(t,r,e[r]);return t};function re(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function te(t,e,r,s){if(e===void 0)return r;const o=`${String(t)}`;let c=r;s===-1&&(c=ce(`${o}.${e}`,c));const i=Me({},c),a=new Set;return Object.entries(c).filter(([u])=>{if(!u.startsWith(`${o}.`))return!1;const d=re(u,o);return Number.isNaN(d)?!1:d>=e}).forEach(([u,d])=>{const _=re(u,o),b=u.replace(`${o}.${_}`,`${o}.${_+s}`);i[b]=d,a.add(b),a.has(u)||delete i[u]}),i}function Le(t,e,r,s){const o=j(t,s);if(!Array.isArray(o))return s;const c=[...o];return c.splice(typeof r=="number"?r:c.length,0,e),D(t,c,s)}function oe(t,e){const r=Object.keys(t);if(typeof e=="string"){const s=r.filter(o=>o.startsWith(`${e}.`));return t[e]||s.some(o=>t[o])||!1}return r.some(s=>t[s])}function Ke(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}var We=Object.defineProperty,qe=Object.defineProperties,He=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,se=(t,e,r)=>e in t?We(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,P=(t,e)=>{for(var r in e||(e={}))ze.call(e,r)&&se(t,r,e[r]);if(ne)for(var r of ne(e))Be.call(e,r)&&se(t,r,e[r]);return t},F=(t,e)=>qe(t,He(e));function Ze({initialValues:t={},initialErrors:e={},initialDirty:r={},initialTouched:s={},clearInputErrorOnChange:o=!0,validateInputOnChange:c=!1,validateInputOnBlur:i=!1,transformValues:a=d=>d,validate:u}={}){const[d,_]=p.useState(s),[b,h]=p.useState(r),[y,m]=p.useState(t),[L,E]=p.useState(k(e)),R=p.useRef(t),K=n=>{R.current=n},W=p.useCallback(()=>_({}),[]),fe=n=>{const f=n?P(P({},y),n):y;K(f),h({})},V=p.useCallback(n=>E(f=>k(typeof n=="function"?n(f):n)),[]),N=p.useCallback(()=>E({}),[]),q=p.useCallback(()=>{m(t),N(),K(t),h({}),W()},[]),$=p.useCallback((n,f)=>V(l=>F(P({},l),{[n]:f})),[]),A=p.useCallback(n=>V(f=>{if(typeof n!="string")return f;const l=P({},f);return delete l[n],l}),[]),I=p.useCallback(n=>h(f=>{if(typeof n!="string")return f;const l=ce(n,f);return delete l[n],l}),[]),H=p.useCallback((n,f)=>{const l=G(n,c);I(n),_(O=>F(P({},O),{[n]:!0})),m(O=>{const S=D(n,f,O);if(l){const g=C(n,u,S);g.hasError?$(n,g.error):A(n)}return S}),!l&&o&&$(n,null)},[]),le=p.useCallback(n=>{m(f=>{const l=typeof n=="function"?n(f):n;return P(P({},f),l)}),o&&N()},[]),ue=p.useCallback((n,f)=>{I(n),m(l=>Ae(n,f,l)),E(l=>Ve(n,f,l))},[]),ae=p.useCallback((n,f)=>{I(n),m(l=>Ne(n,f,l)),E(l=>te(n,f,l,-1))},[]),pe=p.useCallback((n,f,l)=>{I(n),m(O=>Le(n,f,l,O)),E(O=>te(n,l,O,1))},[]),z=p.useCallback(()=>{const n=M(u,y);return E(n.errors),n},[y,u]),de=p.useCallback(n=>{const f=C(n,u,y);return f.hasError?$(n,f.error):A(n),f},[y,u]),ye=(n,{type:f="input",withError:l=!0,withFocus:O=!0}={})=>{const g={onChange:Ke(v=>H(n,v))};return l&&(g.error=L[n]),f==="checkbox"?g.checked=j(n,y):g.value=j(n,y),O&&(g.onFocus=()=>_(v=>F(P({},v),{[n]:!0})),g.onBlur=()=>{if(G(n,i)){const v=C(n,u,y);v.hasError?$(n,v.error):A(n)}}),g},Oe=(n,f)=>l=>{l==null||l.preventDefault();const O=z();O.hasErrors?f==null||f(O.errors,y,l):n==null||n(a(y),l)},_e=n=>a(n||y),be=p.useCallback(n=>{n.preventDefault(),q()},[]),ge=n=>{if(n){const l=j(n,b);if(typeof l=="boolean")return l;const O=j(n,y),S=j(n,R.current);return!B(O,S)}return Object.keys(b).length>0?oe(b):!B(y,R.current)},je=p.useCallback(n=>oe(d,n),[d]),Pe=p.useCallback(n=>n?!C(n,u,y).hasError:!M(u,y).hasErrors,[y,u]);return{values:y,errors:L,setValues:le,setErrors:V,setFieldValue:H,setFieldError:$,clearFieldError:A,clearErrors:N,reset:q,validate:z,validateField:de,reorderListItem:ue,removeListItem:ae,insertListItem:pe,getInputProps:ye,onSubmit:Oe,onReset:be,isDirty:ge,isTouched:je,setTouched:_,setDirty:h,resetTouched:W,resetDirty:fe,isValid:Pe,getTransformedValues:_e}}function Ge(t){return e=>{const r=t.safeParse(e);if(r.success)return{};const s={};return r.error.errors.forEach(o=>{s[o.path.join(".")]=o.message}),s}}export{Ze as u,Ge as z};
