import React from "react";
import AhmadApp from "./component/Ahmad/Ahmad";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./component/Homepage";
import NickApp from "./component/Nick/Nick";
import StevenPage from './component/Steven/StevenPage'

const App = () => {
  console.log('Rendering App')

  return (
    <BrowserRouter>
      <div class='App'>
        <div>
          <div>
            <Link to='/home' class='button'>
              HomePage
            </Link>
          </div>

          <div>
            <Link to='/ahmadcr7' class='button'>
              Ahmad
            </Link>
          </div>
          <div>
            <Link to='/nickgreensf' class='button'>
              Nicholas
            </Link>
          </div>
          <div>
            <Link to='/laurenlukee' class='button'>
              Lauren
            </Link>
          </div>
          <div>
            <Link to='/stevenmchenry01' class='button'>
              Steven
            </Link>
          </div>
          <div>
            <Link to='/WaqasHassan7' class='button'>
              Waqas
            </Link>
          </div>
        </div>

        <Switch>

          <Route path="/home" component={Homepage}></Route>
          <Route path="/ahmadcr7" component={AhmadApp} />
          <Route path="/nickgreensf" component={NickApp}/>
          <Route path="/laurenlukee" />
          <Route path="/stevenmchenry01" component={StevenPage}/>
          <Route path="//WaqasHassan7" />

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
