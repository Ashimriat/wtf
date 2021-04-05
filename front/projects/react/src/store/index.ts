import { createStore, combineReducers /* , applyMiddleware */ } from 'redux';
import { appeals, appealsActions } from './reducers/appeals';


const reducer = combineReducers({ appeals });
const store = createStore(reducer);

export const actions = {
  ...appealsActions,
};
export default store;
