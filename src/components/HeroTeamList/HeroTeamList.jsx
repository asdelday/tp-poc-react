import React, { PropTypes, Component } from 'react';
import style from './HeroTeamList.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import { HeroTeamItem } from 'components';

class HeroTeamList extends Component {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    className: PropTypes.string,
    onRemoveHeroFromTeam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    list: [],
  };

  renderHeroTeamList() {
    const { onRemoveHeroFromTeam } = this.props;
    let heroTeamKey = '';

    return this.props.list.map((heroTeamItem) => {
      heroTeamKey = 'heroTeamKey-' + heroTeamItem.id;

      return (
        <HeroTeamItem key={ heroTeamKey } className="HeroTeamList-item" hero={ heroTeamItem }
                      onRemoveHeroFromTeam={ onRemoveHeroFromTeam } />
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

export default HeroTeamList;
