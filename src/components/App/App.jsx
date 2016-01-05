import React, { PropTypes, Component } from 'react';
import style from './App.scss'; // eslint-disable-line no-unused-vars
import { NavigationView } from 'containers';
import { HeroBox } from 'components';

class App extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const data = this.props.data || {};
    const heroes = data.heroes || {};

    return (
      <div className="App">
        <NavigationView />
        <HeroBox heroes={ heroes } />
      </div>
    );
  }

}

export default App;
