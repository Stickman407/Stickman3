import{r as t,h as s,H as a,d as o}from"./p-ab110788.js";import{g as i,c as e,a as n}from"./p-826a76ac.js";let p=class{constructor(s){t(this,s)}componentDidLoad(){d((async()=>{const t=n(window,"hybrid");e.getBoolean("_testing")||import("./p-ed28a913.js").then((t=>t.startTapClick(e))),e.getBoolean("statusTap",t)&&import("./p-c049446e.js").then((t=>t.startStatusTap())),e.getBoolean("inputShims",r())&&import("./p-12371f4e.js").then((t=>t.startInputShims(e)));const s=await import("./p-6fd4985d.js");e.getBoolean("hardwareBackButton",t)?s.startHardwareBackButton():s.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-5264da79.js").then((t=>t.startKeyboardAssist(window))),import("./p-d4c07aca.js").then((t=>this.focusVisible=t.startFocusVisible()))}))}async setFocus(t){this.focusVisible&&this.focusVisible.setFocus(t)}render(){const t=i(this);return s(a,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":e.getBoolean("_forceStatusbarPadding")}})}get el(){return o(this)}};const r=()=>n(window,"ios")&&n(window,"mobile"),d=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};p.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";export{p as ion_app}