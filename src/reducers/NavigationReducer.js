import Immutable from 'immutable';
import * as types from '../constants/actionTypes';

const defaultState = new Immutable.Map({
  title: 'Heroes',
  items: new Immutable.List(),
});

export function navigation(state = defaultState, action) {
  switch (action.type) {
    case types.SET_TITLE:
      return state.set('title', action.title);
    default:
      return state;
  }
}
