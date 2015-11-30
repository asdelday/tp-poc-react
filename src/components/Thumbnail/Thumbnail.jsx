import React, { PropTypes, Component } from 'react';
import style from './Thumbnail.css'; // eslint-disable-line no-unused-vars

class Thumbnail extends Component {

  static propTypes = {
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string,
    header: PropTypes.string,
    content: PropTypes.string,
  };

  static defaultProps = {
  };

  render() {
    return (
      <div className="Thumbnail thumbnail">
        <img className="Thumbnail-img" src={ this.props.imgUrl } alt={ this.props.imgAlt } />
        <div className="Thumbnail-caption caption">
          <h3 className="Thumbnail-title">{ this.props.header }</h3>
          <p className="Thumbnail-content">{ this.props.content }</p>
        </div>
      </div>
    );
  }

}

export default Thumbnail;
