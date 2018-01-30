import { h, render, Component } from 'preact';

import App from './App';

const mountElement = document.querySelector('main');

if (process.env.NODE_ENV === 'development') {
  require('preact/devtools');
}

render(<App />, mountElement, mountElement.lastChild);

if (module.hot) {
  module.hot.accept();
}
