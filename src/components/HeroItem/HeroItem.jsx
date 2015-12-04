import React, { PropTypes, Component } from 'react';
import style from './HeroItem.scss'; // eslint-disable-line no-unused-vars
import Thumbnail from '../Thumbnail';

const propTypes = {
  hero: PropTypes.object,
};
const defaultProps = {
  hero: {},
};

class HeroItem extends Component {

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

  _renderActionsWrapper() {
    return (
      <div className="HeroItem-actionsWrapper">
        <a href="#">Add</a>
      </div>
    );
  }

  render() {
    return (
      <div className="HeroItem card">
        { this._renderThumbnail() }
        { this._renderInfoWrapper() }
        { this._renderActionsWrapper() }
      </div>
    );
  }

}

HeroItem.propTypes = propTypes;
HeroItem.defaultProps = defaultProps;

export default HeroItem;
