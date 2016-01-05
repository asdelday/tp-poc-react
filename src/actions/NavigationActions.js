import * as types from '../constants/actionTypes';

export function setTitle(title) {
  return {
    type: types.SET_TITLE,
    title,
    date: Date.now(),
  };
}
