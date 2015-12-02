import React, { PropTypes, Component } from 'react';
import style from './App.scss'; // eslint-disable-line no-unused-vars
import Navigation from '../Navigation';
import HeroBox from '../HeroBox';

const propTypes = {
  data: PropTypes.object.isRequired,
};
const defaultProps = {
  data: {},
};

class App extends Component {

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

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
