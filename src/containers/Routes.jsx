import React from "react";
import { Switch, Route } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import Favourite from "./Favourite";
import Film from "./Film";
import Profile from "./Profile";

const Routes = () => (
  <MainLayout>
    <div>
      <Switch>
        <Route component={Film} exact path="/film/:id" />
        <Route component={Profile} exact path="/profile/:id" />
        <Route component={Favourite} exact path="/films" />
        <Route component={Favourite} path="/" />
      </Switch>
    </div>
  </MainLayout>
);

export default Routes;
