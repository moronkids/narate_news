import React, { useState } from "react";
import NarateLogo from "assets/images/narate.png";
import { Link } from "react-router-dom";
import { HIT_SIGNOUT } from "redux/actions";
import { useSelector, useDispatch, connect } from "react-redux"; //hooks
const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const showMenu = (e) => {
    // e.preventDefault();
    // alert("juhg")
    setShow(!show);
  };
  return (
    <>
      <nav
        className="sticky-top navbar navbar-expand-lg navbar-light mx-auto"
        style={{ height: "90px" }}
      >
        <Link className="navbar-brand d-flex" to="/">
          <img src={NarateLogo} alt="" className="my-auto" width="40px" />
          <span className="narateText">narate</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "0px solid blue" }}
        >
          <span
            onClick={(e) => showMenu(e)}
            className="navbar-toggler-icon"
          ></span>
        </button>
        <div
          className={`w-100 collapse navbar-collapse text-right position-relative`}
          id="navbarNavDropdown"
        >
          {/* <ul className="navbar-nav w-100"> */}
          {/* <div className="float-right"> */}
          {/* <div className="d-flex w-100"> */}
          <div className="d-none d-md-block float-right w-100 position-absolute">
            <Link to="/news" className="">
              <span className="w-auto mx-2 text-right">News</span>
            </Link>
            {localStorage.getItem("token") && (
              <Link to="/dashboard">
                <span className="w-100 mx-2 text-right">Dashboard</span>
              </Link>
            )}
            {localStorage.getItem("token") ? (
              <Link to="/" onClick={(e) => dispatch({ type: HIT_SIGNOUT })}>
                <span className="w-auto mx-2 text-right">Logout</span>
              </Link>
            ) : (
              <Link to="/signin">
                <span className="w-auto mx-2 text-right">Login</span>
              </Link>
            )}
          </div>

          {/* </div>
          {/* </div> */}
          {/* </ul> */}
        </div>
      </nav>
      <div
        style={{ zIndex: "90" }}
        className={`${
          show ? `d-block` : `d-none`
        } d-md-none float-right w-100 position-absolute navbar-nav row p-0 m-0 py-4 bg-light`}
      >
        <Link to="/news" className="w-100 row h5" onClick={(e) => showMenu(e)}>
          <span className="w-100 mx-2 text-right">News</span>
        </Link>
        <Link className="w-100 row h5" onClick={(e) => showMenu(e)}>
          <Link to="/dashboard">
            <span className="w-100 mx-2 text-right">Dashboard</span>
          </Link>
        </Link>
        <Link to="/signin" className="w-100 row h5" onClick={(e) => showMenu(e)}>
          <span className="w-100 mx-2 text-right">Login</span>
        </Link>
      </div>
    </>
  );
};

export default Header;
