import React from "react";
import { Switch, Route } from "react-router-dom";
import Collections from "./components/Collections/Collections";
import HotDeals from "./components/HotDeals/HotDeals";
import Business from "./components/Business/Business";
import Home from "./Home";
import BusinessSolution from "./components/BusinessSolution/BusinessSolution";
import ContactUs from "./components/ContactUs/ContactUs";

const BaseRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collections/" component={Collections} />
      <Route exact path="/hotdeals/" component={HotDeals} />
      <Route exact path="/business/" component={Business} />
      <Route exact path="/businessSolution" component={BusinessSolution} />
      <Route exact path="/contactus" component={ContactUs} />
    </Switch>
  );
};

export default BaseRoute;
