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
  const API = "https://60659f61b8fbbd0017566dda.mockapi.io/IncomesAndExpenses/users"
  const transProps = ['id', 'type', 'amount', 'description', 'category', 'date'];
  const userId = 1;
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
          <Route path="/history">
            <Page2 
            API={API}
            userId={userId}
            transProps={transProps}
            />
          </Route>
          <Route path="/">
            <Page1 
            API={API}
            userId={userId}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
