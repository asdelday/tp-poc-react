import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { statusTypes } from 'constants';
import { heroActions } from 'actions';
import {getHeroes} from 'services';
import { HeroBox } from 'components';

class HeroesView extends Component {

  static propTypes = {
    status: PropTypes.string,
    code: PropTypes.number,
    count: PropTypes.number,
    limit: PropTypes.number,
    offset: PropTypes.number,
    total: PropTypes.number,
    heroTeamTitle: PropTypes.string,
    heroList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {
    heroList: new Immutable.List(),
  };

  componentWillMount() {
    const { limit, status, dispatch } = this.props;
    const limitPartial = (limit && `?limit=${limit}`) || '';

    if (status === statusTypes.NOT_REQUESTED) {
      dispatch(heroActions.requestHeroes());
      getHeroes(limitPartial)
        .done(data => {
          const response = Object.assign(data, { status: statusTypes.SUCCESS });
          dispatch(heroActions.receiveHeroes(response));
        })
        .fail(data => {
          const response = Object.assign(data, { status: statusTypes.FAILED });
          dispatch(heroActions.receiveHeroes(response));
        });
    }
  }

  render() {
    const { dispatch, status, code, count, limit, offset, total, heroList, heroTeamTitle } = this.props;
    const heroes = { status, code, count, limit, offset, total, heroList, heroTeamTitle };

    return (
      <HeroBox heroes={ heroes }
               onAddHeroToTeam={ id => dispatch(heroActions.addHeroToTeam(id)) }
               onRemoveHeroFromTeam={ id => dispatch(heroActions.removeHeroFromTeam(id)) } />
    );
  }

}

function mapStateToProps(state) {
  const { status, code, count, limit, offset, total, heroTeamTitle, heroList } = state.heroes.toJS();
  return { status, code, count, limit, offset, total, heroTeamTitle, heroList: heroList || [] };
}

export default connect(mapStateToProps)(HeroesView);
