import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import style from './Thumbnail.scss'; // eslint-disable-line no-unused-vars

class Thumbnail extends Component {

  static propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    imageUrl: '',
    imageAlt: 'Thumbnail',
  };

  render() {
    const { imageUrl, imageAlt, className } = this.props;

    return (
      <div className={ classnames(className, 'Thumbnail') }>
        <img className="Thumbnail-img" src={ imageUrl } alt={ imageAlt } />
      </div>
    );
  }

}

export default Thumbnail;
