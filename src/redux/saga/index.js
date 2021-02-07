// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
// Import all actions
import {
  SET_LOADING,
  SET_LOADING_,
  HIT_LOGIN,
  LOGIN,
  SIGNUP,
  HIT_SIGNUP,
  SIGNOUT,
  HIT_SIGNOUT,
} from "redux/actions/index";
// Import all actions

// Import all api'
import { signIn, signup } from "redux/api/auth";

// Import all api'

function* signInFunc({ payload }) {
  yield put({ type: SET_LOADING, payload: true }); // reducers
  const todos = yield call(signIn, payload); // api
  yield put({ type: LOGIN, payload: todos }); // reducers
  yield put({ type: SET_LOADING, payload: false }); // reducers
}
function* signUpFunc({ payload }) {
  yield put({ type: SET_LOADING, payload: true });
  const todos = yield call(signup, payload);
  yield put({ type: SIGNUP, payload: todos });
  yield put({ type: SET_LOADING, payload: false });
}
function* signOutFunc() {
  yield put({ type: SIGNOUT });
}

export default function* protra() {
  yield takeEvery(HIT_LOGIN, signInFunc);
  yield takeEvery(HIT_SIGNUP, signUpFunc);
  yield takeEvery(HIT_SIGNOUT, signOutFunc);

  // yield takeLatest(HIT_REORDER_CARD, getReorderCard);
}
