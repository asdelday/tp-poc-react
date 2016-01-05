import normalizeCss from 'normalize.css/normalize.css'; // eslint-disable-line no-unused-vars
import styles from './general.scss'; // eslint-disable-line no-unused-vars
import React from 'react';
import { render } from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppView } from 'containers';
import * as reducers from 'reducers';

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

  const appReducers = combineReducers(reducers);
  const appStore = createStore(appReducers);

  let app = document.getElementById('react-view');
  if (!app) {
    app = document.createElement('div');
    app.id = 'react-view';
    window.document.body.appendChild(app);
  }
  render(
    <Provider store={ appStore }>
      <AppView />
    </Provider>,
    app
  );
})(window);
