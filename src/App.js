import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route path="/about">
        <About />
      </Route> */}
        {/* <Route path="/dashboard">
        <Dashboard />
      </Route> */}
      </Switch>
    </Router>


  );
}

export default App;
