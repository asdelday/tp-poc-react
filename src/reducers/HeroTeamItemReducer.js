import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

const defaultState = new Immutable.List();

export function heroTeamItemReducer(state = defaultState, action) {
  switch (action.type) {
    case types.ADD_HERO_TO_TEAM:
      return state.concat(action.hero);
    case types.REMOVE_HERO_FROM_TEAM:
      return state.delete(state.indexOf(action.hero));
    default:
      return state;
  }
}
