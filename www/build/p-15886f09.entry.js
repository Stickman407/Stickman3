import{r as t,c as o,d as n}from"./p-ab110788.js";import{d as r,o as e}from"./p-eeb914bf.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=t=>"/"+t.filter((t=>t.length>0)).join("/"),i=t=>{let o,n=[""];if(null!=t){const r=t.indexOf("?");r>-1&&(o=t.substr(r+1),t=t.substr(0,r)),n=t.split("/").map((t=>t.trim())).filter((t=>t.length>0)),0===n.length&&(n=[""])}return{segments:n,queryString:o}},a=async(t,o,n,e,s=!1,i)=>{try{const c=u(t);if(e>=o.length||!c)return s;await new Promise((t=>r(c,t)));const h=o[e],l=await c.setRouteId(h.id,h.params,n,i);return l.changed&&(n="root",s=!0),s=await a(l.element,o,n,e+1,s,i),l.markVisible&&await l.markVisible(),s}catch(t){return console.error(t),!1}},c=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",u=t=>{if(!t)return;if(t.matches(c))return t;const o=t.querySelector(c);return null!=o?o:void 0},h=(t,o)=>o.find((o=>((t,o)=>{const{from:n,to:r}=o;if(void 0===r)return!1;if(n.length>t.length)return!1;for(let o=0;o<n.length;o++){const r=n[o];if("*"===r)return!0;if(r!==t[o])return!1}return n.length===t.length})(t,o))),l=(t,o)=>{const n=Math.min(t.length,o.length);let r=0;for(let e=0;e<n;e++){const n=t[e],s=o[e];if(n.id.toLowerCase()!==s.id)break;if(n.params){const t=Object.keys(n.params);if(t.length===s.path.length){const o=t.map((t=>`:${t}`));for(let t=0;t<o.length&&o[t].toLowerCase()===s.path[t];t++)r++}}r++}return r},f=(t,o)=>{const n=new p(t);let r,e=!1;for(let t=0;t<o.length;t++){const s=o[t].path;if(""===s[0])e=!0;else{for(const o of s){const e=n.next();if(":"===o[0]){if(""===e)return null;r=r||[],(r[t]||(r[t]={}))[o.slice(1)]=e}else if(e!==o)return null}e=!1}}return e&&e!==(""===n.next())?null:r?o.map(((t,o)=>({id:t.id,path:t.path,params:d(t.params,r[o]),beforeEnter:t.beforeEnter,beforeLeave:t.beforeLeave}))):o},d=(t,o)=>t||o?Object.assign(Object.assign({},t),o):void 0,w=(t,o)=>{let n=null,r=0;for(const e of o){const o=f(t,e);if(null!==o){const t=m(o);t>r&&(r=t,n=o)}}return n},m=t=>{let o=1,n=1;for(const r of t)for(const t of r.path)":"===t[0]?o+=Math.pow(1,n):""!==t&&(o+=Math.pow(2,n)),n++;return o};class p{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const b=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,y=t=>Array.from(t.children).filter((t=>"ION-ROUTE-REDIRECT"===t.tagName)).map((t=>{const o=b(t,"to");return{from:i(b(t,"from")).segments,to:null==o?void 0:i(o)}})),g=t=>R(v(t)),v=t=>Array.from(t.children).filter((t=>"ION-ROUTE"===t.tagName&&t.component)).map((t=>{const o=b(t,"component");return{path:i(b(t,"url")).segments,id:o.toLowerCase(),params:t.componentProps,beforeLeave:t.beforeLeave,beforeEnter:t.beforeEnter,children:v(t)}})),R=t=>{const o=[];for(const n of t)C([],o,n);return o},C=(t,o,n)=>{if((t=t.slice()).push({id:n.id,path:n.path,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}),0!==n.children.length)for(const r of n.children)C(t,o,r);else o.push(t)};let E=class{constructor(n){t(this,n),this.ionRouteWillChange=o(this,"ionRouteWillChange",7),this.ionRouteDidChange=o(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){await(u(document.body)?Promise.resolve():new Promise((t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})})));const t=await this.runGuards(this.getPath());if(!0!==t){if("object"==typeof t){const{redirect:o}=t,n=i(o);this.setPath(n.segments,"root",n.queryString),await this.writeNavStateRoot(n.segments,"root")}}else await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",e(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",e(this.onRoutesChanged.bind(this),100))}async onPopState(){const t=this.historyDirection();let o=this.getPath();const n=await this.runGuards(o);if(!0!==n){if("object"!=typeof n)return!1;o=i(n.redirect).segments}return this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,(t=>{this.back(),t()}))}async canTransition(){const t=await this.runGuards();return!0===t||"object"==typeof t&&t.redirect}async push(t,o="forward",n){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);let r=i(t);const e=await this.runGuards(r.segments);if(!0!==e){if("object"!=typeof e)return!1;r=i(e.redirect)}return this.setPath(r.segments,o,r.queryString),this.writeNavStateRoot(r.segments,o,n)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach((o=>t.push(...o.path)));const n=o.map((t=>t.id));console.debug(`%c ${s(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${n.join(", ")})`)}console.groupEnd()})(g(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&console.debug("FROM: ",`$c ${s(o.from)}`,"font-weight: bold"," TO: ",`$c ${s(o.to.segments)}`,"font-weight: bold");console.groupEnd()})(y(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:n}=await(async()=>{const t=[];let o,n=window.document.body;for(;o=u(n),o;){const r=await o.getRouteId();if(!r)break;n=r.element,r.element=void 0,t.push(r)}return{ids:t,outlet:o}})(),r=((t,o)=>{let n=null,r=0;for(const e of o){const o=l(t,e);o>r&&(n=e,r=o)}return n?n.map(((o,n)=>({id:o.id,path:o.path,params:d(o.params,t[n]&&t[n].params)}))):null})(o,g(this.el));if(!r)return console.warn("[ion-router] no matching URL for ",o.map((t=>t.id))),!1;const e=(t=>{const o=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const r=n.params&&n.params[t.slice(1)];if(!r)return null;o.push(r)}else""!==t&&o.push(t);return o})(r);return e?(this.setPath(e,t),await this.safeWriteNavState(n,r,"root",e,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&h(t,y(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){var t;const o=window;null===o.history.state&&(this.state++,o.history.replaceState(this.state,o.document.title,null===(t=o.document.location)||void 0===t?void 0:t.href));const n=o.history.state,r=this.lastState;return this.lastState=n,n>r||n>=r&&r>0?"forward":n<r?"back":"root"}async writeNavStateRoot(t,o,n){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const r=y(this.el),e=h(t,r);let s=null;if(e){const{segments:n,queryString:r}=e.to;this.setPath(n,o,r),s=e.from,t=n}const i=g(this.el),a=w(t,i);return a?this.safeWriteNavState(document.body,a,o,t,s,0,n):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,n,r,e,s=0,i){const a=await this.lock();let c=!1;try{c=await this.writeNavState(t,o,n,r,e,s,i)}catch(t){console.error(t)}return a(),c}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise((t=>o=t)),void 0!==t&&await t,o}async runGuards(t=this.getPath(),o){if(void 0===o&&(o=i(this.previousPath).segments),!t||!o)return!0;const n=g(this.el),r=w(o,n),e=r&&r[r.length-1].beforeLeave,s=!e||await e();if(!1===s||"object"==typeof s)return s;const a=w(t,n),c=a&&a[a.length-1].beforeEnter;return!c||c()}async writeNavState(t,o,n,r,e,s=0,i){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const c=this.routeChangeEvent(r,e);c&&this.ionRouteWillChange.emit(c);const u=await a(t,o,n,s,!1,i);return this.busy=!1,c&&this.ionRouteDidChange.emit(c),u}setPath(t,o,n){this.state++,((t,o,n,r,e,a,c)=>{const u=((t,o,n)=>{let r=s(t);return o&&(r="#"+r),void 0!==n&&(r+="?"+n),r})([...i(o).segments,...r],n,c);"forward"===e?t.pushState(a,"",u):t.replaceState(a,"",u)})(window.history,this.root,this.useHash,t,o,this.state,n)}getPath(){return((t,o,n)=>{const r=i(this.root).segments,e=n?t.hash.slice(1):t.pathname;return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let n=0;n<t.length;n++)if(t[n]!==o[n])return null;return o.length===t.length?[""]:o.slice(t.length)})(r,i(e).segments)})(window.location,0,this.useHash)}routeChangeEvent(t,o){const n=this.previousPath,r=s(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:o?s(o):null,to:r}}get el(){return n(this)}};export{E as ion_router}