/* eslint-disable no-unused-vars */
import './css/normalize.css v8.0.1.css'
import './css/app.css'
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} 
from "react-router-dom";

import Page0 from './components/pages/Page0'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import NavBar from './components/NavBar'

const App = () => {
  const API = "https://60659f61b8fbbd0017566dda.mockapi.io/IncomesAndExpenses/users"
  const transProps = ['id', 'type', 'amount', 'description', 'category', 'date'];
  const userId = 1;
  const [toClear, setToClear] = useState([]);
  const clearFunction = () => {
    toClear.forEach(varToCancel => {
      (varToCancel.func)(varToCancel.var);
    });
    setToClear([]);
  }
  
  return (
    <Router className="app">
      <div>
      <NavBar
      clearFunction={clearFunction}
      />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
           
        <Route path="/" exact>
            <Page0 
            />
        </Route>

        <Route path="/home" exact>
            <Page1 
              API={API}
              userId={userId}
              clearFunc={(varToCancel) => {
                const temp = [...toClear];
                temp.push(varToCancel)
                setToClear(temp)
              }}
            />
          </Route>

          <Route path="/history" exact>
            <Page2 
              API={API}
              userId={userId}
              transProps={transProps}
            />
          </Route>

          <Route path="/analyze" exact>
            <Page3 
              API={API}
              userId={userId}
            />
          </Route>

        </Switch>
      </div>
      <div className="icons-author">
        Icons made by{'  '}
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a>{'  '}from{'  '} 
        {'  '}
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com.</a>
        
      </div>
    </Router>
    
  );
}

export default App;
