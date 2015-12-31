import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

const defaultState = new Immutable.List();

export function heroReducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_HEROES:
      return state;
    default:
      return state;
  }
}
