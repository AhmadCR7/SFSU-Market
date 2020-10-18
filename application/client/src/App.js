import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aboutuspage from "./component/Aboutus/Aboutus";
import Navigation from "./component/Navbar/Navigation.js"
import Homepage from "./component/Homepage/Homepage"
import Login from './component/Login/Login'
import Signup from "./component/Signup/Signup";


function App() {
  console.log("Rendering App");

  return (
    <BrowserRouter>
      <div class="App">
        <Navigation />


        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/aboutus" component={Aboutuspage} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};


export default App;
