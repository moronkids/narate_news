import React from "react";
import { Switch, Route } from "react-router-dom";
import GuestRoutes from "routes/guest"
import LoggedRoutes from "routes/logged"
import Signup  from "pages/signup";
import Signin from "pages/signin";
import Home from "pages/home";
import News from "pages/news";
import NewsDetail from "pages/news/details";
import Dashboard from "pages/dashboard";
import DashboardDetail from "pages/dashboard/detail";
import DashboardCreate from "pages/dashboard/create";

const Routes = () => {
  return (
    <>
      <Switch>
        <GuestRoutes exact path="/" component={Home} />
        <GuestRoutes exact path="/news" component={News} />
        <GuestRoutes exact path="/news/detail/:id" component={NewsDetail} />
        <LoggedRoutes exact path="/dashboard" component={Dashboard} />
        <LoggedRoutes exact path="/dashboard/create" component={DashboardCreate} />
        <LoggedRoutes
          exact

          path="/dashboard/detail/:id"
          component={DashboardDetail}
        />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
};;

export default Routes;
