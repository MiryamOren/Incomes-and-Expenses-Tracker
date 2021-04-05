/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { ResponsiveBar } from '@nivo/bar'

const Page3 = ({ API, userId }) => {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
  
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];

  return (
    <div style={styles}>
    <h1>Nivo basic demo</h1>
    <div style={{ height: "400px" }}>
      <ResponsiveBar data={data} keys={["earnings"]} indexBy="quarter" />
    </div>
  </div>
  );
}

export default Page3
