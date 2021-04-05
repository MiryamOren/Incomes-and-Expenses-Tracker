import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import TransactionForm from '../TransactionForm'
import {formatDate} from '../../helperFunctions'

const Page1 = ({userId, API}) => {
  const [acceptMsg, setAcceptMsg] = useState('');
  const [incomeCounter, setIncomeCounter] = useState(0);
  const [expenseCounter, setExpenseCounter] = useState(0);

  const emptyTrans = {
    amount:"",
    description:"",
    category:"",
    date: formatDate(new Date()),
  };

  const postTrans = async (trans) => {
    try{
      const getRes = await axios.get(`${API}/${userId}`);
      const temp = getRes.data;
      temp[trans.type + 's'].push(trans);
      await axios.put(`${API}/${userId}`, temp);

    } catch(err){
      console.log(err)
    }

    setAcceptMsg(`The ${trans.type} has successfully absorbed`)
    trans.type === "income"? 
        setIncomeCounter(incomeCounter + 1) : 
        setExpenseCounter(expenseCounter + 1);

      setTimeout(() => {
        setAcceptMsg('');
      }, 3000);
  }

  const newIncome = () => {
    const emptyIncome = {...emptyTrans};
    emptyIncome.type = "income";
    emptyIncome.id = `income${incomeCounter}`;
    return emptyIncome;
  }
  const newExpense = () => {
    const emptyExpense = {...emptyTrans};
    emptyExpense.type = "expense";
    emptyExpense.id = `expense${expenseCounter}`;
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