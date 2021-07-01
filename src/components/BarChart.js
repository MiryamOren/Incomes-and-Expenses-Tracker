/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveBar } from '@nivo/bar'

const BarChart = ({ data, keys, indexBy }) => {
  console.log(data)
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

  return (
    <div style={styles}> 
      <div style={{ height: "30vh", }} className="bar-chart-container">
        <ResponsiveBar 
          className="bar-chart"
          data={data.map(el => {return {...el, amount: parseFloat(el.amount)}})} 
          keys={keys} 
          indexBy={indexBy}
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'date',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'amount',
              legendPosition: 'middle',
              legendOffset: -40
          }}
          legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        tooltip={({data}) => {
          return (
            <strong >
              {data.date}
              <br/>
              {data.description.map((line, indx) => <React.Fragment key={indx}>{line}<br/></React.Fragment>)}
            </strong>
          );
        }
        }
        />
      </div>
  </div>
  );
}

export default BarChart;