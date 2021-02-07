/* eslint-disable import/no-anonymous-default-export */
import {
    LOGIN
} from "redux/actions/index";

// Define your state here
const initialState = {
  data: "",
  token: "",
  auth: false,
  responseGoogle: "",
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case POST_SIGNUP: {
    //   if (payload.status === "failed") return { ...state };
    //   return {
    //     ...state,
    //     ...payload,
    //   };
    // }
    case LOGIN: {
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        ...payload,
        auth: true,
      };
    }
    default:
      return state;
  }
};
