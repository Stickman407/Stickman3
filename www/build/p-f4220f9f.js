import{r as s,h as r,H as e}from"./p-ab110788.js";import{c as n,g as t}from"./p-826a76ac.js";import{c as i}from"./p-69e7783d.js";import{S as o}from"./p-a9ccb0df.js";let a=class{constructor(r){s(this,r),this.paused=!1}getName(){const s=this.name||n.get("spinner"),r=t(this);return s||("ios"===r?"lines":"circular")}render(){const s=this,a=t(s),c=s.getName(),h=o[c]||o.lines,f="number"==typeof s.duration&&s.duration>10?s.duration:h.dur,m=[];if(void 0!==h.circles)for(let s=0;s<h.circles;s++)m.push(l(h,f,s,h.circles));else if(void 0!==h.lines)for(let s=0;s<h.lines;s++)m.push(p(h,f,s,h.lines));return r(e,{class:i(s.color,{[a]:!0,[`spinner-${c}`]:!0,"spinner-paused":s.paused||n.getBoolean("_testing")}),role:"progressbar",style:h.elmDuration?{animationDuration:f+"ms"}:{}},m)}};const l=(s,e,n,t)=>{const i=s.fn(e,n,t);return i.style["animation-duration"]=e+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:s.elmDuration?{animationDuration:e+"ms"}:{}}))},p=(s,e,n,t)=>{const i=s.fn(e,n,t);return i.style["animation-duration"]=e+"ms",r("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},r("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};a.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;transform-origin:center;position:absolute;width:100%;height:100%;transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{animation:spinner-dots 1s linear infinite}:host(.spinner-circular){animation:spinner-circular linear infinite}:host(.spinner-circular) circle{animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{animation-play-state:paused}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-scale-out{0%{transform:scale(1, 1)}100%{transform:scale(0, 0)}}@keyframes spinner-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes spinner-dots{0%{transform:scale(1, 1);opacity:0.9}50%{transform:scale(0.4, 0.4);opacity:0.3}100%{transform:scale(1, 1);opacity:0.9}}@keyframes spinner-circular{100%{transform:rotate(360deg)}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";export{a as S}