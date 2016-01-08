import Immutable from 'immutable';
import { actionTypes } from 'constants';

const defaultState = new Immutable.Map({ id: 0, isAdded: false });

export default function hero(state = defaultState, action) {
  switch (action.type) {
    // Return a new Hero (Immutable Map)
    case actionTypes.NEW_HERO:
      const { id, isAdded, thumbnail, name, description } = action.hero;

      return new Immutable.Map({
        id: id,
        isAdded: isAdded || false,
        thumbnail: thumbnail,
        name: name,
        description: description,
      });

    case actionTypes.ADD_HERO_TO_TEAM:
      if (state.get('id') !== action.id) return state;
      return state.set('isAdded', true);

    case actionTypes.REMOVE_HERO_FROM_TEAM:
      if (state.get('id') !== action.id) return state;
      return state.set('isAdded', false);

    default:
      return state;
  }
}
