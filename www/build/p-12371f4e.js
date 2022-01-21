import{a as o,b as t,r as n,p as i,d as e}from"./p-eeb914bf.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const r=new WeakMap,a=(o,t,n,i=0)=>{r.has(o)!==n&&(n?c(o,t,i):u(o,t))},s=o=>o===o.getRootNode().activeElement,c=(o,t,n)=>{const i=t.parentNode,e=t.cloneNode(!1);e.classList.add("cloned-input"),e.tabIndex=-1,i.appendChild(e),r.set(o,e);const a="rtl"===o.ownerDocument.dir?9999:-9999;o.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${n}px,0) scale(0)`},u=(o,t)=>{const n=r.get(o);n&&(r.delete(o),n.remove()),o.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",l=async(o,t,i,e,r)=>{if(!i&&!e)return;const s=((o,t,n)=>((o,t,n,i)=>{const e=o.top,r=o.bottom,a=t.top,s=a+15,c=.75*Math.min(t.bottom,i-n)-r,u=s-e,d=Math.round(c<0?-c:u>0?-u:0),l=Math.min(d,e-a),f=Math.abs(l);return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:n,inputSafeY:4-(e-s)}})((o.closest("ion-item,[ion-item]")||o).getBoundingClientRect(),t.getBoundingClientRect(),n,o.ownerDocument.defaultView.innerHeight))(o,i||e,r);if(i&&Math.abs(s.scrollAmount)<4)t.focus();else if(a(o,t,!0,s.inputSafeY),t.focus(),n((()=>o.click())),"undefined"!=typeof window){let n;const e=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",r),window.removeEventListener("ionKeyboardDidShow",e),i&&await i.scrollByPoint(0,s.scrollAmount,s.scrollDuration),a(o,t,!1,s.inputSafeY),t.focus()},r=()=>{window.removeEventListener("ionKeyboardDidShow",r),window.addEventListener("ionKeyboardDidShow",e)};if(i){const o=await i.getScrollElement();if(s.scrollAmount>o.scrollHeight-o.clientHeight-o.scrollTop)return"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",r)):window.addEventListener("ionKeyboardDidShow",e),void(n=setTimeout(e,1e3))}e()}},f=(o,t)=>{if("INPUT"!==o.tagName)return;if(o.parentElement&&"ION-INPUT"===o.parentElement.tagName)return;if(o.parentElement&&o.parentElement.parentElement&&"ION-SEARCHBAR"===o.parentElement.parentElement.tagName)return;const n=o.closest("ion-content");if(null===n)return;const i=n.$ionPaddingTimer;i&&clearTimeout(i),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n.$ionPaddingTimer=setTimeout((()=>{n.style.setProperty("--keyboard-offset","0px")}),120)},w=n=>{const r=document,c=n.getNumber("keyboardHeight",290),u=n.getBoolean("scrollAssist",!0),w=n.getBoolean("hideCaretOnScroll",!0),p=n.getBoolean("inputBlurring",!0),h=n.getBoolean("scrollPadding",!0),S=Array.from(r.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,m=new WeakMap,y=async n=>{await new Promise((o=>e(n,o)));const r=n.shadowRoot||n,d=r.querySelector("input")||r.querySelector("textarea"),f=n.closest("ion-content"),p=f?null:n.closest("ion-footer");if(d){if(f&&w&&!b.has(n)){const i=((n,i,e)=>{if(!e||!i)return()=>{};const r=o=>{s(i)&&a(n,i,o)},c=()=>a(n,i,!1),u=()=>r(!0),d=()=>r(!1);return o(e,"ionScrollStart",u),o(e,"ionScrollEnd",d),i.addEventListener("blur",c),()=>{t(e,"ionScrollStart",u),t(e,"ionScrollEnd",d),i.addEventListener("ionBlur",c)}})(n,d,f);b.set(n,i)}if((f||p)&&u&&!m.has(n)){const o=((o,t,n,e,r)=>{let a;const c=o=>{a=i(o)},u=c=>{if(!a)return;const u=i(c);((o,t,n)=>{if(t&&n){const i=t.x-n.x,e=t.y-n.y;return i*i+e*e>o*o}return!1})(6,a,u)||s(t)||(c.stopPropagation(),l(o,t,n,e,r))};return o.addEventListener("touchstart",c,!0),o.addEventListener("touchend",u,!0),()=>{o.removeEventListener("touchstart",c,!0),o.removeEventListener("touchend",u,!0)}})(n,d,f,p,c);m.set(n,o)}}};p&&(()=>{let t=!0,n=!1;const i=document;o(i,"ionScrollStart",(()=>{n=!0})),i.addEventListener("focusin",(()=>{t=!0}),!0),i.addEventListener("touchend",(o=>{if(n)return void(n=!1);const e=i.activeElement;if(!e)return;if(e.matches(d))return;const r=o.target;r!==e&&(r.matches(d)||r.closest(d)||(t=!1,setTimeout((()=>{t||e.blur()}),50)))}),!1)})(),h&&(o=>{const t=document;t.addEventListener("focusin",(t=>{f(t.target,o)})),t.addEventListener("focusout",(o=>{f(o.target,0)}))})(c);for(const o of S)y(o);r.addEventListener("ionInputDidLoad",(o=>{y(o.detail)})),r.addEventListener("ionInputDidUnload",(o=>{(o=>{if(w){const t=b.get(o);t&&t(),b.delete(o)}if(u){const t=m.get(o);t&&t(),m.delete(o)}})(o.detail)}))};export{w as startInputShims}