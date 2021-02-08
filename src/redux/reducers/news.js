/* eslint-disable import/no-anonymous-default-export */
import { GET_NEWS, LOGIN } from "redux/actions/index";

// Define your state here
const initialState = {
    data : []
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_NEWS: {
        // alert("masuk")
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        ...payload
      };
    }
    default:
      return state;
  }
};
