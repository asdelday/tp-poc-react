import React, { PropTypes, Component } from 'react';
import style from './Navigation.scss'; // eslint-disable-line no-unused-vars

class Navigation extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
  };

  static defaultProps = {
    title: '',
    items: [],
  };

  render() {
    return (
      <nav className="Navigation">
        <h1 className="Navigation-title">{ this.props.title.toUpperCase() }</h1>
      </nav>
    );
  }

}

export default Navigation;
