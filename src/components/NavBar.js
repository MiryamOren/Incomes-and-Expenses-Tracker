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
      <ul>
        <li key={1}>
          <Link onClick={clearFunction} to="/">Home</Link>
        </li>
        <li key={2}>
          <Link onClick={clearFunction} to="/history">History</Link>
        </li>
        <li key={3}>
          <Link onClick={clearFunction} to="/analyze">Analyze</Link>
        </li>
      </ul>
    </nav>);
  
}

export default NavBar;