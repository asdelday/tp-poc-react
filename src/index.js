import bootstrap from 'bootstrap/dist/css/bootstrap.css'; // eslint-disable-line no-unused-vars
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
    badge: {
      title: 'Messages',
      number: 5,
    },
    thumbnailList: [thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail, thumbnail],
  };

  const app = document.createElement('div');
  window.document.body.appendChild(app);
  ReactDom.render(<App data={ appData } />, app);
})(window);
