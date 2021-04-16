import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import './index.css'

import { 
    Home,
    About,
    Contact,
    Artist,
    Wishlist,
    Cart,
    Feedback,
    MeetOurTeam
  } from './pages'

  function App() {

    return (
    <Router>
    <Navbar/>
    <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/artist">
          <Artist/>
        </Route>
        <Route exact path="/meetOurTeam">
          <MeetOurTeam/>
        </Route>
        <Route exact path="/feedback">
          <Feedback/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    )
  }
export default App
