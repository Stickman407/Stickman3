import { r as registerInstance, h, i as Host } from './index-a9bdaee2.js';

const newComponentCss = ":host{display:block}";

let NewComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.internal = 10;
  }
  render() {
    return (h(Host, null, h("b", null, this.external)));
  }
};
NewComponent.style = newComponentCss;

export { NewComponent as new_component };
