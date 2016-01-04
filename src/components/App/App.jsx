import React, { PropTypes, Component } from 'react';
import style from './App.scss'; // eslint-disable-line no-unused-vars
import Navigation from '../Navigation';
import HeroBox from '../HeroBox';

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
    const navigation = data.navigation || {};

    return (
      <div className="App">
        <Navigation title={ navigation.title } items={ navigation.items } />
        <HeroBox heroes={ heroes } />
      </div>
    );
  }

}

export default App;
