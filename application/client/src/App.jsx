import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Aboutuspage from './pages/Aboutus/Aboutus'
import Navbar from './component/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Listings from './pages/Lisitngs/Listings'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import Dashboard from './pages/Dashboard/Dashboard'
import Listing1 from './pages/Listing1/Listing1'
import CreateListing from './pages/CreateListing/CreateListing'

function App() {
  console.log('Rendering App')

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />
          <Route path="/aboutus" component={Aboutuspage} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/listings" component={Listings} />
          <Route path="/createlisting" component={CreateListing} />
          <Route path="/listing1" component={Listing1} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/admin-dashboard" component={AdminDashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
