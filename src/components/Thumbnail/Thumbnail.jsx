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
    return (
      <div className={ classnames(this.props.className, 'Thumbnail') }>
        <img className="Thumbnail-img" src={ this.props.imageUrl } alt={ this.props.imageAlt } />
      </div>
    );
  }

}

export default Thumbnail;
