import { r as registerInstance, h, i as Host } from './index-a9bdaee2.js';
import { g as getIonMode } from './ionic-global-9fb5c7c7.js';
import { m as menuController } from './index-82ed2301.js';
import { u as updateVisibility } from './menu-toggle-util-db7b1bef.js';
import './hardware-back-button-b6ccf74a.js';
import './helpers-2e36c018.js';
import './animation-61bb797b.js';

const menuToggleCss = ":host(.menu-toggle-hidden){display:none}";

let MenuToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visible = false;
    /**
     * Automatically hides the content when the corresponding menu is not active.
     *
     * By default, it's `true`. Change it to `false` in order to
     * keep `ion-menu-toggle` always visible regardless the state of the menu.
     */
    this.autoHide = true;
    this.onClick = () => {
      return menuController.toggle(this.menu);
    };
  }
  connectedCallback() {
    this.visibilityChanged();
  }
  async visibilityChanged() {
    this.visible = await updateVisibility(this.menu);
  }
  render() {
    const mode = getIonMode(this);
    const hidden = this.autoHide && !this.visible;
    return (h(Host, { onClick: this.onClick, "aria-hidden": hidden ? 'true' : null, class: {
        [mode]: true,
        'menu-toggle-hidden': hidden,
      } }, h("slot", null)));
  }
};
MenuToggle.style = menuToggleCss;

export { MenuToggle as ion_menu_toggle };
