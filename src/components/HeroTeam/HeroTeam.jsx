import React, { PropTypes, Component } from 'react';
import style from './HeroTeam.scss'; // eslint-disable-line no-unused-vars
import classnames from 'classnames';
import HeroTeamList from '../HeroTeamList';

const propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  className: PropTypes.string,
};
const defaultProps = {
  title: 'My Heroes Team',
  list: [],
};

class HeroTeam extends Component {

  render() {
    return (
      <div className={ classnames(this.props.className, 'HeroTeam') }>
        <div className="HeroTeam-wrapper">
          <h3 className="HeroTeam-title">
            { this.props.title }
            <div className="HeroTeam-title-countBadge">{ this.props.list.length }</div>
          </h3>
          { (this.props.list.length > 0) && <HeroTeamList className="HeroTeam-list" list={ this.props.list } /> }
        </div>
      </div>
    );
  }

}

HeroTeam.propTypes = propTypes;
HeroTeam.defaultProps = defaultProps;

export default HeroTeam;
