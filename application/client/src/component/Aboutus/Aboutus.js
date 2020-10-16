import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AhmadApp from "../Aboutus/Ahmad/Ahmad";
import NickApp from "../Aboutus/Nick/Nick";
import StevenPage from "../Aboutus/Steven/StevenPage";
import LaurenPage from "../Aboutus/Lauren/LaurenPage";
import Waqas from "../Aboutus/Waqas/Waqas";

import "./Aboutus.css";
import Navigation from "../Navigation";

const Aboutuspage = () => {
  return (
    <BrowserRouter>
    
      <div class="App">
        <div>
          <div>
            <Link to="/ahmadcr7" class="button">
              Ahmad
            </Link>
          </div>
          <div>
            <Link to="/nickgreensf" class="button">
              Nicholas
            </Link>
          </div>
          <div>
            <Link to="/laurenlukee" class="button">
              Lauren
            </Link>
          </div>
          <div>
            <Link to="/stevenmchenry01" class="button">
              Steven
            </Link>
          </div>
          <div>
            <Link to="/WaqasHassan7" class="button">
              Waqas
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/ahmadcr7" component={AhmadApp} />
          <Route path="/nickgreensf" component={NickApp} />
          <Route path="/laurenlukee" component={LaurenPage} />
          <Route path="/stevenmchenry01" component={StevenPage} />
          <Route path="/WaqasHassan7" component={Waqas} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default Aboutuspage;
