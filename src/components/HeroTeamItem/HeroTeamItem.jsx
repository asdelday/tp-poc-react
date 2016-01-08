import React, { PropTypes, Component } from 'react';
import style from './HeroTeamItem.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import { Thumbnail } from 'components';

class HeroTeamItem extends Component {

  static propTypes = {
    hero: PropTypes.object,
    className: PropTypes.string,
    onRemoveHeroFromTeam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    hero: {},
  };

  constructor(props) {
    super(props);
    this.handleRemoveHero = this.handleRemoveHero.bind(this);
  }

  handleRemoveHero() {
    const { onRemoveHeroFromTeam, hero } = this.props;
    onRemoveHeroFromTeam(hero.id);
  }

  // RENDER METHODS
  // ===================================================================================================================

  _renderThumbnail() {
    const thumbnail = this.props.hero.thumbnail || {};
    const imageUrl = (thumbnail.path && thumbnail.extension && thumbnail.path + '.' + thumbnail.extension) || '';
    const imageAlt = this.props.hero.name || '';

    return (
      <Thumbnail className="HeroTeamItem-thumbnail" imageUrl={ imageUrl } imageAlt={ imageAlt } />
    );
  }

  _renderInfoWrapper() {
    const { name } = this.props.hero;

    return (
      <div className="HeroTeamItem-infoWrapper">
        { name && <h3 className="HeroTeamItem-name">{ name }</h3> }
      </div>
    );
  }

  _renderActionsWrapper() {
    return (
      <div className="HeroTeamItem-actionsWrapper">
        <a className="HeroTeamItem-removeAction" onClick={ this.handleRemoveHero }>X</a>
      </div>
    );
  }

  render() {
    return (
      <div className={ classnames(this.props.className, 'HeroTeamItem') }>
        { this._renderThumbnail() }
        { this._renderInfoWrapper() }
        { this._renderActionsWrapper() }
      </div>
    );
  }

}

export default HeroTeamItem;
