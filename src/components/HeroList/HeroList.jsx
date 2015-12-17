import React, { PropTypes, Component } from 'react';
import style from './HeroList.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import HeroItem from '../HeroItem';

const propTypes = {
  list: PropTypes.array,
  onAddHeroToTeam: PropTypes.func,
  onRemoveHeroToTeam: PropTypes.func,
  className: PropTypes.string,
};
const defaultProps = {
  list: [],
};

class HeroList extends Component {

  renderHeroList() {
    const onAddHeroToTeam = this.props.onAddHeroToTeam;
    const onRemoveHeroToTeam = this.props.onRemoveHeroToTeam;
    let heroKey = '';

    return this.props.list.map((heroItem = {}) => {
      heroKey = 'heroItemKey-' + heroItem.id;

      return (
          <HeroItem className="HeroList-item" key={ heroKey } hero={ heroItem }
                    onAddHeroToTeam={ onAddHeroToTeam } onRemoveHeroToTeam={ onRemoveHeroToTeam } />
      );
    });
  }

  render() {
    const list = this.renderHeroList();

    return (
      <div className={ classnames(this.props.className, 'HeroList') }>
        { list }
      </div>
    );
  }

}

HeroList.propTypes = propTypes;
HeroList.defaultProps = defaultProps;

export default HeroList;
