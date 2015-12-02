import React, { PropTypes, Component } from 'react';
import style from './HeroItem.scss'; // eslint-disable-line no-unused-vars

const propTypes = {
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  header: PropTypes.string,
  content: PropTypes.string,
};
const defaultProps = {};

class HeroItem extends Component {

  render() {
    return (
      <div className="HeroItem card">
        <img className="HeroItem-img" src={ this.props.imgUrl } alt={ this.props.imgAlt } />
        <div className="HeroItem-info">
          <h3 className="HeroItem-title">{ this.props.header }</h3>
          <p className="HeroItem-content">{ this.props.content }</p>
        </div>
      </div>
    );
  }

}

HeroItem.propTypes = propTypes;
HeroItem.defaultProps = defaultProps;

export default HeroItem;
