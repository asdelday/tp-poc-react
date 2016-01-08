import { combineReducers } from 'redux';

import heroes from './heroesReducer';
import navigation from './navigationReducer';

const rootReducer = combineReducers({
  heroes,
  navigation,
});

export default rootReducer;
