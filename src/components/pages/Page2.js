/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import TransactionCard from '../TransactionCard'
import TransactionForm from '../TransactionForm'

const Page2 = ({userId, API, transProps}) => {

  const [transactions, setTransactions] = useState([]);
  const [headings, setHeadings] = useState([]);
  const [transToEdit, setTransToEdit] = useState(false);

  useEffect(() => {
    setHeadings([...transProps.splice(2,4)]);
    async function getTransactions(){
      try{
        const response = await axios.get(`${API}/${userId}`);
        const user = response.data;
        setTransactions(user.incomes.concat(user.expenses));
      } catch(err){
        console.log(err);
      }
    }
    getTransactions();
  }, []);

  const handelEditSubmit = (trans) => {
    setTransToEdit(trans);
  }
  const handelDelete = () => {}

  return (
    <div>
    <p>Page 2 - History</p>
    <table>
      <tr>
        {headings.map(prop => <th>{prop}</th>)}
        <th></th>
        <th></th>
      </tr>
        {transactions.map(trans => <TransactionCard 
          trans={trans}
          editFunc={() => setTransToEdit(trans)}
          deleteFunc={handelDelete}
          />)}
    </table>
      {transToEdit && 
      <TransactionForm 
        trans={transToEdit}
        title="edit"
        btnTxt="confirm"
        func={(trans) => {handelEditSubmit(trans)}}
      />}
    </div>
  );
}

export default Page2;