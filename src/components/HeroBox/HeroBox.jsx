import React, { PropTypes, Component } from 'react';
import style from './HeroBox.scss'; // eslint-disable-line no-unused-vars
import HeroList from '../HeroList';
import { getHeroes } from '../../services';

const propTypes = {
  heroes: PropTypes.object,
};
const defaultProps = {
  heroes: {},
};

class HeroBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heroList: props.heroes.initialList,
      limit: props.heroes.initialLimit,
    };
  }

  componentWillMount() {
    this._loadHeroes();
  }

  _loadHeroes() {
    const limit = this.state.limit || null;
    const limitPartial = (limit && `?limit=${limit}`) || '';

    getHeroes(limitPartial).then((data) => {
      this.setState({ heroList: data.data.results });
    });
  }

  render() {
    const heroList = this.state.heroList || [];

    return (
      <div className="HeroBox">
        <HeroList list={ heroList } />
      </div>
    );
  }

}

HeroBox.propTypes = propTypes;
HeroBox.defaultProps = defaultProps;

export default HeroBox;
