import { createElement } from './utils/createElement.js';

export function header() {
  const header = createElement('header', 'header', [
    { id: 'header' },
    { text: 'Header' },
  ]);

  const logo = createElement('div', 'header');

  return header;
}
