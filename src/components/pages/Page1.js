/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import TransactionForm from '../TransactionForm'
import {formatDate} from '../../helperFunctions'

const Page1 = ({userId, API, clearFunc}) => {
  const [acceptMsg, setAcceptMsg] = useState('');
  // const [incomeCounter, setIncomeCounter] = useState(null);
  // const [expenseCounter, setExpenseCounter] = useState(null);

  const emptyTrans = {
    amount:null,
    description:"",
    category:"",
    date: formatDate(new Date()),
  };

  // Handles incomeCounter and expenseCounter for transactins IDs
  // useEffect(() => {
  //   // page loading - get counters
  //   const getCounters = async () => {
  //     console.log('page loading - get counters');
  //     try {
  //       const getRes = await axios.get(`${API}/${userId}`);
  //       // setIncomeCounter(getRes.data.incomeCounter);
  //       // setExpenseCounter(getRes.data.expenseCounter);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }
  //   getCounters();
  // }, []);

  const postTrans = async (trans) => {
    console.log('in page 1 postTrans. trans is:');
    console.log(trans);
    try{
      const getRes = await axios.get(`${API}/${userId}`);
      const temp = getRes.data;
      temp[trans.type + 's'].push(trans);
      // update counters
      // trans.type === "income"? 
      //   temp.incomeCounter = incomeCounter + 1 : 
      //   temp.expenseCounter = expenseCounter + 1;
      await axios.put(`${API}/${userId}`, temp);
    } catch(err){
      console.log(err)
    }

    setAcceptMsg(`The ${trans.type} has successfully absorbed`)
    // trans.type === "income"? 
    //     // setIncomeCounter(incomeCounter + 1) : 
    //     // setExpenseCounter(expenseCounter + 1);

      const timeOut = setTimeout(() => {
        setAcceptMsg('');
      }, 3000);
      clearFunc({var: timeOut, func: clearTimeout.bind(window)});
  }

  const newIncome = () => {
    // console.log('counters:')
    // console.log(incomeCounter, expenseCounter);

    const emptyIncome = {...emptyTrans};
    emptyIncome.type = "income";
    // emptyIncome.id = `income${incomeCounter}`;
    // emptyIncome.id = `income${incomeCounter}`;
    // console.log('emptyIncome.id');
    // console.log(emptyIncome.id);
    return emptyIncome;
  }
  const newExpense = () => {
    const emptyExpense = {...emptyTrans};
    emptyExpense.type = "expense";
    // emptyExpense.id = `expense${expenseCounter}`;
    // emptyExpense.id = new Date().toString();
    // console.log('emptyExpense.id');
    // console.log(emptyExpense.id);
    return emptyExpense;
  }

  return (
    <div>
      Page1
      {
        (acceptMsg && 
        <p>{acceptMsg}</p>) 
        ||
        <div>
          <TransactionForm
            trans = {newIncome()}
            title="New Income"
            func={postTrans}
            btnTxt="+"
          />
          <TransactionForm
            trans = {newExpense()}
            title="New Expense"
            func={postTrans}
            btnTxt="+"
          />
        </div>
      }
      
    </div>
  );
}
export default Page1;