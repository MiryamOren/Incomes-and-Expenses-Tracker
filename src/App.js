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
    console.log('im in clear function, ')
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
            <Page1 
              API={API}
              userId={userId}
              clearFunc={(varToCancel) => {
                console.log('--------im im clearFunc------\n. clear arr is:');
                console.log(toClear);
                const temp = [...toClear];
                temp.push(varToCancel)
                console.log('temp is:')
                console.log(temp);
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
        Icons made by  
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/authors/payungkead" title="Payungkead"> Payungkead </a> from  
        <a target="_blank" rel="noreferrer" href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com.</a>
        {'  '}
        <a target="_blank" rel="noreferrer" href="https://www.pexels.com/photo/silhouette-of-mountains-1323550/">Photo by Simon Berger from Pexels </a>
      </div>
    </Router>
    
  );
}

export default App;
