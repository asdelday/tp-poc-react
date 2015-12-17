import normalizeCss from 'normalize.css/normalize.css'; // eslint-disable-line no-unused-vars
import styles from './general.scss'; // eslint-disable-line no-unused-vars
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

((window) => {
  const appData = {
    navigation: {
      title: 'Heroes',
      items: [],
    },
    heroes: {
      initialList: [],
      initialLimit: 100,
      initialHeroTeamTitle: 'My Heroes Team',
      initialHeroTeamList: [],
    },
  };

  const app = document.createElement('div');
  window.document.body.appendChild(app);
  ReactDom.render(<App data={ appData } />, app);
})(window);
