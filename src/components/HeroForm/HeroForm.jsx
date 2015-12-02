import React, { PropTypes, Component } from 'react';
import style from './HeroForm.scss'; // eslint-disable-line no-unused-vars

const propTypes = {};
const defaultProps = {};

class HeroForm extends Component {

  render() {

    return (
      <form id="HeroForm" name="HeroForm" className="HeroForm">
        <input type="text" name="HeroSearchInput" id="HeroSearchInput" className="HeroForm-searchInput" />
        <button className="HeroForm-searchSubmit" type="submit">GO</button>
      </form>
    );
  }

}

HeroForm.propTypes = propTypes;
HeroForm.defaultProps = defaultProps;

export default HeroForm;
