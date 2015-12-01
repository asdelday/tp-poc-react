import React, { PropTypes, Component } from 'react';
import style from './HeroList.scss'; // eslint-disable-line no-unused-vars
import HeroItem from '../HeroItem';

class HeroList extends Component {

  static propTypes = {
    list: PropTypes.array,
  };

  static defaultProps = {
  };

  renderHeroList() {
    return this.props.list.map((heroItem) => {
      return (
        <div className="HeroList-heroItem col col-sm-12 col-md-6 col-lg-4">
          <HeroItem imgUrl={ heroItem.imgUrl } imgAlt={ heroItem.imgAlt }
                    header={ heroItem.header } content={ heroItem.content } />
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

export default HeroList;
