import React, { PropTypes, Component } from 'react';
import style from './HeroItem.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import Thumbnail from '../Thumbnail';

class HeroItem extends Component {

  static propTypes = {
    hero: PropTypes.object,
    className: PropTypes.string,
    onAddHeroToTeam: PropTypes.func,
    onRemoveHeroToTeam: PropTypes.func,
  };

  static defaultProps = {
    hero: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      isAdded: props.hero.isAdded,
    };

    this.handleAddHero = this.handleAddHero.bind(this);
    this.handleRemoveHero = this.handleRemoveHero.bind(this);
  }

  handleAddHero() {
    this.setState({ isAdded: true });

    if (typeof this.props.onAddHeroToTeam === 'function') {
      this.props.onAddHeroToTeam(this.props.hero);
    }
  }

  handleRemoveHero() {
    this.setState({ isAdded: false });

    if (typeof this.props.onRemoveHeroToTeam === 'function') {
      this.props.onRemoveHeroToTeam(this.props.hero);
    }
  }

  // RENDER METHODS
  // ===================================================================================================================

  _renderThumbnail() {
    const thumbnail = this.props.hero.thumbnail || {};
    const imageUrl = (thumbnail.path && thumbnail.extension && thumbnail.path + '.' + thumbnail.extension) || '';
    const imageAlt = this.props.hero.name || '';

    return (
      <Thumbnail className="HeroItem-thumbnail" imageUrl={ imageUrl } imageAlt={ imageAlt } />
    );
  }

  _renderInfoWrapper() {
    const name = this.props.hero.name || '';
    const description = this.props.hero.description || '';

    return (
      <div className="HeroItem-infoWrapper">
        { name && <h3 className="HeroItem-name">{ name }</h3> }
        { description && <p className="HeroItem-description">{ description }</p> }
      </div>
    );
  }

  _renderAddAction() {
    return (
      <a className="HeroItem-addAction" onClick={ this.handleAddHero }>Add</a>
    );
  }

  _renderRemoveAction() {
    return (
      <a className="HeroItem-removeAction" onClick={ this.handleRemoveHero }>Remove</a>
    );
  }

  _renderActionsWrapper() {
    const isAdded = this.state.isAdded || false;

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
