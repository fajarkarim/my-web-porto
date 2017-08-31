import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Portofolio from './components/Portofolio'
import Skill from './components/Skill'
import ContactMe from './components/ContactMe'
import AboutMe from './components/AboutMe'
import Interest from './components/Interest'
import Others from './components/Others'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/works" component={ Portofolio }/>
          <Route exact path="/skill" component={ Skill }/>
          <Route exact path="/aboutme" component={ AboutMe }/>
          <Route exact path="/contact" component={ ContactMe }/>
          <Route exact path="/interest" component={ Interest }/>
          <Route exact path="/others" component={ Others }/>
        </div>
      </Router>
    );
  }
}

export default App;
