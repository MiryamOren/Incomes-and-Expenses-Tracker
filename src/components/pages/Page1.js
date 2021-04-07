/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import TransactionForm from '../TransactionForm'
import {formatDate} from '../../helperFunctions'
import '../../css/page1.css'

const Page1 = ({userId, API, clearFunc}) => {
  const [acceptMsg, setAcceptMsg] = useState('');

  const emptyTrans = {
    amount:'',
    description:'',
    category:'',
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

    // setAcceptMsg(`${trans.type} has successfully absorbed`);
    setAcceptMsg(<span className="page1_accept-msg">{trans.type} has successfully absorbed {<i className="far fa-thumbs-up"></i>}</span>);

      const timeOut = setTimeout(() => {
        setAcceptMsg('');
      }, 3000);
      clearFunc({var: timeOut, func: clearTimeout.bind(window)});
  }

  const newIncome = () => {
    const emptyIncome = {...emptyTrans};
    emptyIncome.type = "income";
    return emptyIncome;
  }
  const newExpense = () => {
    const emptyExpense = {...emptyTrans};
    emptyExpense.type = "expense";
    return emptyExpense;
  }

  return (
    <section className="page1 page">
      {
        (acceptMsg && 
        <p>{acceptMsg}</p>) 
        ||
        <div className="page1__trans-forms">
          <TransactionForm
            className=""
            trans = {newIncome()}
            title="New Income"
            func={postTrans}
            btnTxt={<i className="fas fa-plus"></i>}
          />
          <TransactionForm
            className=""
            trans = {newExpense()}
            title="New Expense"
            func={postTrans}
            btnTxt={<i className="fas fa-plus"></i>}
          />
        </div>
      }
      
    </section>
  );
}
export default Page1;