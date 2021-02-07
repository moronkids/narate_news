/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import auth from "redux/reducers/auth";

const appReducer = combineReducers({
  auth: auth,
});
const rootReducer = (state, action) => {
  if (action.type === "SIGNOUT") {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("persist:detailProject");
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
// const rootReducer = combineReducers({
//   loading: loading,
//   auth: auth,
//   task: task,
//   project: project,
//   detail: persistReducer(persistDetailProject, detail),
// });

// export default (state, action) => rootReducer(action.type === "POST_SIGNOUT" ? undefined : state, action);
