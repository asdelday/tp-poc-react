import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'components';

class NavigationView extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array,
  };

  static defaultProps = {
    title: '',
    items: [],
  };

  render() {
    const { title, items } = this.props;

    return <Navigation title={ title } items={ items } />;
  }

}

function mapStateToProps(state) {
  const { title, items } = state.navigation.toJS();
  return { title, items };
}

export default connect(mapStateToProps)(NavigationView);
