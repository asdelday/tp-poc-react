import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { AppView, DevTools } from 'containers';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object,
  };

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div>
          <AppView />
          <DevTools />
        </div>
      </Provider>
    );
  }

}
