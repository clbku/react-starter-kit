import { combineReducers } from 'redux';
import { countReducer } from './reducers/count';

const rootReducer = combineReducers({
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
