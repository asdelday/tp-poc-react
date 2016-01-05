import Immutable from 'immutable';
import * as types from '../constants/actionTypes';

const defaultState = new Immutable.List();

export function heroItem(state = defaultState, action) {
  switch (action.type) {
    case types.GET_HEROES:
      return state;
    default:
      return state;
  }
}
