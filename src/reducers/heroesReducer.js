import Immutable from 'immutable';
import { actionTypes, statusTypes } from 'constants';
import { heroActions } from 'actions';
import hero from 'reducers/heroReducer';

const defaultState = new Immutable.Map({
  status: statusTypes.NOT_REQUESTED,
  limit: 99,
  heroTeamTitle: 'My Heroes Team',
});

function mapHeroesResponse(response) {
  const { status, data } = response;

  if (status === statusTypes.FAILED || !data) return { status };

  const { offset, limit, total, count, results } = data;
  return {
    status,
    offset,
    limit,
    total,
    count,
    heroList: new Immutable.List(results.map(h => hero(undefined, heroActions.newHero(h)))),
  };
}

export default function heroManager(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.REQUEST_HEROES:
      return state.set('status', statusTypes.REQUESTED);

    case actionTypes.RECEIVE_HEROES:
      return state.merge(mapHeroesResponse(action.result));

    case actionTypes.SET_HEROES_LIMIT:
      return state.set('limit', action.limit);

    case actionTypes.SET_HERO_TEAM_TITLE:
      return state.set('heroTeamTitle', action.title);

    case actionTypes.ADD_HERO_TO_TEAM:
      return state.set('heroList', state.get('heroList').map(h => hero(h, action)));

    case actionTypes.REMOVE_HERO_FROM_TEAM:
      return state.set('heroList', state.get('heroList').map(h => hero(h, action)));

    default:
      return state;
  }
}
