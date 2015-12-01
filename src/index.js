import normalizeCss from 'normalize.css/normalize.css'; // eslint-disable-line no-unused-vars
import styles from './general.scss'; // eslint-disable-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

((window) => {
  const thumbnail = {
    imgUrl: 'http://formatjs.io/img/react.svg',
    imgAlt: 'React Logo',
    header: 'React',
    content: 'A Javascript library for building user interfaces',
  };

  const appData = {
    heroes: {
      list: [thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail],
    },
  };

  ReactDom.render(<App data={ appData } />, window.document.body);
})(window);
