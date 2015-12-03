import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import style from './Thumbnail.scss'; // eslint-disable-line no-unused-vars

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  className: PropTypes.string,
};
const defaultProps = {
  imageUrl: '',
  imageAlt: 'Thumbnail',
};

class Thumbnail extends Component {

  render() {
    return (
      <div className={ classnames(this.props.className, 'Thumbnail') }>
        <img className="Thumbnail-img" src={ this.props.imageUrl } alt={ this.props.imageAlt } />
      </div>
    );
  }

}

Thumbnail.propTypes = propTypes;
Thumbnail.defaultProps = defaultProps;

export default Thumbnail;
