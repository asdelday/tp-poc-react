import React, { PropTypes, Component } from 'react';
import style from './App.scss'; // eslint-disable-line no-unused-vars
import { NavigationView, HeroesView } from 'containers';

class App extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    return (
      <div className="App">
        <NavigationView />
        <HeroesView />
      </div>
    );
  }

}

export default App;
