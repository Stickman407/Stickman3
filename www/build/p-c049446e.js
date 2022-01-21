import{e as o,w as t}from"./p-ab110788.js";import{d as n}from"./p-eeb914bf.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=()=>{const s=window;s.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(s.innerWidth/2,s.innerHeight/2);if(!o)return;const e=o.closest("ion-content");e&&new Promise((o=>n(e,o))).then((()=>{t((async()=>{e.style.setProperty("--overflow","hidden"),await e.scrollToTop(300),e.style.removeProperty("--overflow")}))}))}))}))};export{s as startStatusTap}