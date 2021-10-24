import { combineReducers, createStore } from 'redux';
import offersReducer from './offers';

const rootReducer = combineReducers({
  offers: offersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;