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
    id:incomeCounter,
  };

  const emptyIncome = {...emptyTrans};
  emptyIncome.type = "income";

  const emptyExpense = {...emptyTrans};
  emptyExpense.type = "expense";

  const postTrans = async (trans, transType) => {
    console.log('page 1 got new trans:');
    console.log(trans)
    try{
      const getRes = await axios.get(`${API}/${userId}`);
      const temp = getRes.data;
      console.log(temp);
      console.log(trans.type + 's');
      temp[trans.type + 's'].push(trans);
      const putRes = await axios.put(`${API}/${userId}`, temp);
      console.log(putRes.data)
      setAcceptMsg(`The ${trans.type} has successfully absorbed`)

      setTimeout(() => {
        setAcceptMsg('');
      }, 3000);

      trans.type === "income"? 
        setIncomeCounter(incomeCounter + 1) : 
        setExpenseCounter(expenseCounter + 1);

    } catch(err){
      console.log(err)
    }
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
            trans = {emptyIncome}
            title="New Income"
            func={postTrans}
            btnTxt="+"
          />
          <TransactionForm
            trans = {emptyExpense}
            title="New Expense"
            func={postTrans}
            btnTxt="+"
          />
        </div>
      }
      
    </div>
  );
}
// props: title, id, amount, description, category, date, func
export default Page1;