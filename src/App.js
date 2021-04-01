import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Page2">Page2</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Page2">
            <Page2 />
          </Route>
          <Route path="/">
            <Page1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
