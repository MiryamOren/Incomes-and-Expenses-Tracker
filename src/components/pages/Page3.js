/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import BarChart from '../BarChart'
import {formatDate, datesBetween} from '../../helperFunctions'

const Page3 = ({ API, userId }) => {
  const [userObj, setUserObj] = useState(null);
  const [inputRange, setInputRange] = 
    useState({startDate: '2021-03-05', endDate: formatDate(new Date())});
  const [chartRange, setChartRange] = useState(inputRange);
  const [dataType, setDataType] = useState('expenses');
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API}/${userId}`);
        setUserObj(res.data);
      } catch(err){
        console.log(err)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    if (userObj) {
      const transactions = userObj[dataType];
      const filteredTransactions = transactions.filter(trans => ((trans.date >= chartRange.startDate) && (trans.date <= chartRange.endDate)));
      const dates = datesBetween(new Date(chartRange.startDate), new Date(chartRange.endDate));
      const datesWithData = dates.map(date => {
        const sum = filteredTransactions
          .filter(trans => Date.parse(trans.date) === Date.parse(date))
          .reduce((sum, currentTrans) => sum + currentTrans.amount, 0);
        return {amount: sum === 0? null: sum, date: date.toDateString()}
      });
      console.log('datesWithData');
      console.log(datesWithData);
      setData(datesWithData.filter(obj => obj.amount))
    }
  }, [userObj, chartRange, dataType]);

  return (
    <div>
    <h1>{`${dataType} from ${chartRange.startDate} to ${chartRange.endDate}`}</h1>
    <button onClick={() => setDataType('incomes')}>incomes</button>
    <button onClick={() => setDataType('expenses')}>expenses</button>
      <label>from</label>
      <input 
        type="date" 
        value={inputRange.startDate}
        onChange={(e) => setInputRange({
          endDate: inputRange.endDate, startDate: e.target.value})}
      />
      <label>to</label>
      <input 
        type="date" 
        max={formatDate(new Date())} 
        value={inputRange.endDate}
        onChange={(e) => setInputRange({
          startDate: inputRange.startDate, endDate: e.target.value})}
      />
      <button onClick={() => setChartRange(inputRange)}>Show</button>
      <BarChart 
        data={data}
        keys={["amount"]} 
        indexBy="date"
      />
    </div>
  );
}

export default Page3
