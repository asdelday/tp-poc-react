import React, { PropTypes, Component } from 'react';
import style from './HeroItem.scss'; // eslint-disable-line no-unused-vars

class HeroItem extends Component {

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
      <div className="HeroItem card">
        <img className="HeroItem-img" src={ this.props.imgUrl } alt={ this.props.imgAlt } />
        <div className="HeroItem-caption caption">
          <h3 className="HeroItem-title">{ this.props.header }</h3>
          <p className="HeroItem-content">{ this.props.content }</p>
        </div>
      </div>
    );
  }

}

export default HeroItem;
