import React, { PropTypes, Component } from 'react';
import style from './HeroForm.scss'; // eslint-disable-line no-unused-vars

class HeroForm extends Component {

  static propTypes = {
  };

  static defaultProps = {
  };

  render() {

    return (
      <form id="HeroForm" name="HeroForm" className="HeroForm">
        <input type="text" name="HeroSearchInput" id="HeroSearchInput" className="HeroForm-searchInput" />
        <button className="HeroForm-searchSubmit" type="submit">GO</button>
      </form>
    );
  }

}

export default HeroForm;
