import React, { PropTypes, Component } from 'react';
import style from './Badge.css'; // eslint-disable-line no-unused-vars

class Badge extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number,
  };

  static defaultProps = {
    number: 0,
  };

  render() {
    return (
      <button className="Badge btn btn-primary" type="button">
        { this.props.title } <span className="badge">{ this.props.number }</span>
      </button>
    );
  }

}

export default Badge;
