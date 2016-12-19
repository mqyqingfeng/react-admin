import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import fetch from 'UTIL/fetch.js'

function fetchUser(payload) {
    return fetch('/api/login', {
        method: 'POST',
        body: payload
    })
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* FetchLogin(action) {

    const user = yield call(fetchUser, action.payload);

    if (user.status == 200) {
        yield put({ type: "LOGIN_SUCCESS", user: user });
    } else {
        yield put({ type: "LOGIN_FAILED", user: user });
    }

}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* loginSaga() {
    yield * takeEvery("LOGIN_REQUEST", FetchLogin);
}


export default loginSaga;
