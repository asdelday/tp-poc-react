import React, { PropTypes, Component } from 'react';
import style from './HeroTeamList.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import HeroTeamItem from '../HeroTeamItem';

const propTypes = {
  list: PropTypes.array,
  className: PropTypes.string,
};
const defaultProps = {
  list: [],
};

class HeroTeamList extends Component {

  renderHeroTeamList() {
    let heroTeamKey = '';

    return this.props.list.map((heroTeamItem) => {
      heroTeamKey = 'heroTeamKey-' + heroTeamItem.id;

      return (
        <HeroTeamItem key={ heroTeamKey } className="HeroTeamList-item" hero={ heroTeamItem } />
      );
    });
  }

  render() {
    const list = this.renderHeroTeamList();

    return (
      <div className={ classnames(this.props.className, 'HeroTeamList') }>
        { list }
      </div>
    );
  }

}

HeroTeamList.propTypes = propTypes;
HeroTeamList.defaultProps = defaultProps;

export default HeroTeamList;
