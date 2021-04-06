import '../css/navBar.css'
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const NavBar = ({clearFunction}) => {
  return(
    <nav>
      <Link className="nav__logo" onClick={clearFunction} to="/">
        <div 
          className="nav__logo-icon" 
          style={{background: `url(./static/app-logo.png) no-repeat center center/cover`}}
        ></div>
      </Link>
      <ul>
        <li key={1} className="nav__new-trans-link">
          <Link className="nav__link" onClick={clearFunction} to="/">
            <div 
              className="nav__icon"
              style={{background: `url(./static/plus.png) no-repeat center center/cover`}}
            ></div>
            {/*<label className="nav__txt" style={{textDecoration: 'none'}}>New <br/>Transaction</label>*/}
          </Link>
        </li>
        <li key={2} className="nav__records-link">
          <Link className="nav__link" onClick={clearFunction} to="/history">
            <div 
              className="nav__icon"
              style={{background: `url(./static/records2.png) no-repeat center center/cover`}}
            ></div>
            {/*<p className="nav__txt">Records</p>*/}
          </Link>
        </li>
        <li key={3} className="nav__analize">
          <Link className="nav__link" onClick={clearFunction} to="/analyze">
            <div 
              className="nav__icon"
              style={{background: `url(./static/graph.png) no-repeat center center/cover`}}
            ></div>
            {/*<p className="nav__txt">Analyze</p>*/}
          </Link>
        </li>
      </ul>
    </nav>);
  
}

export default NavBar;