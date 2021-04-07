/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import '../../css/page2.css'
import TransactionCard from '../TransactionCard'
import TransactionForm from '../TransactionForm'
import FormContainer from '../FormContainer'
import MobileTransactionCard  from '../MobileTransactionCard'
import { capitalizeFirstLetter } from '../../helperFunctions'


const Page2 = ({userId, API, transProps}) => {

  const [transactions, setTransactions] = useState([]);
  const [transToEdit, setTransToEdit] = useState(false);

  // is mobile?
  const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  const isMobile = deviceWidth <= 480;
  // const isMobile = true;

  useEffect(() => {
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
    const origin = temp[newTrans.type + 's'].find(trans => trans.id === newTrans.id);
    const indx = temp[newTrans.type + 's'].indexOf(origin);

    if (action === "edit"){
      temp[newTrans.type + 's'].splice(indx, 1, newTrans);
    } else if(action === "delete"){
      // delete from screen
      const tempTransactions = [...transactions];
      const transactionsIndx = tempTransactions.indexOf(newTrans);
      tempTransactions.splice(transactionsIndx, 1);
      setTransactions(tempTransactions);
       // delete from api
      temp[newTrans.type + 's'].splice(indx, 1);
    }
    
    await axios.put(`${API}/${userId}`, temp);
    setTransToEdit(null);
  }

  const desktopTransCards = () => {
    return (
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
              setTransToEdit(trans);
            }}
            deleteFunc={() => handelEditAndDelete(trans, 'delete')}
          />)}
        </tbody>
      </table>
    );
  }
  const mobileTransCards = () => {
    return (
      <div className="page2_mobile-cards">
      {transactions.map(trans => <MobileTransactionCard 
        key={trans.id}
        trans={trans}
        editFunc={(trans) => {
          setTransToEdit(trans);
        }}
        deleteFunc={() => handelEditAndDelete(trans, 'delete')}
      />)}
      </div>
    );
  }
  return (
    <div 
      className="page page2"
      style={{background: `url(./static/page2.jpg) no-repeat center center/cover`}}
    >
      <h1>Transactions History</h1>
      {isMobile? mobileTransCards() : desktopTransCards()}
      {transToEdit && 
        <FormContainer 
          className="page2_trans-form"
          trans={transToEdit}
          title={`Edit ${capitalizeFirstLetter(transToEdit.type)}`}
          btnTxt="confirm"
          func={(trans) => {handelEditAndDelete(trans, 'edit')}}
        />
      }
    </div>
  );
}

export default Page2;