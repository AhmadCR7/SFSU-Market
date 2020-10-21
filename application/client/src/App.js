import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aboutuspage from "./component/Aboutus/Aboutus";
import Navigation from "./component/Navbar/Navigation.js"
import Homepage from "./component/Homepage/Homepage"
import Login from './component/Login/Login'
import Signup from "./component/Signup/Signup";
import Messages from "./component/Messages/Messages"


class App extends Component {



  render() {

    return (
      <BrowserRouter>
        <div class="App">
          <Navigation />



          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/login" exact component={Login} />
            <Route path="/aboutus" component={Aboutuspage} />
            <Route path="/signup" component={Signup} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }


};


export default App;
