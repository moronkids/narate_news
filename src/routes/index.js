import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/guest"
// import LoggedRoutes from "routes/logged"
// import Signup  from "pages/signup";
import Signin from "pages/signin";
import Home from "pages/home";
import News from "pages/news";

const Routes = () => {
  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home}  />
        <GuestRoutes exact path="/news" component={News}  />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </>
  );
};;

export default Routes;
