import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { appeals, appealsActions } from './reducers/appeals';
import sagaHolder from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ appeals }),
  applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(sagaHolder);


export const actions = {
  ...appealsActions,
};
export default store;
