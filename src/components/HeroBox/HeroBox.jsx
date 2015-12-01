import React, { PropTypes, Component } from 'react';
import style from './HeroBox.scss'; // eslint-disable-line no-unused-vars
import HeroList from '../HeroList';

class HeroBox extends Component {

  static propTypes = {
    heroes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    heroes: {},
  };

  render() {
    const heroList = this.props.heroes.list || [];

    return (
      <div className="HeroBox">
        <HeroList list={ heroList } />
      </div>
    );
  }

}

export default HeroBox;
