import{r as t,c as i,h as e,H as n,d as o}from"./p-ab110788.js";import{g as r}from"./p-826a76ac.js";import{h as s,i as a}from"./p-eeb914bf.js";import{o as c,c as h,h as l}from"./p-69e7783d.js";export{R as ion_ripple_effect}from"./p-2d2db900.js";let u=class{constructor(e){t(this,e),this.ionFocus=i(this,"ionFocus",7),this.ionBlur=i(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.inheritedAttributes={},this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=t=>{if("button"===this.type)c(this.href,t,this.routerDirection,this.routerAnimation);else if(s(this.el)){const i=this.el.closest("form");if(i){t.preventDefault();const e=document.createElement("button");e.type=this.type,e.style.display="none",i.appendChild(e),e.click(),e.remove()}}},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}componentWillLoad(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider"),this.inheritedAttributes=a(this.el,["aria-label"])}get hasIconOnly(){return!!this.el.querySelector('[slot="icon-only"]')}get rippleType(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}render(){const t=r(this),{buttonType:i,type:o,disabled:s,rel:a,target:c,size:u,href:d,color:f,expand:p,hasIconOnly:b,shape:g,strong:m,inheritedAttributes:v}=this,w=void 0===u&&this.inItem?"small":u,y=void 0===d?"button":"a",k="button"===y?{type:o}:{download:this.download,href:d,rel:a,target:c};let I=this.fill;return void 0===I&&(I=this.inToolbar||this.inListHeader?"clear":"solid"),e(n,{onClick:this.handleClick,"aria-disabled":s?"true":null,class:h(f,{[t]:!0,[i]:!0,[`${i}-${p}`]:void 0!==p,[`${i}-${w}`]:void 0!==w,[`${i}-${g}`]:void 0!==g,[`${i}-${I}`]:!0,[`${i}-strong`]:m,"in-toolbar":l("ion-toolbar",this.el),"in-toolbar-color":l("ion-toolbar[color]",this.el),"button-has-icon-only":b,"button-disabled":s,"ion-activatable":!0,"ion-focusable":!0})},e(y,Object.assign({},k,{class:"button-native",part:"native",disabled:s,onFocus:this.onFocus,onBlur:this.onBlur},v),e("span",{class:"button-inner"},e("slot",{name:"icon-only"}),e("slot",{name:"start"}),e("slot",null),e("slot",{name:"end"})),"md"===t&&e("ion-ripple-effect",{type:this.rippleType})))}get el(){return o(this)}};u.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;box-sizing:border-box;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};
/**
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
 */
/**
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
 */
const d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,i){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const o=t[i],r=i+1<t.length,s=r?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0;let h=(15&s)<<2|c>>6,l=63&c;a||(l=64,r||(h=64)),n.push(e[o>>2],e[(3&o)<<4|s>>4],e[h],e[l])}return n.join("")},encodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(t):this.encodeByteArray(function(t){const i=[];let e=0;for(let n=0;n<t.length;n++){let o=t.charCodeAt(n);o<128?i[e++]=o:o<2048?(i[e++]=o>>6|192,i[e++]=63&o|128):55296==(64512&o)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),i[e++]=o>>18|240,i[e++]=o>>12&63|128,i[e++]=o>>6&63|128,i[e++]=63&o|128):(i[e++]=o>>12|224,i[e++]=o>>6&63|128,i[e++]=63&o|128)}return i}(t),i)},decodeString(t,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(t):function(t){const i=[];let e=0,n=0;for(;e<t.length;){const o=t[e++];if(o<128)i[n++]=String.fromCharCode(o);else if(o>191&&o<224){const r=t[e++];i[n++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=((7&o)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536;i[n++]=String.fromCharCode(55296+(r>>10)),i[n++]=String.fromCharCode(56320+(1023&r))}else{const r=t[e++],s=t[e++];i[n++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return i.join("")}(this.decodeStringToByteArray(t,i))},decodeStringToByteArray(t,i){this.init_();const e=i?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const o=e[t.charAt(i++)],r=i<t.length?e[t.charAt(i)]:0;++i;const s=i<t.length?e[t.charAt(i)]:64;++i;const a=i<t.length?e[t.charAt(i)]:64;if(++i,null==o||null==r||null==s||null==a)throw Error();n.push(o<<2|r>>4),64!==s&&(n.push(r<<4&240|s>>2),64!==a&&n.push(s<<6&192|a))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */
class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}wrapCallback(t){return(i,e)=>{i?this.reject(i):this.resolve(e),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(i):t(i,e))}}}
/**
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
 */function p(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function b(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class g extends Error{constructor(t,i,e){super(i),this.code=t,this.customData=e,this.name="FirebaseError",Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(t,i,e){this.service=t,this.serviceName=i,this.errors=e}create(t,...i){const e=i[0]||{},n=`${this.service}/${t}`,o=this.errors[t],r=o?function(t,i){return t.replace(v,((t,e)=>{const n=i[e];return null!=n?String(n):`<${e}?>`}))}(o,e):"Error";return new g(n,`${this.serviceName}: ${r} (${n}).`,e)}}const v=/\{\$([^}]+)}/g;function w(t,i){if(t===i)return!0;const e=Object.keys(t),n=Object.keys(i);for(const o of e){if(!n.includes(o))return!1;const e=t[o],r=i[o];if(y(e)&&y(r)){if(!w(e,r))return!1}else if(e!==r)return!1}for(const t of n)if(!e.includes(t))return!1;return!0}function y(t){return null!==t&&"object"==typeof t}
/**
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
 */function k(t){const i=[];for(const[e,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{i.push(encodeURIComponent(e)+"="+encodeURIComponent(t))})):i.push(encodeURIComponent(e)+"="+encodeURIComponent(n));return i.length?"&"+i.join("&"):""}class I{constructor(t,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((i=>{i.next(t)}))}error(t){this.forEachObserver((i=>{i.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,i,e){let n;if(void 0===t&&void 0===i&&void 0===e)throw new Error("Missing Observer.");n=function(t){if("object"!=typeof t||null===t)return!1;for(const i of["next","error","complete"])if(i in t&&"function"==typeof t[i])return!0;return!1}(t)?t:{next:t,error:i,complete:e},void 0===n.next&&(n.next=x),void 0===n.error&&(n.error=x),void 0===n.complete&&(n.complete=x);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,t)}sendOne(t,i){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{i(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function x(){}
/**
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
 */function _(t,i=1e3,e=2){const n=i*Math.pow(e,t),o=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(144e5,n+o)}
/**
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
 */function T(t){return t&&t._delegate?t._delegate:t}class E{constructor(t,i,e){this.name=t,this.instanceFactory=i,this.type=e,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */
/**
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
 */
class S{constructor(t,i){this.name=t,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const i=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(i)){const t=new f;if(this.instancesDeferred.set(i,t),this.isInitialized(i)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:i});e&&t.resolve(e)}catch(t){}}return this.instancesDeferred.get(i).promise}getImmediate(t){var i;const e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(i=null==t?void 0:t.optional)&&void 0!==i&&i;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:e});i.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:i={}}=t,e=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(e))throw Error(`${this.name}(${e}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:e,options:i});for(const[t,i]of this.instancesDeferred.entries())e===this.normalizeInstanceIdentifier(t)&&i.resolve(n);return n}onInit(t,i){var e;const n=this.normalizeInstanceIdentifier(i),o=null!==(e=this.onInitCallbacks.get(n))&&void 0!==e?e:new Set;o.add(t),this.onInitCallbacks.set(n,o);const r=this.instances.get(n);return r&&t(r,n),()=>{o.delete(t)}}invokeOnInitCallbacks(t,i){const e=this.onInitCallbacks.get(i);if(e)for(const n of e)try{n(t,i)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:i={}}){let e=this.instances.get(t);if(!e&&this.component&&(e=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,"[DEFAULT]"===n?void 0:n),options:i}),this.instances.set(t,e),this.instancesOptions.set(t,i),this.invokeOnInitCallbacks(e,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,e)}catch(t){}var n;return e||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class O{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const i=this.getProvider(t.name);if(i.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);i.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const i=new S(t,this);return this.providers.set(t,i),i}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */var A;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(A||(A={}));const N={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},D=A.INFO,P={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},C=(t,i,...e)=>{if(i<t.logLevel)return;const n=(new Date).toISOString(),o=P[i];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${i})`);console[o](`[${n}]  ${t.name}:`,...e)};class ${constructor(t){this.name=t,this._logLevel=D,this._logHandler=C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in A))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?N[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...t),this._logHandler(this,A.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...t),this._logHandler(this,A.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,A.INFO,...t),this._logHandler(this,A.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,A.WARN,...t),this._logHandler(this,A.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...t),this._logHandler(this,A.ERROR,...t)}}
/**
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
 */class L{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const i=t.getComponent();return"VERSION"===(null==i?void 0:i.type)}(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}return null})).filter((t=>t)).join(" ")}}const j="@firebase/app",M=new $("@firebase/app"),F={[j]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},z=new Map,U=new Map;function B(t,i){try{t.container.addComponent(i)}catch(e){M.debug(`Component ${i.name} failed to register with FirebaseApp ${t.name}`,e)}}function V(t){const i=t.name;if(U.has(i))return M.debug(`There were multiple attempts to register component ${i}.`),!1;U.set(i,t);for(const i of z.values())B(i,t);return!0}function q(t,i){return t.container.getProvider(i)}
/**
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
 */const K=new m("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
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
 */
class G{constructor(t,i,e){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=e,this.container.addComponent(new E("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
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
 */function J(t="[DEFAULT]"){const i=z.get(t);if(!i)throw K.create("no-app",{appName:t});return i}function H(t,i,e){var n;let o=null!==(n=F[t])&&void 0!==n?n:t;e&&(o+=`-${e}`);const r=o.match(/\s|\//),s=i.match(/\s|\//);if(r||s){const t=[`Unable to register library "${o}" with version "${i}":`];return r&&t.push(`library name "${o}" contains illegal characters (whitespace or "/")`),r&&s&&t.push("and"),s&&t.push(`version name "${i}" contains illegal characters (whitespace or "/")`),void M.warn(t.join(" "))}V(new E(`${o}-version`,(()=>({library:o,version:i})),"VERSION"))}
/**
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
 */V(new E("platform-logger",(t=>new L(t)),"PRIVATE")),H(j,"0.7.14",""),H(j,"0.7.14","esm2017"),H("fire-js",""),
/**
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
 */
H("firebase","9.6.4","app"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var W,X=(function(t){function i(t){return Array.prototype.slice.call(t)}function e(t){return new Promise((function(i,e){t.onsuccess=function(){i(t.result)},t.onerror=function(){e(t.error)}}))}function n(t,i,n){var o,r=new Promise((function(r,s){e(o=t[i].apply(t,n)).then(r,s)}));return r.request=o,r}function o(t,i,e){var o=n(t,i,e);return o.then((function(t){if(t)return new l(t,o.request)}))}function r(t,i,e){e.forEach((function(e){Object.defineProperty(t.prototype,e,{get:function(){return this[i][e]},set:function(t){this[i][e]=t}})}))}function s(t,i,e,o){o.forEach((function(o){o in e.prototype&&(t.prototype[o]=function(){return n(this[i],o,arguments)})}))}function a(t,i,e,n){n.forEach((function(n){n in e.prototype&&(t.prototype[n]=function(){return this[i][n].apply(this[i],arguments)})}))}function c(t,i,e,n){n.forEach((function(n){n in e.prototype&&(t.prototype[n]=function(){return o(this[i],n,arguments)})}))}function h(t){this._index=t}function l(t,i){this._cursor=t,this._request=i}function u(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(i,e){t.oncomplete=function(){i()},t.onerror=function(){e(t.error)},t.onabort=function(){e(t.error)}}))}function f(t,i,e){this._db=t,this.oldVersion=i,this.transaction=new d(e)}function p(t){this._db=t}r(h,"_index",["name","keyPath","multiEntry","unique"]),s(h,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(h,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(l.prototype[t]=function(){var i=this,n=arguments;return Promise.resolve().then((function(){return i._cursor[t].apply(i._cursor,n),e(i._request).then((function(t){if(t)return new l(t,i._request)}))}))})})),u.prototype.createIndex=function(){return new h(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new h(this._store.index.apply(this._store,arguments))},r(u,"_store",["name","keyPath","indexNames","autoIncrement"]),s(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(u,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[u,h].forEach((function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=i(arguments),n=e[e.length-1],o=this._store||this._index,r=o[t].apply(o,e.slice(0,-1));r.onsuccess=function(){n(r.result)}})}))})),[h,u].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,i){var e=this,n=[];return new Promise((function(o){e.iterateCursor(t,(function(t){t?(n.push(t.value),void 0===i||n.length!=i?t.continue():o(n)):o(n)}))}))})})),t.openDb=function(t,i,e){var o=n(indexedDB,"open",[t,i]),r=o.request;return r&&(r.onupgradeneeded=function(t){e&&e(new f(r.result,t.oldVersion,r.transaction))}),o.then((function(t){return new p(t)}))},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})}((W={path:void 0,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}).exports),W.exports);const Y="@firebase/installations",Z=new m("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Q(t){return t instanceof g&&t.code.includes("request-failed")}
/**
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
 */function tt({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function it(t){return{token:t.token,requestStatus:2,expiresIn:(i=t.expiresIn,Number(i.replace("s","000"))),creationTime:Date.now()};var i}async function et(t,i){const e=(await i.json()).error;return Z.create("request-failed",{requestName:t,serverCode:e.code,serverMessage:e.message,serverStatus:e.status})}function nt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function ot(t){const i=await t();return i.status>=500&&i.status<600?t():i}
/**
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
 */
function rt(t){return new Promise((i=>{setTimeout(i,t)}))}
/**
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
 */
/**
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
 */
const st=/^[cdef][\w-]{21}$/;function at(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const i=function(t){return(i=t,btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var i}
/**
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
 */(t);return st.test(i)?i:""}catch(t){return""}}function ct(t){return`${t.appName}!${t.appId}`}
/**
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
 */const ht=new Map;function lt(t,i){const e=ct(t);ut(e,i),function(t,i){const e=(!dt&&"BroadcastChannel"in self&&(dt=new BroadcastChannel("[Firebase] FID Change"),dt.onmessage=t=>{ut(t.data.key,t.data.fid)}),dt);e&&e.postMessage({key:t,fid:i}),0===ht.size&&dt&&(dt.close(),dt=null)}(e,i)}function ut(t,i){const e=ht.get(t);if(e)for(const t of e)t(i)}let dt=null;
/**
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
 */
const ft="firebase-installations-store";let pt=null;function bt(){return pt||(pt=X.openDb("firebase-installations-database",1,(t=>{switch(t.oldVersion){case 0:t.createObjectStore(ft)}}))),pt}async function gt(t,i){const e=ct(t),n=(await bt()).transaction(ft,"readwrite"),o=n.objectStore(ft),r=await o.get(e);return await o.put(i,e),await n.complete,r&&r.fid===i.fid||lt(t,i.fid),i}async function mt(t){const i=ct(t),e=(await bt()).transaction(ft,"readwrite");await e.objectStore(ft).delete(i),await e.complete}async function vt(t,i){const e=ct(t),n=(await bt()).transaction(ft,"readwrite"),o=n.objectStore(ft),r=await o.get(e),s=i(r);return void 0===s?await o.delete(e):await o.put(s,e),await n.complete,!s||r&&r.fid===s.fid||lt(t,s.fid),s}
/**
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
 */async function wt(t){let i;const e=await vt(t,(e=>{const n=function(t){return It(t||{fid:at(),registrationStatus:0})}(e),o=function(t,i){if(0===i.registrationStatus){if(!navigator.onLine)return{installationEntry:i,registrationPromise:Promise.reject(Z.create("app-offline"))};const e={fid:i.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:e,registrationPromise:async function(t,i){try{return gt(t,await
/**
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
 */
async function(t,{fid:i}){const e=tt(t),n={method:"POST",headers:nt(t),body:JSON.stringify({fid:i,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.5.5"})},o=await ot((()=>fetch(e,n)));if(o.ok){const t=await o.json();return{fid:t.fid||i,registrationStatus:2,refreshToken:t.refreshToken,authToken:it(t.authToken)}}throw await et("Create Installation",o)}(t,i))}catch(e){throw Q(e)&&409===e.customData.serverCode?await mt(t):await gt(t,{fid:i.fid,registrationStatus:0}),e}}(t,e)}}return 1===i.registrationStatus?{installationEntry:i,registrationPromise:yt(t)}:{installationEntry:i}}(t,n);return i=o.registrationPromise,o.installationEntry}));return""===e.fid?{installationEntry:await i}:{installationEntry:e,registrationPromise:i}}async function yt(t){let i=await kt(t);for(;1===i.registrationStatus;)await rt(100),i=await kt(t);if(0===i.registrationStatus){const{installationEntry:i,registrationPromise:e}=await wt(t);return e||i}return i}function kt(t){return vt(t,(t=>{if(!t)throw Z.create("installation-not-found");return It(t)}))}function It(t){return 1===(i=t).registrationStatus&&i.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var i;
/**
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
 */}async function xt({appConfig:t,platformLoggerProvider:i},e){const n=function(t,{fid:i}){return`${tt(t)}/${i}/authTokens:generate`}
/**
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
 */(t,e),o=function(t,{refreshToken:i}){const e=nt(t);return e.append("Authorization",function(t){return`FIS_v2 ${t}`}(i)),e}(t,e),r=i.getImmediate({optional:!0});r&&o.append("x-firebase-client",r.getPlatformInfoString());const s={method:"POST",headers:o,body:JSON.stringify({installation:{sdkVersion:"w:0.5.5"}})},a=await ot((()=>fetch(n,s)));if(a.ok)return it(await a.json());throw await et("Generate Auth Token",a)}async function _t(t,i=!1){let e;const n=await vt(t.appConfig,(n=>{if(!Et(n))throw Z.create("not-registered");const o=n.authToken;if(!i&&(2===(r=o).requestStatus&&!function(t){const i=Date.now();return i<t.creationTime||t.creationTime+t.expiresIn<i+36e5}(r)))return n;var r;if(1===o.requestStatus)return e=async function(t,i){let e=await Tt(t.appConfig);for(;1===e.authToken.requestStatus;)await rt(100),e=await Tt(t.appConfig);const n=e.authToken;return 0===n.requestStatus?_t(t,i):n}(t,i),n;{if(!navigator.onLine)throw Z.create("app-offline");const i=function(t){const i={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:i})}(n);return e=async function(t,i){try{const e=await xt(t,i),n=Object.assign(Object.assign({},i),{authToken:e});return await gt(t.appConfig,n),e}catch(e){if(!Q(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode){const e=Object.assign(Object.assign({},i),{authToken:{requestStatus:0}});await gt(t.appConfig,e)}else await mt(t.appConfig);throw e}}(t,i),i}}));return e?await e:n.authToken}function Tt(t){return vt(t,(t=>{if(!Et(t))throw Z.create("not-registered");return 1===(i=t.authToken).requestStatus&&i.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var i;
/**
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
 */}))}function Et(t){return void 0!==t&&2===t.registrationStatus}function St(t){return Z.create("missing-app-config-values",{valueName:t})}
/**
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
 */V(new E("installations",(t=>{const i=t.getProvider("app").getImmediate();return{app:i,appConfig:
/**
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
 */
function(t){if(!t||!t.options)throw St("App Configuration");if(!t.name)throw St("App Name");const i=["projectId","apiKey","appId"];for(const e of i)if(!t.options[e])throw St(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(i),platformLoggerProvider:q(i,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),V(new E("installations-internal",(t=>{const i=q(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const i=t,{installationEntry:e,registrationPromise:n}=await wt(i.appConfig);return n?n.catch(console.error):_t(i).catch(console.error),e.fid}
/**
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
 */(i),getToken:t=>async function(t,i=!1){const e=t;return await async function(t){const{registrationPromise:i}=await wt(t);i&&await i}(e.appConfig),(await _t(e,i)).token}(i,t)}}),"PRIVATE")),H(Y,"0.5.5"),H(Y,"0.5.5","esm2017");
/**
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
 */
const Ot="https://www.googletagmanager.com/gtag/js",At=new $("@firebase/analytics");
/**
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
 */
function Nt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}
/**
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
 */
const Dt=new m("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),Pt=new class{constructor(t={},i=1e3){this.throttleMetadata=t,this.intervalMillis=i}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,i){this.throttleMetadata[t]=i}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Ct(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Rt(t,i=Pt,e){const{appId:n,apiKey:o,measurementId:r}=t.options;if(!n)throw Dt.create("no-app-id");if(!o){if(r)return{measurementId:r,appId:n};throw Dt.create("no-api-key")}const s=i.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Lt;return setTimeout((async()=>{a.abort()}),void 0!==e?e:6e4),$t({appId:n,apiKey:o,measurementId:r},s,a,i)}async function $t(t,{throttleEndTimeMillis:i,backoffCount:e},n,o=Pt){const{appId:r,measurementId:s}=t;try{await function(t,i){return new Promise(((e,n)=>{const o=Math.max(i-Date.now(),0),r=setTimeout(e,o);t.addEventListener((()=>{clearTimeout(r),n(Dt.create("fetch-throttle",{throttleEndTimeMillis:i}))}))}))}(n,i)}catch(t){if(s)return At.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:s};throw t}try{const i=await async function(t){var i;const{appId:e,apiKey:n}=t,o={method:"GET",headers:Ct(n)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",e),s=await fetch(r,o);if(200!==s.status&&304!==s.status){let t="";try{const e=await s.json();(null===(i=e.error)||void 0===i?void 0:i.message)&&(t=e.error.message)}catch(t){}throw Dt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}(t);return o.deleteThrottleMetadata(r),i}catch(i){if(!function(t){if(!(t instanceof g&&t.customData))return!1;const i=Number(t.customData.httpStatus);return 429===i||500===i||503===i||504===i}(i)){if(o.deleteThrottleMetadata(r),s)return At.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${i.message}]`),{appId:r,measurementId:s};throw i}const a=503===Number(i.customData.httpStatus)?_(e,o.intervalMillis,30):_(e,o.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:e+1};return o.setThrottleMetadata(r,c),At.debug(`Calling attemptFetch again in ${a} millis`),$t(t,c,n,o)}}class Lt{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
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
 */async function jt(t,i,e,n,o,r,s){var a;const c=Rt(t);c.then((i=>{e[i.measurementId]=i.appId,t.options.measurementId&&i.measurementId!==t.options.measurementId&&At.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${i.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>At.error(t))),i.push(c);const h=async function(){if("object"!=typeof indexedDB)return At.warn(Dt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,i)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=()=>{o.result.close(),e||self.indexedDB.deleteDatabase(n),t(!0)},o.onupgradeneeded=()=>{e=!1},o.onerror=()=>{var t;i((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(t){i(t)}}))}catch(t){return At.warn(Dt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}().then((t=>t?n.getId():void 0)),[l,u]=await Promise.all([c,h]);(function(){const t=window.document.getElementsByTagName("script");for(const i of Object.values(t))if(i.src&&i.src.includes(Ot))return i;return null})()||function(t,i){const e=document.createElement("script");e.src=`${Ot}?l=${t}&id=${i}`,e.async=!0,document.head.appendChild(e)}(r,l.measurementId),o("js",new Date);const d=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),o("config",l.measurementId,d),l.measurementId}
/**
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
 */class Mt{constructor(t){this.app=t}_delete(){return delete Ft[this.app.options.appId],Promise.resolve()}}let Ft={},zt=[];const Ut={};let Bt,Vt,qt=!1;function Kt(t,i,e){!function(){const t=[];if(b()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const i=t.map(((t,i)=>`(${i+1}) ${t}`)).join(" "),e=Dt.create("invalid-analytics-context",{errorInfo:i});At.warn(e.message)}}();const n=t.options.appId;if(!n)throw Dt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Dt.create("no-api-key");At.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ft[n])throw Dt.create("already-exists",{id:n});if(!qt){!function(){let t=[];Array.isArray(window.dataLayer)?t=window.dataLayer:window.dataLayer=t}();const{wrappedGtag:t,gtagCore:i}=function(t,i,e){let n=function(){window.dataLayer.push(arguments)};return window.gtag&&"function"==typeof window.gtag&&(n=window.gtag),window.gtag=function(t,i,e,n){return async function(o,r,s){try{"event"===o?await async function(t,i,e,n,o){try{let r=[];if(o&&o.send_to){let t=o.send_to;Array.isArray(t)||(t=[t]);const n=await Nt(e);for(const e of t){const t=n.find((t=>t.measurementId===e)),o=t&&i[t.appId];if(!o){r=[];break}r.push(o)}}0===r.length&&(r=Object.values(i)),await Promise.all(r),t("event",n,o||{})}catch(t){At.error(t)}}(t,i,e,r,s):"config"===o?await async function(t,i,e,n,o,r){const s=n[o];try{if(s)await i[s];else{const t=(await Nt(e)).find((t=>t.measurementId===o));t&&await i[t.appId]}}catch(t){At.error(t)}t("config",o,r)}(t,i,e,n,r,s):t("set",r)}catch(t){At.error(t)}}}(n,t,i,e),{gtagCore:n,wrappedGtag:window.gtag}}(Ft,zt,Ut);Vt=t,Bt=i,qt=!0}return Ft[n]=jt(t,zt,Ut,i,Bt,"dataLayer",e),new Mt(t)}
/**
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
 */const Gt="@firebase/analytics";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Jt(t,i){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)i.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e}V(new E("analytics",((t,{options:i})=>Kt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),i)),"PUBLIC")),V(new E("analytics-internal",(function(t){try{const i=t.getProvider("analytics").getImmediate();return{logEvent:(t,e,n)=>function(t,i,e,n){t=T(t),async function(t,i,e,n,o){if(o&&o.global)t("event",e,n);else{const o=await i;t("event",e,Object.assign(Object.assign({},n),{send_to:o}))}}(Vt,Ft[t.app.options.appId],i,e,n).catch((t=>At.error(t)))}(i,t,e,n)}}catch(t){throw Dt.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),H(Gt,"0.7.5"),H(Gt,"0.7.5","esm2017");const Ht=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},Wt=new m("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Xt=new $("@firebase/auth");function Yt(t,...i){Xt.logLevel<=A.ERROR&&Xt.error(`Auth (9.6.4): ${t}`,...i)}
/**
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
 */function Zt(t,...i){throw ii(t,...i)}function Qt(t,...i){return ii(t,...i)}function ti(t,i,e){const n=Object.assign(Object.assign({},Ht()),{[i]:e});return new m("auth","Firebase",n).create(i,{appName:t.name})}function ii(t,...i){if("string"!=typeof t){const e=i[0],n=[...i.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(e,...n)}return Wt.create(t,...i)}function ei(t,i,...e){if(!t)throw ii(i,...e)}function ni(t){const i="INTERNAL ASSERTION FAILED: "+t;throw Yt(i),new Error(i)}function oi(t,i){t||ni(i)}
/**
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
 */const ri=new Map;function si(t){oi(t instanceof Function,"Expected a class definition");let i=ri.get(t);return i?(oi(i instanceof t,"Instance stored in cache mismatched with class"),i):(i=new t,ri.set(t,i),i)}
/**
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
 */
/**
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
 */
function ai(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ci(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */
/**
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
 */
class hi{constructor(t,i){this.shortDelay=t,this.longDelay=i,oi(i>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(p())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===ci()||"https:"===ci()||b()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
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
 */function li(t,i){oi(t.emulator,"Emulator should always be set here");const{url:e}=t.emulator;return i?`${e}${i.startsWith("/")?i.slice(1):i}`:e}
/**
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
 */class ui{static initialize(t,i,e){this.fetchImpl=t,i&&(this.headersImpl=i),e&&(this.responseImpl=e)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ni("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ni("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ni("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const di={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},fi=new hi(3e4,6e4);
/**
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
 */async function pi(t,i,e,n,o={}){return bi(t,o,(async()=>{let o={},r={};n&&("GET"===i?r=n:o={body:JSON.stringify(n)});const s=k(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ui.fetch()(gi(t,t.config.apiHost,e,s),Object.assign({method:i,headers:a,referrerPolicy:"no-referrer"},o))}))}async function bi(t,i,e){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},di),i);try{const i=new mi(t),o=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw vi(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const i=o.ok?r.errorMessage:r.error.message,[e,s]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw vi(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===e)throw vi(t,"email-already-in-use",r);const a=n[e]||e.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw ti(t,a,s);Zt(t,a)}}catch(i){if(i instanceof g)throw i;Zt(t,"network-request-failed")}}function gi(t,i,e,n){const o=`${i}${e}?${n}`;return t.config.emulator?li(t.config,o):`${t.config.apiScheme}://${o}`}class mi{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,i)=>{this.timer=setTimeout((()=>i(Qt(this.auth,"network-request-failed"))),fi.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function vi(t,i,e){const n={appName:t.name};e.email&&(n.email=e.email),e.phoneNumber&&(n.phoneNumber=e.phoneNumber);const o=Qt(t,i,n);return o.customData._tokenResponse=e,o}
/**
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
 */
/**
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
 */
function wi(t){if(t)try{const i=new Date(Number(t));if(!isNaN(i.getTime()))return i.toUTCString()}catch(t){}}function yi(t){return 1e3*Number(t)}function ki(t){const[i,e,n]=t.split(".");if(void 0===i||void 0===e||void 0===n)return Yt("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return d.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(e);return t?JSON.parse(t):(Yt("Failed to decode base64 JWT payload"),null)}catch(t){return Yt("Caught error parsing JWT payload as JSON",t),null}}
/**
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
 */
async function Ii(t,i,e=!1){if(e)return i;try{return await i}catch(i){throw i instanceof g&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}class xi{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var i;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(i=this.user.stsTokenManager.expirationTime)&&void 0!==i?i:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const i=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),i)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
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
 */class _i{constructor(t,i){this.createdAt=t,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Ti(t){var i;const e=t.auth,n=await t.getIdToken(),o=await Ii(t,async function(t,i){return pi(t,"POST","/v1/accounts:lookup",i)}(e,{idToken:n}));ei(null==o?void 0:o.users.length,e,"internal-error");const r=o.users[0];t._notifyReloadListener(r);const s=(null===(i=r.providerUserInfo)||void 0===i?void 0:i.length)?r.providerUserInfo.map((t=>{var{providerId:i}=t,e=Jt(t,["providerId"]);return{providerId:i,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}})):[],a=(c=s,[...t.providerData.filter((t=>!c.some((i=>i.providerId===t.providerId)))),...c]);var c;const h=!!t.isAnonymous&&!(t.email&&r.passwordHash||(null==a?void 0:a.length)),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new _i(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,l)}
/**
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
 */
class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ei(t.idToken,"internal-error"),ei(void 0!==t.idToken,"internal-error"),ei(void 0!==t.refreshToken,"internal-error");const i="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const i=ki(t);return ei(i,"internal-error"),ei(void 0!==i.exp,"internal-error"),ei(void 0!==i.iat,"internal-error"),Number(i.exp)-Number(i.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,i)}async getToken(t,i=!1){return ei(!this.accessToken||this.refreshToken,t,"user-token-expired"),i||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,i){const{accessToken:e,refreshToken:n,expiresIn:o}=await
/**
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
 */
async function(t,i){const e=await bi(t,{},(async()=>{const e=k({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:n,apiKey:o}=t.config,r=gi(t,n,"/v1/token",`key=${o}`),s=await t._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",ui.fetch()(r,{method:"POST",headers:s,body:e})}));return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}(t,i);this.updateTokensAndExpiration(e,n,Number(o))}updateTokensAndExpiration(t,i,e){this.refreshToken=i||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*e}static fromJSON(t,i){const{refreshToken:e,accessToken:n,expirationTime:o}=i,r=new Ei;return e&&(ei("string"==typeof e,"internal-error",{appName:t}),r.refreshToken=e),n&&(ei("string"==typeof n,"internal-error",{appName:t}),r.accessToken=n),o&&(ei("number"==typeof o,"internal-error",{appName:t}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return ni("not implemented")}}
/**
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
 */function Si(t,i){ei("string"==typeof t||void 0===t,"internal-error",{appName:i})}class Oi{constructor(t){var{uid:i,auth:e,stsTokenManager:n}=t,o=Jt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new xi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=e,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.metadata=new _i(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const i=await Ii(this,this.stsTokenManager.getToken(this.auth,t));return ei(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(t){return async function(t,i=!1){const e=T(t),n=await e.getIdToken(i),o=ki(n);ei(o&&o.exp&&o.auth_time&&o.iat,e.auth,"internal-error");const r="object"==typeof o.firebase?o.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:o,token:n,authTime:wi(yi(o.auth_time)),issuedAtTime:wi(yi(o.iat)),expirationTime:wi(yi(o.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const i=T(t);await Ti(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}(this)}_assign(t){this!==t&&(ei(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Oi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ei(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,i=!1){let e=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),e=!0),i&&await Ti(this),await this.auth._persistUserIfCurrent(this),e&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ii(this,async function(t,i){return pi(t,"POST","/v1/accounts:delete",i)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,i){var e,n,o,r,s,a,c,h;const l=null!==(e=i.displayName)&&void 0!==e?e:void 0,u=null!==(n=i.email)&&void 0!==n?n:void 0,d=null!==(o=i.phoneNumber)&&void 0!==o?o:void 0,f=null!==(r=i.photoURL)&&void 0!==r?r:void 0,p=null!==(s=i.tenantId)&&void 0!==s?s:void 0,b=null!==(a=i._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=i.createdAt)&&void 0!==c?c:void 0,m=null!==(h=i.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:w,isAnonymous:y,providerData:k,stsTokenManager:I}=i;ei(v&&I,t,"internal-error");const x=Ei.fromJSON(this.name,I);ei("string"==typeof v,t,"internal-error"),Si(l,t.name),Si(u,t.name),ei("boolean"==typeof w,t,"internal-error"),ei("boolean"==typeof y,t,"internal-error"),Si(d,t.name),Si(f,t.name),Si(p,t.name),Si(b,t.name),Si(g,t.name),Si(m,t.name);const _=new Oi({uid:v,auth:t,email:u,emailVerified:w,displayName:l,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:x,createdAt:g,lastLoginAt:m});return k&&Array.isArray(k)&&(_.providerData=k.map((t=>Object.assign({},t)))),b&&(_._redirectEventId=b),_}static async _fromIdTokenResponse(t,i,e=!1){const n=new Ei;n.updateFromServerResponse(i);const o=new Oi({uid:i.localId,auth:t,stsTokenManager:n,isAnonymous:e});return await Ti(o),o}}
/**
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
 */class Ai{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,i){this.storage[t]=i}async _get(t){const i=this.storage[t];return void 0===i?null:i}async _remove(t){delete this.storage[t]}_addListener(t,i){}_removeListener(t,i){}}Ai.type="NONE";const Ni=Ai;
/**
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
 */function Di(t,i,e){return`firebase:${t}:${i}:${e}`}class Pi{constructor(t,i,e){this.persistence=t,this.auth=i,this.userKey=e;const{config:n,name:o}=this.auth;this.fullUserKey=Di(this.userKey,n.apiKey,o),this.fullPersistenceKey=Di("persistence",n.apiKey,o),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Oi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const i=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,i?this.setCurrentUser(i):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,i,e="authUser"){if(!i.length)return new Pi(si(Ni),t,e);const n=(await Promise.all(i.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let o=n[0]||si(Ni);const r=Di(e,t.config.apiKey,t.name);let s=null;for(const e of i)try{const i=await e._get(r);if(i){const n=Oi._fromJSON(t,i);e!==o&&(s=n),o=e;break}}catch(t){}const a=n.filter((t=>t._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(i.map((async t=>{if(t!==o)try{await t._remove(r)}catch(t){}}))),new Pi(o,t,e)):new Pi(o,t,e)}}
/**
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
 */function Ci(t){const i=t.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(ji(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";if(i.includes("edge/"))return"Edge";if(Ri(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(Fi(i))return"Blackberry";if(zi(i))return"Webos";if($i(i))return"Safari";if((i.includes("chrome/")||Li(i))&&!i.includes("edge/"))return"Chrome";if(Mi(i))return"Android";{const i=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Ri(t=p()){return/firefox\//i.test(t)}function $i(t=p()){const i=t.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function Li(t=p()){return/crios\//i.test(t)}function ji(t=p()){return/iemobile/i.test(t)}function Mi(t=p()){return/android/i.test(t)}function Fi(t=p()){return/blackberry/i.test(t)}function zi(t=p()){return/webos/i.test(t)}function Ui(t=p()){return/iphone|ipad|ipod/i.test(t)}function Bi(t=p()){return Ui(t)||Mi(t)||zi(t)||Fi(t)||/windows phone/i.test(t)||ji(t)}
/**
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
 */
function Vi(t,i=[]){let e;switch(t){case"Browser":e=Ci(p());break;case"Worker":e=`${Ci(p())}-${t}`;break;default:e=t}return`${e}/JsCore/9.6.4/${i.length?i.join(","):"FirebaseCore-web"}`}
/**
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
 */class qi{constructor(t,i){this.app=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gi(this),this.idTokenSubscription=new Gi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,i){return i&&(this._popupRedirectResolver=si(i)),this._initializationPromise=this.queue((async()=>{var e,n;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,t),!this._deleted)){if(null===(e=this._popupRedirectResolver)||void 0===e?void 0:e._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(i),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var i;let e=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId,o=null==e?void 0:e._redirectEventId,r=await this.tryRedirectSignIn(t);n&&n!==o||!(null==r?void 0:r.user)||(e=r.user)}return e?e._redirectEventId?(ei(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===e._redirectEventId?this.directlySetCurrentUser(e):this.reloadAndSetCurrentUserOrClear(e)):this.reloadAndSetCurrentUserOrClear(e):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(t){try{await Ti(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const i=t?T(t):null;return i&&ei(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&ei(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(si(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new m("auth","Firebase",t())}onAuthStateChanged(t,i,e){return this.registerStateListener(this.authStateSubscription,t,i,e)}onIdTokenChanged(t,i,e){return this.registerStateListener(this.idTokenSubscription,t,i,e)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,i){const e=await this.getOrInitRedirectPersistenceManager(i);return null===t?e.removeCurrentUser():e.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const i=t&&si(t)||this._popupRedirectResolver;ei(i,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[si(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var i,e;return this._isInitialized&&await this.queue((async()=>{})),(null===(i=this._currentUser)||void 0===i?void 0:i._redirectEventId)===t?this._currentUser:(null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=null!==(i=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==i?i:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,i,e,n){if(this._deleted)return()=>{};const o="function"==typeof i?i:i.next.bind(i),r=this._isInitialized?Promise.resolve():this._initializationPromise;return ei(r,this,"internal-error"),r.then((()=>o(this.currentUser))),"function"==typeof i?t.addObserver(i,e,n):t.addObserver(i)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ei(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Ki(t){return T(t)}class Gi{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t){const i=new I(t,void 0);return i.subscribe.bind(i)}((t=>this.observer=t))}get next(){return ei(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */class Ji{constructor(t,i){this.providerId=t,this.signInMethod=i}toJSON(){return ni("not implemented")}_getIdTokenResponse(t){return ni("not implemented")}_linkToIdToken(t,i){return ni("not implemented")}_getReauthenticationResolver(t){return ni("not implemented")}}
/**
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
 */async function Hi(t,i){return async function(t,i,e,n,o={}){const r=await pi(t,i,e,n,o);return"mfaPendingCredential"in r&&Zt(t,"multi-factor-auth-required",{_serverResponse:r}),r}(t,"POST","/v1/accounts:signInWithIdp",function(t,i){return t.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:t.tenantId}):i}(t,i))}
/**
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
 */class Wi extends Ji{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const i=new Wi(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(i.idToken=t.idToken),t.accessToken&&(i.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(i.nonce=t.nonce),t.pendingToken&&(i.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(i.accessToken=t.oauthToken,i.secret=t.oauthTokenSecret):Zt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const i="string"==typeof t?JSON.parse(t):t,{providerId:e,signInMethod:n}=i,o=Jt(i,["providerId","signInMethod"]);if(!e||!n)return null;const r=new Wi(e,n);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(t){return Hi(t,this.buildRequest())}_linkToIdToken(t,i){const e=this.buildRequest();return e.idToken=i,Hi(t,e)}_getReauthenticationResolver(t){const i=this.buildRequest();return i.autoCreate=!1,Hi(t,i)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),t.postBody=k(i)}return t}}
/**
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
 */class Xi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Yi extends Xi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Zi extends Yi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,i){return Wi._fromParams({providerId:Zi.PROVIDER_ID,signInMethod:Zi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:i})}static credentialFromResult(t){return Zi.credentialFromTaggedObject(t)}static credentialFromError(t){return Zi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:i,oauthAccessToken:e}=t;if(!i&&!e)return null;try{return Zi.credential(i,e)}catch(t){return null}}}Zi.GOOGLE_SIGN_IN_METHOD="google.com",Zi.PROVIDER_ID="google.com";
/**
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
 */
class Qi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,i,e,n=!1){const o=await Oi._fromIdTokenResponse(t,e,n),r=te(e);return new Qi({user:o,providerId:r,_tokenResponse:e,operationType:i})}static async _forOperation(t,i,e){await t._updateTokensIfNecessary(e,!0);const n=te(e);return new Qi({user:t,providerId:n,_tokenResponse:e,operationType:i})}}function te(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */class ie extends g{constructor(t,i,e,n){var o;super(i.code,i.message),this.operationType=e,this.user=n,Object.setPrototypeOf(this,ie.prototype),this.customData={appName:t.name,tenantId:null!==(o=t.tenantId)&&void 0!==o?o:void 0,_serverResponse:i.customData._serverResponse,operationType:e}}static _fromErrorAndOperation(t,i,e,n){return new ie(t,i,e,n)}}function ee(t,i,e,n){return("reauthenticate"===i?e._getReauthenticationResolver(t):e._getIdTokenResponse(t)).catch((e=>{if("auth/multi-factor-auth-required"===e.code)throw ie._fromErrorAndOperation(t,e,i,n);throw e}))}
/**
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
 */
class ne{constructor(t,i){this.storageRetriever=t,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,i){return this.storage.setItem(t,JSON.stringify(i)),Promise.resolve()}_get(t){const i=this.storage.getItem(t);return Promise.resolve(i?JSON.parse(i):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class oe extends ne{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,i)=>this.onStorageEvent(t,i),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=p();return $i(t)||Ui(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Bi(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const i of Object.keys(this.listeners)){const e=this.storage.getItem(i),n=this.localCache[i];e!==n&&t(i,n,e)}}onStorageEvent(t,i=!1){if(!t.key)return void this.forAllChangedKeys(((t,i,e)=>{this.notifyListeners(t,e)}));const e=t.key;if(i?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(e);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(e,t.newValue):this.storage.removeItem(e);else if(this.localCache[e]===t.newValue&&!i)return}const n=()=>{const t=this.storage.getItem(e);(i||this.localCache[e]!==t)&&this.notifyListeners(e,t)},o=this.storage.getItem(e);!function(){const t=p();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||10!==document.documentMode||o===t.newValue||t.newValue===t.oldValue?n():setTimeout(n,10)}notifyListeners(t,i){this.localCache[t]=i;const e=this.listeners[t];if(e)for(const t of Array.from(e))t(i?JSON.parse(i):i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,i,e)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:i,newValue:e}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,i){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,i){await super._set(t,i),this.localCache[t]=JSON.stringify(i)}async _get(t){const i=await super._get(t);return this.localCache[t]=JSON.stringify(i),i}async _remove(t){await super._remove(t),delete this.localCache[t]}}oe.type="LOCAL";const re=oe;
/**
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
 */class se extends ne{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,i){}_removeListener(t,i){}}se.type="SESSION";const ae=se;
/**
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
 */
/**
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
 */
class ce{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const i=this.receivers.find((i=>i.isListeningto(t)));if(i)return i;const e=new ce(t);return this.receivers.push(e),e}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const i=t,{eventId:e,eventType:n,data:o}=i.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;i.ports[0].postMessage({status:"ack",eventId:e,eventType:n});const s=Array.from(r).map((async t=>t(i.origin,o))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);i.ports[0].postMessage({status:"done",eventId:e,eventType:n,response:a})}_subscribe(t,i){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(i)}_unsubscribe(t,i){this.handlersMap[t]&&i&&this.handlersMap[t].delete(i),i&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function he(t="",i=10){let e="";for(let t=0;t<i;t++)e+=Math.floor(10*Math.random());return t+e}
/**
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
 */ce.receivers=[];class le{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,i,e=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const c=he("",20);n.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),e);r={messageChannel:n,onMessage(t){const i=t;if(i.data.eventId===c)switch(i.data.status){case"ack":clearTimeout(h),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(i.data.response);break;default:clearTimeout(h),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:i},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
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
 */function ue(){return window}
/**
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
 */
function de(){return void 0!==ue().WorkerGlobalScope&&"function"==typeof ue().importScripts}
/**
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
 */
const fe="firebaseLocalStorageDb";class pe{constructor(t){this.request=t}toPromise(){return new Promise(((t,i)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{i(this.request.error)}))}))}}function be(t,i){return t.transaction(["firebaseLocalStorage"],i?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ge(){const t=indexedDB.open(fe,1);return new Promise(((i,e)=>{t.addEventListener("error",(()=>{e(t.error)})),t.addEventListener("upgradeneeded",(()=>{const i=t.result;try{i.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){e(t)}})),t.addEventListener("success",(async()=>{const e=t.result;e.objectStoreNames.contains("firebaseLocalStorage")?i(e):(e.close(),await function(){const t=indexedDB.deleteDatabase(fe);return new pe(t).toPromise()}(),i(await ge()))}))}))}async function me(t,i,e){const n=be(t,!0).put({fbase_key:i,value:e});return new pe(n).toPromise()}function ve(t,i){const e=be(t,!0).delete(i);return new pe(e).toPromise()}class we{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ge()),this.db}async _withRetries(t){let i=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(t){if(i++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return de()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ce._getInstance(de()?self:null),this.receiver._subscribe("keyChanged",(async(t,i)=>({keyProcessed:(await this._poll()).includes(i.key)}))),this.receiver._subscribe("ping",(async()=>["keyChanged"]))}async initializeSender(){var t,i;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new le(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(null===(t=e[0])||void 0===t?void 0:t.fulfilled)&&(null===(i=e[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var i;if(this.sender&&this.activeServiceWorker&&((null===(i=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===i?void 0:i.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(i){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ge();return await me(t,"__sak","1"),await ve(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,i){return this._withPendingWrite((async()=>(await this._withRetries((e=>me(e,t,i))),this.localCache[t]=i,this.notifyServiceWorker(t))))}async _get(t){const i=await this._withRetries((i=>async function(t,i){const e=be(t,!1).get(i),n=await new pe(e).toPromise();return void 0===n?null:n.value}(i,t)));return this.localCache[t]=i,i}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((i=>ve(i,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const i=be(t,!1).getAll();return new pe(i).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const i=[],e=new Set;for(const{fbase_key:n,value:o}of t)e.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(o)&&(this.notifyListeners(n,o),i.push(n));for(const t of Object.keys(this.localCache))this.localCache[t]&&!e.has(t)&&(this.notifyListeners(t,null),i.push(t));return i}notifyListeners(t,i){this.localCache[t]=i;const e=this.listeners[t];if(e)for(const t of Array.from(e))t(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,i){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(i)}_removeListener(t,i){this.listeners[t]&&(this.listeners[t].delete(i),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}we.type="LOCAL";const ye=we;
/**
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
 */
/**
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
 */
function ke(t,i){return i?si(i):(ei(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
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
 */new hi(3e4,6e4);class Ie extends Ji{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Hi(t,this._buildIdpRequest())}_linkToIdToken(t,i){return Hi(t,this._buildIdpRequest(i))}_getReauthenticationResolver(t){return Hi(t,this._buildIdpRequest())}_buildIdpRequest(t){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(i.idToken=t),i}}function xe(t){
/**
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
 */
return async function(t,i,e=!1){const n="signIn",o=await ee(t,n,i),r=await Qi._fromIdTokenResponse(t,n,o);return e||await t._updateCurrentUser(r.user),r}(t.auth,new Ie(t),t.bypassAuthState)}function _e(t){const{auth:i,user:e}=t;return ei(e,i,"internal-error"),
/**
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
 */
async function(t,i,e=!1){const{auth:n}=t,o="reauthenticate";try{const r=await Ii(t,ee(n,o,i,t),e);ei(r.idToken,n,"internal-error");const s=ki(r.idToken);ei(s,n,"internal-error");const{sub:a}=s;return ei(t.uid===a,n,"user-mismatch"),Qi._forOperation(t,o,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&Zt(n,"user-mismatch"),t}}(e,new Ie(t),t.bypassAuthState)}async function Te(t){const{auth:i,user:e}=t;return ei(e,i,"internal-error"),async function(t,i,e=!1){const n=await Ii(t,i._linkToIdToken(t.auth,await t.getIdToken()),e);return Qi._forOperation(t,"link",n)}(e,new Ie(t),t.bypassAuthState)}
/**
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
 */class Ee{constructor(t,i,e,n,o=!1){this.auth=t,this.resolver=e,this.user=n,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise((async(t,i)=>{this.pendingPromise={resolve:t,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:i,sessionId:e,postBody:n,tenantId:o,error:r,type:s}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:i,sessionId:e,tenantId:o||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return xe;case"linkViaPopup":case"linkViaRedirect":return Te;case"reauthViaPopup":case"reauthViaRedirect":return _e;default:Zt(this.auth,"internal-error")}}resolve(t){oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Se=new hi(2e3,1e4);class Oe extends Ee{constructor(t,i,e,n,o){super(t,i,n,o),this.provider=e,this.authWindow=null,this.pollId=null,Oe.currentPopupAction&&Oe.currentPopupAction.cancel(),Oe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ei(t,this.auth,"internal-error"),t}async onExecution(){oi(1===this.filter.length,"Popup operations only handle one event");const t=he();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var i,e;this.pollId=(null===(e=null===(i=this.authWindow)||void 0===i?void 0:i.window)||void 0===e?void 0:e.closed)?window.setTimeout((()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))}),2e3):window.setTimeout(t,Se.get())};t()}}Oe.currentPopupAction=null;
/**
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
 */
const Ae=new Map;class Ne extends Ee{constructor(t,i,e=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,e),this.eventId=null}async execute(){let t=Ae.get(this.auth._key());if(!t){try{const i=await async function(t,i){const e=function(t){return Di("pendingRedirect",t.config.apiKey,t.name)}(i),n=function(t){return si(t._redirectPersistence)}(t);if(!await n._isAvailable())return!1;const o="true"===await n._get(e);return await n._remove(e),o}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(i){t=()=>Promise.reject(i)}Ae.set(this.auth._key(),t)}return this.bypassAuthState||Ae.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const i=await this.auth._redirectUserForId(t.eventId);if(i)return this.user=i,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function De(t,i,e=!1){const n=Ki(t),o=ke(n,i),r=new Ne(n,o,e),s=await r.execute();return s&&!e&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,i)),s}
/**
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
 */class Pe{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let i=!1;return this.consumers.forEach((e=>{this.isEventForConsumer(t,e)&&(i=!0,this.sendToConsumer(t,e),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Re(t);default:return!1}}
/**
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
 */(t)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=t,i=!0)),i}sendToConsumer(t,i){var e;if(t.error&&!Re(t)){const n=(null===(e=t.error.code)||void 0===e?void 0:e.split("auth/")[1])||"internal-error";i.onError(Qt(this.auth,n))}else i.onAuthEvent(t)}isEventForConsumer(t,i){const e=null===i.eventId||!!t.eventId&&t.eventId===i.eventId;return i.filter.includes(t.type)&&e}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ce(t))}saveEventToCache(t){this.cachedEventUids.add(Ce(t)),this.lastProcessedEventTime=Date.now()}}function Ce(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Re({type:t,error:i}){return"unknown"===t&&"auth/no-auth-event"===(null==i?void 0:i.code)}
/**
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
 */
const $e=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Le=/^https?/;function je(t){const i=ai(),{protocol:e,hostname:n}=new URL(i);if(t.startsWith("chrome-extension://")){const o=new URL(t);return""===o.hostname&&""===n?"chrome-extension:"===e&&t.replace("chrome-extension://","")===i.replace("chrome-extension://",""):"chrome-extension:"===e&&o.hostname===n}if(!Le.test(e))return!1;if($e.test(t))return n===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(n)}
/**
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
 */const Me=new hi(3e4,6e4);function Fe(){const t=ue().___jsl;if(null==t?void 0:t.H)for(const i of Object.keys(t.H))if(t.H[i].r=t.H[i].r||[],t.H[i].L=t.H[i].L||[],t.H[i].r=[...t.H[i].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}function ze(t){return new Promise(((i,e)=>{var n,o,r,s;function a(){Fe(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{Fe(),e(Qt(t,"network-request-failed"))},timeout:Me.get()})}if(null===(o=null===(n=ue().gapi)||void 0===n?void 0:n.iframes)||void 0===o?void 0:o.Iframe)i(gapi.iframes.getContext());else{if(!(null===(r=ue().gapi)||void 0===r?void 0:r.load)){const i=`__iframefcb${Math.floor(1e6*Math.random())}`;return ue()[i]=()=>{gapi.load?a():e(Qt(t,"network-request-failed"))},(s=`https://apis.google.com/js/api.js?onload=${i}`,new Promise(((t,i)=>{const e=document.createElement("script");var n,o;e.setAttribute("src",s),e.onload=t,e.onerror=t=>{const e=Qt("internal-error");e.customData=t,i(e)},e.type="text/javascript",e.charset="UTF-8",(null!==(o=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==o?o:document).appendChild(e)}))).catch((t=>e(t)))}a()}})).catch((t=>{throw Ue=null,t}))}let Ue=null;
/**
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
 */
const Be=new hi(5e3,15e3),Ve={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qe=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ke(t){const i=t.config;ei(i.authDomain,t,"auth-domain-config-required");const e=i.emulator?li(i,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,n={apiKey:i.apiKey,appName:t.name,v:"9.6.4"},o=qe.get(t.config.apiHost);o&&(n.eid=o);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${e}?${k(n).slice(1)}`}
/**
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
 */
const Ge={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Je{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function He(t,i,e,n,o,r){ei(t.config.authDomain,t,"auth-domain-config-required"),ei(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:e,redirectUrl:n,v:"9.6.4",eventId:o};if(i instanceof Xi){i.setDefaultLanguage(t.languageCode),s.providerId=i.providerId||"",function(t){for(const i in t)if(Object.prototype.hasOwnProperty.call(t,i))return!1;return!0}(i.getCustomParameters())||(s.customParameters=JSON.stringify(i.getCustomParameters()));for(const[t,i]of Object.entries(r||{}))s[t]=i}if(i instanceof Yi){const t=i.getScopes().filter((t=>""!==t));t.length>0&&(s.scopes=t.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?li(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
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
 */(t)}?${k(a).slice(1)}`}const We=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ae,this._completeRedirectFn=De}async _openPopup(t,i,e,n){var o;return oi(null===(o=this.eventManagers[t._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()"),function(t,i,e,n=500,o=600){const r=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ge),{width:n.toString(),height:o.toString(),top:r,left:s}),h=p().toLowerCase();e&&(a=Li(h)?"_blank":e),Ri(h)&&(i=i||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[i,e])=>`${t}${i}=${e},`),"");if(function(t=p()){var i;return Ui(t)&&!!(null===(i=window.navigator)||void 0===i?void 0:i.standalone)}(h)&&"_self"!==a)return function(t,i){const e=document.createElement("a");e.href=t,e.target=i;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(n)}
/**
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
 */(i||"",a),new Je(null);const u=window.open(i||"",a,l);ei(u,t,"popup-blocked");try{u.focus()}catch(t){}return new Je(u)}(t,He(t,i,e,ai(),n),he())}async _openRedirect(t,i,e,n){var o;return await this._originValidation(t),o=He(t,i,e,ai(),n),ue().location.href=o,new Promise((()=>{}))}_initialize(t){const i=t._key();if(this.eventManagers[i]){const{manager:t,promise:e}=this.eventManagers[i];return t?Promise.resolve(t):(oi(e,"If manager is not set, promise should be"),e)}const e=this.initAndGetManager(t);return this.eventManagers[i]={promise:e},e.catch((()=>{delete this.eventManagers[i]})),e}async initAndGetManager(t){const i=await async function(t){const i=await function(t){return Ue=Ue||ze(t),Ue}(t),e=ue().gapi;return ei(e,t,"internal-error"),i.open({where:document.body,url:Ke(t),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ve,dontclear:!0},(i=>new Promise((async(e,n)=>{await i.restyle({setHideOnLeave:!1});const o=Qt(t,"network-request-failed"),r=ue().setTimeout((()=>{n(o)}),Be.get());function s(){ue().clearTimeout(r),e(i)}i.ping(s).then(s,(()=>{n(o)}))}))))}(t),e=new Pe(t);return i.register("authEvent",(i=>(ei(null==i?void 0:i.authEvent,t,"invalid-auth-event"),{status:e.onEvent(i.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:e},this.iframes[t._key()]=i,e}_isIframeWebStorageSupported(t,i){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(e=>{var n;const o=null===(n=null==e?void 0:e[0])||void 0===n?void 0:n.webStorageSupport;void 0!==o&&i(!!o),Zt(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const i=t._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=async function(t){if(t.config.emulator)return;const{authorizedDomains:i}=await async function(t,i={}){return pi(t,"GET","/v1/projects",i)}(t);for(const t of i)try{if(je(t))return}catch(t){}Zt(t,"unauthorized-domain")}(t)),this.originValidationPromises[i]}get _shouldInitProactively(){return Bi()||$i()||Ui()}};var Xe="@firebase/auth";
/**
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
 */
class Ye{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const i=this.auth.onIdTokenChanged((i=>{var e;t((null===(e=i)||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,i),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const i=this.internalListeners.get(t);i&&(this.internalListeners.delete(t),i(),this.updateProactiveRefresh())}assertAuthConfigured(){ei(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */V(new E("auth",((t,{options:i})=>{const e=t.getProvider("app").getImmediate(),{apiKey:n,authDomain:o}=e.options;return(t=>{ei(n&&!n.includes(":"),"invalid-api-key",{appName:t.name}),ei(!(null==o?void 0:o.includes(":")),"argument-error",{appName:t.name});const e={apiKey:n,authDomain:o,clientPlatform:"Browser",apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vi("Browser")},r=new qi(t,e);return function(t,i){const e=(null==i?void 0:i.persistence)||[],n=(Array.isArray(e)?e:[e]).map(si);(null==i?void 0:i.errorMap)&&t._updateErrorMap(i.errorMap),t._initializeWithPersistence(n,null==i?void 0:i.popupRedirectResolver)}(r,i),r})(e)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t=>{t.getProvider("auth-internal").initialize()}))),V(new E("auth-internal",(t=>{return i=Ki(t.getProvider("auth").getImmediate()),new Ye(i);var i}),"PRIVATE").setInstantiationMode("EXPLICIT")),H(Xe,"0.19.6",void 0),H(Xe,"0.19.6","esm2017");let Ze=class{constructor(i){t(this,i),this.p1Score=0,this.p2Score=0,this.obstacles=[],this.isLoggedIn=!1}getSize(t){return(null==t?void 0:t.size)||(null==t?void 0:t.offsetWidth)||(null==t?void 0:t.offsetHeight)}isColliding(t,i){return t.x<i.x+this.getSize(i)&&t.x+this.getSize(t)>i.x&&t.y<i.y+this.getSize(i)&&this.getSize(t)+t.y>i.y}signInWithGoogle(){const t=new Zi;(async function(t,i,e){const n=Ki(t);!function(t,i){if(!(i instanceof Xi))throw Xi.name!==i.constructor.name&&Zt(t,"argument-error"),ti(t,"argument-error",`Type of ${i.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,i);const o=ke(n,e);return new Oe(n,"signInViaPopup",i,o).executeNotNull()})(this.auth,t).then((t=>{const i=t.user;this.isLoggedIn=!0,console.log(i)})).catch((t=>{console.log(t)}))}componentDidLoad(){this.app=function(t,i={}){"object"!=typeof i&&(i={name:i});const e=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},i),n=e.name;if("string"!=typeof n||!n)throw K.create("bad-app-name",{appName:String(n)});const o=z.get(n);if(o){if(w(t,o.options)&&w(e,o.config))return o;throw K.create("duplicate-app",{appName:n})}const r=new O(n);for(const t of U.values())r.addComponent(t);const s=new G(t,e,r);return z.set(n,s),s}({apiKey:"AIzaSyAMA-IRJnf6HgRpBk-N_yx-Eb8Ej-uRc4Y",authDomain:"madness-land.firebaseapp.com",databaseURL:"https://madness-land-default-rtdb.firebaseio.com",projectId:"madness-land",storageBucket:"madness-land.appspot.com",messagingSenderId:"695557296950",appId:"1:695557296950:web:baebb43cf2bea3439b9997",measurementId:"G-C8H54WN4YX"});const t=function(t=J()){const i=q(t=T(t),"analytics");return i.isInitialized()?i.getImmediate():function(t,i={}){const e=q(t,"analytics");if(e.isInitialized()){const t=e.getImmediate();if(w(i,e.getOptions()))return t;throw Dt.create("already-initialized")}return e.initialize({options:i})}(t)}(this.app);this.auth=
/**
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
 */
function(t=J()){const i=q(t,"auth");return i.isInitialized()?i.getImmediate():function(t,i){const e=q(t,"auth");if(e.isInitialized()){const t=e.getImmediate();if(w(e.getOptions(),null!=i?i:{}))return t;Zt(t,"already-initialized")}return e.initialize({options:i})}(t,{popupRedirectResolver:We,persistence:[ye,re,ae]})}(this.app),console.log(this.app,t),this.gameLoop=setInterval((()=>{document.querySelectorAll(".bullet").forEach((t=>{t.offsetLeft>this.p1.x&&t.offsetLeft<this.p1.x+60&&t.offsetTop>this.p1.y&&t.offsetTop<this.p1.y+60&&!t.classList.contains("bullet-stick")&&(this.p2Score=this.p2Score+1,this.p1.isHit()),t.offsetLeft>this.p2.x&&t.offsetLeft<this.p2.x+60&&t.offsetTop>this.p2.y&&t.offsetTop<this.p2.y+60&&!t.classList.contains("bullet-1")&&(this.p1Score=this.p1Score+1,this.p2.isHit());for(const i of this.obstacles)this.isColliding(i,t)&&console.log(i,t)}));for(const t of this.obstacles)this.isColliding(t,this.p1)&&this.p1.isColliding(!0),this.isColliding(t,this.p2)&&this.p2.isColliding(!0)}),2.5),this.createObstacles()}createObstacles(){const t=[];for(let i=0;i<9;i++)t.push({health:5,x:700*Math.random()+100,y:500*Math.random()+100,size:100*Math.random()});this.obstacles=t}disconnectedCallback(){this.gameLoop()}async logout(){return this.isLoggedIn=!1,T(this.auth).signOut()}render(){return[e("div",{class:"scoreboard"},e("button",{onClick:()=>this.logout()},"logout"),!this.isLoggedIn&&e("ion-button",{onClick:()=>this.signInWithGoogle()},"Login with Google"),e("span",null,"P1: ",this.p1Score),e("span",null,"P2: ",this.p2Score)),e("div",{class:"map"},e("stick-tank",{ref:t=>this.p1=t}),e("tank-1",{ref:t=>this.p2=t}),this.obstacles.map((t=>t.health>0&&e("span",{class:"obstacle",style:{height:`${t.size}px`,width:`${t.size}px`,left:`${t.x}px`,top:`${t.y}px`}}))))]}};Ze.style='*{font-family:arial}:root{--stick-color:#008000;--stick-width:8px}h2{margin:0;text-indent:10px}input[type="color"]{height:50px}label{display:block;font-size:50px}#stickman{height:300px;width:300px;margin:0 auto;position:relative}#stickman:hover{cursor:pointer}#stickman .head{height:80px;width:80px;margin:0 auto;background:var(--stick-color);border-radius:100%;position:relative}#stickman .head:before,#stickman .head:after{content:"";position:absolute;top:20px;height:20px;width:8px;background:white;border-radius:100%;animation:blink 8s infinite}#stickman .head:before{left:25px}#stickman .head:after{right:25px}#stickman .torso{margin:0 auto;height:100px;width:var(--stick-width);background:var(--stick-color)}#stickman .arm,#stickman .leg{position:absolute;width:60px;height:var(--stick-width);background:var(--stick-color);border-radius:3px}#stickman .arm{top:100px}#stickman .arm.left{transform:rotate(-45deg);left:100px}#stickman .arm.right{transform:rotate(45deg);left:140px}#stickman .leg{top:200px;width:80px}#stickman .leg.left{transform:rotate(-45deg);left:85px}#stickman .leg.right{transform:rotate(45deg);left:135px}@keyframes blink{0%{height:20px}5%{margin-top:5px;height:0px}10%{margin-top:0;height:20px}}.jump-animation{animation:jump 3s ease}@keyframes jump{0%{margin-top:0px}50%{margin-top:-100px}100%{margin-top:0px}}.move-down{top:850px !important}.move-up{top:-200px !important}.move-left{left:-200px !important}.move-right{left:1050px !important}.bullet{transition:all ease-out 0.5s;position:absolute;top:0;left:0;display:block;height:10px;width:13px;border-bottom-right-radius:70%;border-top-right-radius:70%;background:blue}.spec{transition:all ease-out 1.2s;position:absolute;top:0;left:0;display:block;height:50px;width:50px;border-radius:100%;background:red}.bullet.bullet-stick{background:red}.map{position:relative;display:block;margin:0 auto;height:600px;width:800px;background-color:grey;overflow:hidden}.scoreboard{padding:30px;font-size:62px;display:flex;margin:0 auto;justify-content:space-between}.scoreboard span:first-of-type{color:red}.scoreboard span:last-of-type{color:blue}.obstacle{position:absolute;top:0;left:0;display:block;background-color:brown}';let Qe=class{constructor(i){t(this,i),this.movementSpeed=15,this.el=null,this.orientation=0,this.isBlocking=!1,this.x=0,this.y=0,this.size=60}onKeydown(t){if("ArrowUp"===t.key){if(this.isBlocking&&0===this.orientation)return;this.setOrientation(0),this.move(0,-this.movementSpeed)}else if("ArrowDown"===t.key){if(this.isBlocking&&180===this.orientation)return;this.setOrientation(180),this.move(0,this.movementSpeed)}else if("ArrowLeft"===t.key){if(this.isBlocking&&270===this.orientation)return;this.setOrientation(270),this.move(-this.movementSpeed,0)}else if("ArrowRight"===t.key){if(this.isBlocking&&90===this.orientation)return;this.setOrientation(90),this.move(this.movementSpeed,0)}else"Shift"===t.key&&this.fire()}async isColliding(t){this.isBlocking=t}setOrientation(t){return this.orientation=t,this.el.style.transform=`rotate(${t}deg)`,this.isBlocking=!1,this}move(t,i){return this.x=this.x+t,this.y=this.y+i,this.isBlocking=!1,this}fire(){const t=document.createElement("span");t.classList.add("bullet","bullet-stick"),setTimeout((()=>{let i;0===this.orientation?i="move-up":180===this.orientation?i="move-down":270===this.orientation?i="move-left":90===this.orientation&&(i="move-right"),t.classList.add(i)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}render(){return e("span",{ref:t=>this.el=t,style:{position:"absolute",transition:"0.3s linear all",background:"url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat",height:"60px",width:"60px",left:`${this.x}px`,top:`${this.y}px`}})}};Qe.style=":host{display:block}";let tn=class{constructor(i){t(this,i),this.movementSpeed=15,this.el=null,this.orientation=0,this.x=0,this.y=0,this.opacity="1"}onKeydown(t){"w"===t.key?(this.setOrientation(0),this.move(0,-this.movementSpeed)):"s"===t.key?(this.setOrientation(180),this.move(0,this.movementSpeed)):"a"===t.key?(this.setOrientation(270),this.move(-this.movementSpeed,0)):"d"===t.key?(this.setOrientation(90),this.move(this.movementSpeed,0)):" "===t.key?this.fire():"q"===t.key&&this.special()}setOrientation(t){return this.orientation=t,this.el.style.transform=`rotate(${t}deg)`,this}move(t,i){return this.x=this.x+t,this.y=this.y+i,this}fire(){const t=document.createElement("span");t.classList.add("bullet","bullet-1"),setTimeout((()=>{let i;0===this.orientation?i="move-up":180===this.orientation?i="move-down":90===this.orientation?i="move-right":270===this.orientation&&(i="move-left"),t.classList.add(i)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}special(){const t=document.createElement("span");t.classList.add("spec"),setTimeout((()=>{let i;0===this.orientation?i="move-up":180===this.orientation?i="move-down":90===this.orientation?i="move-right":270===this.orientation&&(i="move-left"),t.classList.add(i)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}async isHit(){this.opacity="0",setTimeout((()=>{this.opacity="1"}),400)}render(){return e("span",{ref:t=>this.el=t,style:{opacity:this.opacity,position:"absolute",transition:".3s linear all",background:"url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3ec6486c3f26301.png') center center / cover no-repeat",backgroundSize:"300%",height:"60px",width:"60px",left:`${this.x}px`,top:`${this.y}px`}})}};tn.style=":host{display:block}";export{u as ion_button,Ze as page_home,Qe as stick_tank,tn as tank_1}