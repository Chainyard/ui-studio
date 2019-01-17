import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import TypographyPage from './TypographyPage'

function HomePage({ ...props }) {
  return (
    <div>
      <ul>
        <li><Link to="/cozy">Cozy Design Page</Link></li>
        <li><Link to="/typography">Typography</Link></li>
      </ul>
    </div>
  )
}

const sandyBeige = 'rgb(251,250,246)'

function CozyPage({ ...props }) {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: sandyBeige }}>
      <h1 style={{ textAlign: 'center' }}>Cozy Page</h1>
    </div>
  )
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/typography" component={TypographyPage} />
            <Route path="/cozy" component={CozyPage} /> 
            <Route render={props => <div>404</div>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
