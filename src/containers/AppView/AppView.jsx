import React, { Component } from 'react';

class AppView extends Component {

  render() {
    return (
      <div id="app-view">
        {this.props.children}
      </div>
    );
  }

}

export default AppView;
