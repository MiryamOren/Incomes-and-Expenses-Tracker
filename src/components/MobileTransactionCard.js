import React, { useState, useEffect, useRef } from 'react';
import { getKeyByValue } from '../helperFunctions'
import '../css/mobileTransCard.css'
const MobileTransactionCard = ({trans, editFunc, deleteFunc}) => {
  // props: trans
  // title, id, amount, description, category, date, func

  const card = () => {
    trans.amount = trans.type === 'income' ? trans.amount : Math.abs(trans.amount) * (-1);
    const divs = ['date', 'amount', 'description', 'category'].map(prop => {
      if (prop === 'date'){
        const date = trans[prop].toString().split('-').reverse().join('/');
        return <div key={prop}>{`date: ${date}`}</div>
      }
      return <div key={prop}>{`${prop}: ${trans[prop]}`}</div>
    })
    return divs;
  }                          
  
  return(
    <div className="mobile-card">
      {card()}
      <button
        onClick={() => {
          trans.amount = Math.abs(trans.amount);
          editFunc(trans)
        }}
      >edit</button>
      <button
        onClick={deleteFunc}
      >delete</button>
    </div>
  );
};

export default MobileTransactionCard ;