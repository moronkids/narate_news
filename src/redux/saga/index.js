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
  HIT_GETNEWS,
  GET_NEWS,
  HIT_GETONENEWS,
  GET_ONENEWS,
  HIT_PUTNEWS,
  HIT_DELETENEWS,
  DELETE_NEWS,
  HIT_POSTNEWS,
  POST_NEWS,
} from "redux/actions/index";
// Import all actions

// Import all api'
import { signIn, signup } from "redux/api/auth";
import { deleteNews, getNews, getOneNews, postNews, putNews } from "redux/api/news";

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

//news

function* getNewsFunc({payload}) {
  const news = yield call(getNews, payload)
  yield put({type: GET_NEWS, payload: news})

}
function* getOneNewsFunc({payload}) {
  const news = yield call(getOneNews, payload)
  yield put({type: GET_ONENEWS, payload: news})

}
function* putNewsFunc({payload}) {
  const news = yield call(putNews, payload)
  yield put({type: GET_ONENEWS, payload: news})

}
function* postNewsFunc({ payload }) {
  const news = yield call(postNews, payload);
  yield put({ type: POST_NEWS, payload: news });
}
function* deleteNewsFunc({payload}) {
  const news = yield call(deleteNews, payload)
  yield put({type: DELETE_NEWS, payload: news})

}


export default function* protra() {
  //auth
  yield takeEvery(HIT_LOGIN, signInFunc);
  yield takeEvery(HIT_SIGNUP, signUpFunc);
  yield takeEvery(HIT_SIGNOUT, signOutFunc);
  // news
  yield takeEvery(HIT_GETNEWS, getNewsFunc);
  yield takeEvery(HIT_GETONENEWS, getOneNewsFunc);
  yield takeEvery(HIT_PUTNEWS, putNewsFunc);
  yield takeEvery(HIT_POSTNEWS, postNewsFunc);
  yield takeEvery(HIT_DELETENEWS, deleteNewsFunc);
}
