import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({ data, keys, indexBy }) => {
  console.log(data);
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return (
    <div style={styles}>
      <div style={{ height: "40vh" }}>
        <ResponsiveBar data={data} keys={keys} indexBy={indexBy}/>
      </div>
  </div>
  );
}

export default BarChart;