import React, { useState, useEffect, useRef } from 'react';
import { getKeyByValue } from '../helperFunctions'
import '../css/transCard.css'
const TransactionCard = ({trans, editFunc, deleteFunc}) => {
  // props: trans
  // title, id, amount, description, category, date, func

  const card = () => {
    trans.amount = trans.type === 'income' ? trans.amount : Math.abs(trans.amount) * (-1);
    const tds = ['amount', 'description', 'category', 'date'].map(prop => {
      if (prop === 'date'){
        const date = trans[prop].toString().split('-').reverse().join('/');
        return <td key={prop}>{date}</td>
      }
      return <td key={prop}>{trans[prop]}</td>
    })
    return tds;
  }                          
  
  return(
    <tr className="trans-card__tr">
      {card()}
      <td>
        <button
          onClick={() => {
            trans.amount = Math.abs(trans.amount);
            editFunc(trans)
          }}
        >edit</button>
      </td>
      <td>
      <button
        onClick={deleteFunc}
      >delete</button>
      </td>
    </tr>
  );
};

export default TransactionCard;