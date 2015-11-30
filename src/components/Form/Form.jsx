import React, { PropTypes, Component } from 'react';
import style from './Form.css'; // eslint-disable-line no-unused-vars

import Badge from '../Badge';

class Form extends Component {

  static propTypes = {
    badge: PropTypes.object.isRequired,
  };

  static defaultProps = {
    badge: {},
  };

  render() {
    const badge = this.props.badge || {};

    return (
      <div className="Form">
        <Badge title={ badge.title } number={ badge.number } />
      </div>
    );
  }

}

export default Form;
