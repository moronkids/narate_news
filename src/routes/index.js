import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/guest"
// import LoggedRoutes from "routes/logged"
// import Signup  from "pages/signup";
import Signin from "pages/signin";
import Home from "pages/home";

const Routes = () => {

  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home}  />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </>
  );
};;

export default Routes;
