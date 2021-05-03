import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* obtainer() {

}


function* sagaHolder() {
  yield takeEvery('USER_FETCH_REQUESTED', obtainer);
}

export default sagaHolder;
