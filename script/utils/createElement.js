export function createElement(tag, className, attributes, text) {
  const element = document.createElement(tag);
  element.classList.add(className);
  if (attributes.length > 0) {
    for (const prop of attributes) {
      for (const key in prop) {
        element.setAttribute(key, prop[key]);
      }
    }
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}
