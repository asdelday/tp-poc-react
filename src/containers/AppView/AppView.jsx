import React, { Component } from 'react';

class AppView extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
    );
  }

}

export default AppView;
