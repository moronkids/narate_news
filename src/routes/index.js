import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/guest"
// import LoggedRoutes from "routes/logged"
// import Signup  from "pages/signup";
import Signin from "pages/signin";
import Home from "pages/home";
import News from "pages/news";
import NewsDetail from "pages/news/details";
import Dashboard from "pages/dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home}  />
        <GuestRoutes exact path="/news" component={News}  />
        <GuestRoutes exact path="/news/detail/:id" component={NewsDetail}  />
        <GuestRoutes exact path="/dashboard" component={Dashboard}  />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </>
  );
};;

export default Routes;
