import React, { PropTypes, Component } from 'react';
import style from './HeroList.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import HeroItem from '../HeroItem';

class HeroList extends Component {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    className: PropTypes.string,
    onAddHeroToTeam: PropTypes.func,
    onRemoveHeroToTeam: PropTypes.func,
  };

  static defaultProps = {
    list: [],
  };

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

export default HeroList;
