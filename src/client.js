import normalizeCss from 'normalize.css/normalize.css'; // eslint-disable-line no-unused-vars
import styles from './general.scss'; // eslint-disable-line no-unused-vars
import React from 'react';
import { render } from 'react-dom';
import configureStore from 'store/configureStore';
import { Root } from 'containers';

((window) => {
  const store = configureStore();

  let app = document.getElementById('react-view');
  if (!app) {
    app = document.createElement('div');
    app.id = 'react-view';
    window.document.body.appendChild(app);
  }

  render(<Root store={ store } />, app);
})(window);
