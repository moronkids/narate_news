/* eslint-disable import/no-anonymous-default-export */
import { SET_LOADING, SET_LOADING_ } from "redux/actions/index";

// Define your state here
const initialState = {
  loading: false, // khusus waktu ada trigger button
  loading_: false, // trigger waktu ngebuka halaman
};

// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case SET_LOADING_: {
      return {
        ...state,
        loading_: payload,
      };
    }
    default:
      return state;
  }
};
