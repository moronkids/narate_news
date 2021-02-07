import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";
import iconPlus from "assets/images/plus.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { HIT_UPDATEUSER } from "redux/actions";
const MySwal = withReactContent(Swal);

export const loadX = () => {
  MySwal.fire({
    customClass: "swal-wide",
    html: `<div class"d-flex text-center w-100 swal-wide"><h4 class=" text-center mx-auto  w-100 h6 swal-wide" style="width:100px">Please wait, we trying to send request...</h4></div>`,
  });
  MySwal.showLoading();
};
