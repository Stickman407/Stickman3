import { d as componentOnReady } from './helpers-2e36c018.js';

/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const attachComponent = async (delegate, container, component, cssClasses, componentProps, inline) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => componentOnReady(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};
const CoreDelegate = () => {
  let BaseComponent;
  let Reference;
  const attachViewToDom = async (parentElement, userComponent, userComponentProps = {}, cssClasses = []) => {
    BaseComponent = parentElement;
    /**
     * If passing in a component via the `component` props
     * we need to append it inside of our overlay component.
     */
    if (userComponent) {
      /**
       * If passing in the tag name, create
       * the element otherwise just get a reference
       * to the component.
       */
      const el = (typeof userComponent === 'string')
        ? BaseComponent.ownerDocument && BaseComponent.ownerDocument.createElement(userComponent)
        : userComponent;
      /**
       * Add any css classes passed in
       * via the cssClasses prop on the overlay.
       */
      cssClasses.forEach(c => el.classList.add(c));
      /**
       * Add any props passed in
       * via the componentProps prop on the overlay.
       */
      Object.assign(el, userComponentProps);
      /**
       * Finally, append the component
       * inside of the overlay component.
       */
      BaseComponent.appendChild(el);
      await new Promise(resolve => componentOnReady(el, resolve));
    }
    /**
     * Get the root of the app and
     * add the overlay there.
     */
    const app = document.querySelector('ion-app') || document.body;
    /**
     * Create a placeholder comment so that
     * we can return this component to where
     * it was previously.
     */
    Reference = document.createComment('ionic teleport');
    BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
    app.appendChild(BaseComponent);
    return BaseComponent;
  };
  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }
    return Promise.resolve();
  };
  return { attachViewToDom, removeViewFromDom };
};

export { CoreDelegate as C, attachComponent as a, detachComponent as d };
