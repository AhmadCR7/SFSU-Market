import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Aboutuspage from "./pages/Aboutus/Aboutus";
import Navbar from "./component/Navbar/Navbar.js"
import Homepage from "./pages/Homepage/Homepage"
import Login from './pages/Login/Login'
import Signup from "./pages/Signup/Signup";
import Listings from "./pages/Lisitngs/Listings";

function App() {
  console.log("Rendering App");

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/aboutus" component={Aboutuspage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/listings" component={Listings}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};


export default App;
