/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const t={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.impact({style:i})},notification(t){const s=this.getEngine();if(!s)return;const i=this.isCapacitor()?t.style.toUpperCase():t.style;s.notification({style:i})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},s=()=>{t.selection()},i=()=>{t.selectionStart()},n=()=>{t.selectionChanged()},o=()=>{t.selectionEnd()},e=s=>{t.impact(s)};export{i as a,n as b,e as c,s as d,o as h}