/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import '../../css/page0.css'
const Page0 = () => {
  const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
  window.addEventListener('resize', () =>{
    setIsMobile(window.innerWidth <= 900);
  } );

  return (
    <div className="page page0">
      <div className="page0_heading">
        <h1>Start to Save Money</h1>
        {!isMobile &&
          <div 
            className="page0_logo-icon" 
            style={{background: `url(./static/app-logo-black.png) no-repeat center center/cover`}}
          ></div>}
      </div>
      <a href="/home">
          {isMobile? 
            <div 
              className="page0_logo-icon" 
              style={{background: `url(./static/app-logo-black.png) no-repeat center center/cover`}}
            ></div> :
            <button>Start</button>
          }
      </a>
      
    </div>
  );
}

export default Page0;