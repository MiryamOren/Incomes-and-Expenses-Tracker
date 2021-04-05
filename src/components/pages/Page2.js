/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import TransactionCard from '../TransactionCard'
import TransactionForm from '../TransactionForm'
import { capitalizeFirstLetter } from '../../helperFunctions'

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
        const transactins = user.incomes.concat(user.expenses);
        const sortedTarnsactions = transactins.sort((tr1, tr2) => {
          if (tr1.date < tr2.date){
            return 1;
          } else if (tr1.date > tr2.date) {
            return -1;
          }
          return 0;
        })
        setTransactions(sortedTarnsactions);
      } catch(err){
        console.log(err);
      }
    }
    getTransactions();
  }, [transToEdit]);

  const handelEditAndDelete = async (newTrans, action) => {
    const getRes = await axios.get(`${API}/${userId}`);

    const temp = getRes.data;
    const origin = temp[newTrans.type + 's'].find(tr => tr.id === newTrans.id);
    const indx = temp[newTrans.type + 's'].indexOf(origin);

    if (action === "edit"){
      temp[newTrans.type + 's'].splice(indx, 1, newTrans);
    } else if(action === "delete"){
      temp[newTrans.type + 's'].splice(indx, 1);
    }
    
    await axios.put(`${API}/${userId}`, temp);
    setTransToEdit(null);
  }


  return (
    <div>
    <p>Page 2 - History</p>
    <table>
      <thead>
      <tr>
      {['amount', 'description', 'category', 'date'].map(prop => <th key={prop}>{prop}</th>)}
      <th></th>
      <th></th>
    </tr>
      </thead>
      <tbody>
        {transactions.map(trans => <TransactionCard 
          key={trans.id}
          trans={trans}
          editFunc={(trans) => {
            console.log('trans from page2');
            console.log(trans);
            setTransToEdit(trans);
          }}
          deleteFunc={() => handelEditAndDelete(trans, 'delete')}
        />)}
      </tbody>
    </table>
      {transToEdit && 
      <TransactionForm 
        trans={transToEdit}
        title={`Edit ${capitalizeFirstLetter(transToEdit.type)}`}
        btnTxt="confirm"
        func={(trans) => {handelEditAndDelete(trans, 'edit')}}
      />}
    </div>
  );
}

export default Page2;