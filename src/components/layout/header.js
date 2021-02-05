import React from "react";
import NarateLogo from "assets/images/narate.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light mx-auto"
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" w-100 collapse navbar-collapse text-right position-relative"
          id="navbarNavDropdown"
        >
          {/* <ul className="navbar-nav w-100"> */}
          {/* <div className="float-right"> */}
          {/* <div className="d-flex w-100"> */}
          <div className="float-right w-100 position-absolute">
            <span className="w-auto mx-2 text-right">News</span>
            <span className="w-auto mx-2 text-right">Dashboard</span>
            <Link to="signin">
              <span className="w-auto mx-2 text-right">Login</span>
            </Link>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </ul> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
