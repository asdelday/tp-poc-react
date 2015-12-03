import React, { PropTypes, Component } from 'react';
import style from './HeroList.scss'; // eslint-disable-line no-unused-vars
import HeroItem from '../HeroItem';

const propTypes = {
  list: PropTypes.array,
};
const defaultProps = {
  list: [],
};

class HeroList extends Component {

  renderHeroList() {
    return this.props.list.map((heroItem) => {
      return (
        <div className="HeroList-heroItem col col-sm-12 col-md-6 col-lg-4">
          <HeroItem hero={ heroItem } />
        </div>
      );
    });
  }

  render() {
    const list = this.renderHeroList();

    return (
      <div className="HeroList">
        { list }
      </div>
    );
  }

}

HeroList.propTypes = propTypes;
HeroList.defaultProps = defaultProps;

export default HeroList;
