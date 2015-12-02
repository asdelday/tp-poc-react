import React, { PropTypes, Component } from 'react';
import style from './Navigation.scss'; // eslint-disable-line no-unused-vars

const propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
};
const defaultProps = {
  title: '',
  items: [],
};

class Navigation extends Component {

  render() {
    return (
      <nav className="Navigation">
        <h1 className="Navigation-title">{ this.props.title.toUpperCase() }</h1>
      </nav>
    );
  }

}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
