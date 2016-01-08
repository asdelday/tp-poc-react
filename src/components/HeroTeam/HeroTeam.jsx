import React, { PropTypes, Component } from 'react';
import style from './HeroTeam.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import { HeroTeamList } from 'components';

class HeroTeam extends Component {

  static propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    className: PropTypes.string,
    onRemoveHeroFromTeam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: 'My Heroes Team',
    list: [],
  };

  render() {
    const { title, list, className, onRemoveHeroFromTeam } = this.props;

    return (
      <div className={ classnames(className, 'HeroTeam') }>
        <div className="HeroTeam-wrapper">
          <h3 className="HeroTeam-title">
            { title }
            <div className="HeroTeam-title-countBadge">{ list && list.length }</div>
          </h3>
          { (list && list.length > 0) && <HeroTeamList className="HeroTeam-list" list={ list }
                                                       onRemoveHeroFromTeam={ onRemoveHeroFromTeam } /> }
        </div>
      </div>
    );
  }

}

export default HeroTeam;
