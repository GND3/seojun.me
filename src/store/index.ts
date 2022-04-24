import { combineReducers } from 'redux';
import userReducer from './models/user';

const rootReducer = combineReducers({
  userReducer,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
