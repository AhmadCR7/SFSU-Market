import React, { useEffect } from 'react'
import ReactGA from 'react-ga' // Google Analytics
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
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
import Footer from './component/Footer/footer'

function App() {
  const history = createBrowserHistory()

  // Initialize google analytics page view tracking
  history.listen((location) => {
    ReactGA.initialize('G-FJQ9Z8CJEW')
    ReactGA.set({ page: location.pathname }) // Update the user's current page
    ReactGA.pageview(location.pathname) // Record a pageview for the given page
  })

  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Navbar />
        <Footer />
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
