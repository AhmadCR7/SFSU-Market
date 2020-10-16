import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Aboutuspage from "./component/Aboutus/Aboutus";
import Navigation from "./component/Navigation"

const App = () => {
  console.log("Rendering App");

  return (
    <BrowserRouter>
      <div class="App">
      <Navigation/>

      
        <div>
        <p>
      <center>
        <h1>Welcome To Software Engineering Class SFSU </h1>
        <h2>CSC 648 TEAM 3 Homepage</h2>
      </center>
     </p>


    




     
          
        </div>

        <Switch>
          <Route path="/aboutus" component={Aboutuspage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
