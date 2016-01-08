import React, { PropTypes, Component } from 'react';
import style from './HeroItem.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import { Thumbnail } from 'components';

class HeroItem extends Component {

  static propTypes = {
    hero: PropTypes.object.isRequired,
    className: PropTypes.string,
    onAddHeroToTeam: PropTypes.func.isRequired,
    onRemoveHeroFromTeam: PropTypes.func.isRequired,
  };

  static defaultProps = {
    hero: {},
  };

  constructor(props) {
    super(props);

    this.handleAddHero = this.handleAddHero.bind(this);
    this.handleRemoveHero = this.handleRemoveHero.bind(this);
  }

  handleAddHero() {
    const { onAddHeroToTeam, hero } = this.props;
    onAddHeroToTeam(hero.id);
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

    return <Thumbnail className="HeroItem-thumbnail" imageUrl={ imageUrl } imageAlt={ imageAlt } />;
  }

  _renderInfoWrapper() {
    const { name, description } = this.props.hero;

    return (
      <div className="HeroItem-infoWrapper">
        { name && <h3 className="HeroItem-name">{ name }</h3> }
        { description && <p className="HeroItem-description">{ description }</p> }
      </div>
    );
  }

  _renderAddAction() {
    return <a className="HeroItem-addAction" onClick={ this.handleAddHero }>+</a>;
  }

  _renderRemoveAction() {
    return <a className="HeroItem-removeAction" onClick={ this.handleRemoveHero }>X</a>;
  }

  _renderActionsWrapper() {
    const { isAdded } = this.props.hero;

    return (
      <div className="HeroItem-actionsWrapper">
        { isAdded ? this._renderRemoveAction() : this._renderAddAction() }
      </div>
    );
  }

  render() {
    return (
      <div className={ classnames(this.props.className, 'HeroItem card') }>
        { this._renderThumbnail() }
        { this._renderInfoWrapper() }
        { this._renderActionsWrapper() }
      </div>
    );
  }

}

export default HeroItem;
