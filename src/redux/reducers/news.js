/* eslint-disable import/no-anonymous-default-export */
import { GET_NEWS, GET_ONENEWS, LOGIN, POST_NEWS } from "redux/actions/index";

// Define your state here
const initialState = {
    data : [],
    detail: {
      title : "",
      image : "",
      desc : ""
    }
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_NEWS: {
        // alert("masuk")
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        data : {...payload.data}
      };
    }
    case POST_NEWS: {
        // alert("masuk")
      if (payload.status === "failed") return { ...state };
      state.data[payload.data.id] = payload.data
      return {
        ...state
      };
    }
    case GET_ONENEWS: {
        // alert("masuk")
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        detail : {...payload.data}
      };
    }
    default:
      return state;
  }
};
