import React, { PropTypes, Component } from 'react';
import style from './HeroBox.scss'; // eslint-disable-line no-unused-vars
import HeroList from '../HeroList';
import HeroTeam from '../HeroTeam';
import { getHeroes } from '../../services';

class HeroBox extends Component {

  static propTypes = {
    heroes: PropTypes.object,
  };

  static defaultProps = {
    heroes: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      heroList: props.heroes.initialList,
      limit: props.heroes.initialLimit,
      heroTeamTitle: props.heroes.initialHeroTeamTitle,
      heroTeamList: props.heroes.initialHeroTeamList,
    };

    this.onAddHeroToTeam = this.onAddHeroToTeam.bind(this);
    this.onRemoveHeroToTeam = this.onRemoveHeroToTeam.bind(this);
  }

  componentWillMount() {
    this._loadHeroes();
  }

  onAddHeroToTeam(hero) {
    hero.isAdded = true;
    if (this.state.heroTeamList.indexOf(hero) > -1) return;
    this.setState({ heroTeamList: this.state.heroTeamList.concat([hero]) });
  }

  onRemoveHeroToTeam(hero) {
    hero.isAdded = false;
    const heroTeamList = this.state.heroTeamList;
    const heroIndex = heroTeamList.indexOf(hero);
    if (heroIndex < 0) return;
    this.setState({ heroTeamList: heroTeamList.slice(0, heroIndex).concat(heroTeamList.slice(heroIndex + 1)) });
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
    const heroTeamTitle = this.state.heroTeamTitle || [];
    const heroTeamList = this.state.heroTeamList || [];

    return (
      <div className="HeroBox">
        <HeroList className="HeroBox-heroList" list={ heroList }
                  onAddHeroToTeam={ this.onAddHeroToTeam } onRemoveHeroToTeam={ this.onRemoveHeroToTeam } />
        <HeroTeam className="HeroBox-heroesTeam" title={ heroTeamTitle } list={ heroTeamList } />
      </div>
    );
  }

}

export default HeroBox;
