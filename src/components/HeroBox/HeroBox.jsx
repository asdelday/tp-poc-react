import React, { PropTypes, Component } from 'react';
import style from './HeroBox.scss'; // eslint-disable-line no-unused-vars
import { HeroList, HeroTeam } from 'components';

class HeroBox extends Component {

  static propTypes = {
    heroes: PropTypes.object.isRequired,
    onAddHeroToTeam: PropTypes.func.isRequired,
    onRemoveHeroFromTeam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    heroes: {},
  };

  render() {
    const { heroList, heroTeamTitle } = this.props.heroes;
    const { onAddHeroToTeam, onRemoveHeroFromTeam } = this.props;
    const heroTeamList = heroList.filter(h => h.isAdded);

    return (
      <div className="HeroBox">
        <HeroList className="HeroBox-heroList" list={ heroList }
                  onAddHeroToTeam={ onAddHeroToTeam } onRemoveHeroFromTeam={ onRemoveHeroFromTeam } />
        <HeroTeam className="HeroBox-heroesTeam"
                  title={ heroTeamTitle } list={ heroTeamList }
                  onRemoveHeroFromTeam={ onRemoveHeroFromTeam } />
      </div>
    );
  }

}

export default HeroBox;
