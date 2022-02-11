import { createStore, combineReducers } from "redux";
import entriesReducer from '../reducers/entries.reducers';

const configureStore = () => {
  const combinedReducers = combineReducers({
    entries: entriesReducer,
  });
  const store = createStore(combinedReducers);
  return store;
};

export default configureStore;
