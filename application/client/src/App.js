import React from "react";
import AhmadApp from "./component/Ahmad";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./component/Homepage";
const App = () => {
  console.log("Rendering App");

  return (
    <BrowserRouter>
      <div class="App">
        <div>
          <div>
            <Link to="/home" class="button">
              HomePage
            </Link>
          </div>

          <div>
            <Link to="/ahmadcr7" class="button">
              Ahmad
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/ahmadcr7" component={AhmadApp} />
          <Route path="/home" component={Homepage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
