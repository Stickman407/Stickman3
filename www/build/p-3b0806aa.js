import{r as n}from"./p-eeb914bf.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let i;const t=n=>{if(void 0===i){const t=void 0!==n.style.webkitAnimationName;i=void 0===n.style.animationName&&t?"-webkit-":""}return i},e=(n,i,e)=>{const o=i.startsWith("animation")?t(n):"";n.style.setProperty(o+i,e)},o=(n,i)=>{const e=i.startsWith("animation")?t(n):"";n.style.removeProperty(e+i)},a=[],r=(n=[],i)=>{if(void 0!==i){const t=Array.isArray(i)?i:[i];return[...n,...t]}return n},s=i=>{let s,l,d,m,f,c,u,v,y,p,g,$,b,A=[],E=[],k=[],C=!1,w={},h=[],S=[],T={},F=0,R=!1,D=!1,W=!0,I=!1,K=!0;const M=i,j=[],x=[],z=[],P=[],Z=[],q=[],B=[],G=[],H=[],J=[],L="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,N="function"==typeof Element&&"function"==typeof Element.prototype.animate&&L,O=()=>J,Q=(n,i)=>((i&&i.oneTimeCallback?x:j).push({c:n,o:i}),b),U=()=>{if(N)J.forEach((n=>{n.cancel()})),J.length=0;else{const i=z.slice();n((()=>{i.forEach((n=>{o(n,"animation-name"),o(n,"animation-duration"),o(n,"animation-timing-function"),o(n,"animation-iteration-count"),o(n,"animation-delay"),o(n,"animation-play-state"),o(n,"animation-fill-mode"),o(n,"animation-direction")}))}))}},V=()=>{Z.forEach((n=>{n&&n.parentNode&&n.parentNode.removeChild(n)})),Z.length=0},X=()=>void 0!==f?f:u?u.getFill():"both",Y=()=>void 0!==y?y:void 0!==c?c:u?u.getDirection():"normal",_=()=>R?"linear":void 0!==d?d:u?u.getEasing():"linear",nn=()=>D?0:void 0!==p?p:void 0!==l?l:u?u.getDuration():0,tn=()=>void 0!==m?m:u?u.getIterations():1,en=()=>void 0!==g?g:void 0!==s?s:u?u.getDelay():0,on=()=>{0!==F&&(F--,0===F&&((()=>{un(),G.forEach((n=>n())),H.forEach((n=>n()));const n=W?1:0,i=h,t=S,o=T;z.forEach((n=>{const a=n.classList;i.forEach((n=>a.add(n))),t.forEach((n=>a.remove(n)));for(const i in o)o.hasOwnProperty(i)&&e(n,i,o[i])})),j.forEach((i=>i.c(n,b))),x.forEach((i=>i.c(n,b))),x.length=0,K=!0,W&&(I=!0),W=!0})(),u&&u.animationFinish()))},an=(o=!0)=>{V();const r=((s=A).forEach((n=>{for(const i in n)if(n.hasOwnProperty(i)){const t=n[i];if("easing"===i)n["animation-timing-function"]=t,delete n[i];else{const e=i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();e!==i&&(n[e]=t,delete n[i])}}})),s);var s;z.forEach((s=>{if(r.length>0){const l=((n=[])=>n.map((n=>{const i=n.offset,t=[];for(const i in n)n.hasOwnProperty(i)&&"offset"!==i&&t.push(`${i}: ${n[i]};`);return`${100*i}% { ${t.join(" ")} }`})).join(" "))(r);$=void 0!==i?i:(n=>{let i=a.indexOf(n);return i<0&&(i=a.push(n)-1),`ion-animation-${i}`})(l);const d=((n,i,e)=>{const o=(n=>{const i=n.getRootNode();return i.head||i})(e),a=t(e),r=o.querySelector("#"+n);if(r)return r;const s=(e.ownerDocument||document).createElement("style");return s.id=n,s.textContent=`@${a}keyframes ${n} { ${i} } @${a}keyframes ${n}-alt { ${i} }`,o.appendChild(s),s})($,l,s);Z.push(d),e(s,"animation-duration",`${nn()}ms`),e(s,"animation-timing-function",_()),e(s,"animation-delay",`${en()}ms`),e(s,"animation-fill-mode",X()),e(s,"animation-direction",Y());const m=tn()===1/0?"infinite":tn().toString();e(s,"animation-iteration-count",m),e(s,"animation-play-state","paused"),o&&e(s,"animation-name",`${d.id}-alt`),n((()=>{e(s,"animation-name",d.id||null)}))}}))},rn=(n=!0)=>{(()=>{q.forEach((n=>n())),B.forEach((n=>n()));const n=E,i=k,t=w;z.forEach((o=>{const a=o.classList;n.forEach((n=>a.add(n))),i.forEach((n=>a.remove(n)));for(const n in t)t.hasOwnProperty(n)&&e(o,n,t[n])}))})(),A.length>0&&(N?(z.forEach((n=>{const i=n.animate(A,{id:M,delay:en(),duration:nn(),easing:_(),iterations:tn(),fill:X(),direction:Y()});i.pause(),J.push(i)})),J.length>0&&(J[0].onfinish=()=>{on()})):an(n)),C=!0},sn=n=>{if(n=Math.min(Math.max(n,0),.9999),N)J.forEach((i=>{i.currentTime=i.effect.getComputedTiming().delay+nn()*n,i.pause()}));else{const i=`-${nn()*n}ms`;z.forEach((n=>{A.length>0&&(e(n,"animation-delay",i),e(n,"animation-play-state","paused"))}))}},ln=n=>{J.forEach((n=>{n.effect.updateTiming({delay:en(),duration:nn(),easing:_(),iterations:tn(),fill:X(),direction:Y()})})),void 0!==n&&sn(n)},dn=(i=!0,t)=>{n((()=>{z.forEach((o=>{e(o,"animation-name",$||null),e(o,"animation-duration",`${nn()}ms`),e(o,"animation-timing-function",_()),e(o,"animation-delay",void 0!==t?`-${t*nn()}ms`:`${en()}ms`),e(o,"animation-fill-mode",X()||null),e(o,"animation-direction",Y()||null);const a=tn()===1/0?"infinite":tn().toString();e(o,"animation-iteration-count",a),i&&e(o,"animation-name",`${$}-alt`),n((()=>{e(o,"animation-name",$||null)}))}))}))},mn=(n=!1,i=!0,t)=>(n&&P.forEach((e=>{e.update(n,i,t)})),N?ln(t):dn(i,t),b),fn=()=>{C&&(N?J.forEach((n=>{n.pause()})):z.forEach((n=>{e(n,"animation-play-state","paused")})))},cn=()=>{v=void 0,on()},un=()=>{v&&clearTimeout(v)},vn=i=>new Promise((t=>{i&&i.sync&&(D=!0,Q((()=>D=!1),{oneTimeCallback:!0})),C||rn(),I&&(N?(sn(0),ln()):dn(),I=!1),K&&(F=P.length+1,K=!1),Q((()=>t()),{oneTimeCallback:!0}),P.forEach((n=>{n.play()})),N?(J.forEach((n=>{n.play()})),0!==A.length&&0!==z.length||on()):(()=>{if(un(),n((()=>{z.forEach((n=>{A.length>0&&e(n,"animation-play-state","running")}))})),0===A.length||0===z.length)on();else{const i=en()||0,t=nn()||0,e=tn()||1;isFinite(e)&&(v=setTimeout(cn,i+t*e+100)),(i=>{let t;const e={passive:!0},a=e=>{i===e.target&&(t&&t(),un(),n((()=>{z.forEach((n=>{o(n,"animation-duration"),o(n,"animation-delay"),o(n,"animation-play-state")})),n(on)})))};i&&(i.addEventListener("webkitAnimationEnd",a,e),i.addEventListener("animationend",a,e),t=()=>{i.removeEventListener("webkitAnimationEnd",a,e),i.removeEventListener("animationend",a,e)})})(z[0])}})()})),yn=(n,i)=>{const t=A[0];return void 0===t||void 0!==t.offset&&0!==t.offset?A=[{offset:0,[n]:i},...A]:t[n]=i,b};return b={parentAnimation:u,elements:z,childAnimations:P,id:M,animationFinish:on,from:yn,to:(n,i)=>{const t=A[A.length-1];return void 0===t||void 0!==t.offset&&1!==t.offset?A=[...A,{offset:1,[n]:i}]:t[n]=i,b},fromTo:(n,i,t)=>yn(n,i).to(n,t),parent:n=>(u=n,b),play:vn,pause:()=>(P.forEach((n=>{n.pause()})),fn(),b),stop:()=>{P.forEach((n=>{n.stop()})),C&&(U(),C=!1),R=!1,D=!1,K=!0,y=void 0,p=void 0,g=void 0,F=0,I=!1,W=!0},destroy:n=>(P.forEach((i=>{i.destroy(n)})),(n=>{U(),n&&V()})(n),z.length=0,P.length=0,A.length=0,j.length=0,x.length=0,C=!1,K=!0,b),keyframes:n=>{const i=A!==n;return A=n,i&&(n=>{N?O().forEach((i=>{if(i.effect.setKeyframes)i.effect.setKeyframes(n);else{const t=new KeyframeEffect(i.effect.target,n,i.effect.getTiming());i.effect=t}})):an()})(A),b},addAnimation:n=>{if(null!=n)if(Array.isArray(n))for(const i of n)i.parent(b),P.push(i);else n.parent(b),P.push(n);return b},addElement:n=>{if(null!=n)if(1===n.nodeType)z.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)z.push(n[i]);else console.error("Invalid addElement value");return b},update:mn,fill:n=>(f=n,mn(!0),b),direction:n=>(c=n,mn(!0),b),iterations:n=>(m=n,mn(!0),b),duration:n=>(N||0!==n||(n=1),l=n,mn(!0),b),easing:n=>(d=n,mn(!0),b),delay:n=>(s=n,mn(!0),b),getWebAnimations:O,getKeyframes:()=>A,getFill:X,getDirection:Y,getDelay:en,getIterations:tn,getEasing:_,getDuration:nn,afterAddRead:n=>(G.push(n),b),afterAddWrite:n=>(H.push(n),b),afterClearStyles:(n=[])=>{for(const i of n)T[i]="";return b},afterStyles:(n={})=>(T=n,b),afterRemoveClass:n=>(S=r(S,n),b),afterAddClass:n=>(h=r(h,n),b),beforeAddRead:n=>(q.push(n),b),beforeAddWrite:n=>(B.push(n),b),beforeClearStyles:(n=[])=>{for(const i of n)w[i]="";return b},beforeStyles:(n={})=>(w=n,b),beforeRemoveClass:n=>(k=r(k,n),b),beforeAddClass:n=>(E=r(E,n),b),onFinish:Q,progressStart:(n=!1,i)=>(P.forEach((t=>{t.progressStart(n,i)})),fn(),R=n,C||rn(),mn(!1,!0,i),b),progressStep:n=>(P.forEach((i=>{i.progressStep(n)})),sn(n),b),progressEnd:(n,i,t)=>(R=!1,P.forEach((e=>{e.progressEnd(n,i,t)})),void 0!==t&&(p=t),I=!1,W=!0,0===n?(y="reverse"===Y()?"normal":"reverse","reverse"===y&&(W=!1),N?(mn(),sn(1-i)):(g=(1-i)*nn()*-1,mn(!1,!1))):1===n&&(N?(mn(),sn(i)):(g=i*nn()*-1,mn(!1,!1))),void 0!==n&&(Q((()=>{p=void 0,y=void 0,g=void 0}),{oneTimeCallback:!0}),u||vn()),b)}};export{s as c}