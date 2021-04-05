import React, { useState, useEffect, useRef } from 'react';
import { getKeyByValue } from '../helperFunctions'
const TransactionCard = ({trans, editFunc, deleteFunc}) => {
  // props: trans
  // title, id, amount, description, category, date, func

  const card = () => {
    trans.amount = trans.type === 'income' ? trans.amount : Math.abs(trans.amount) * (-1);
    const tds = ['amount', 'description', 'category', 'date'].map(prop => {
      if (prop === 'date'){
        const date = trans[prop].toString().split('-').reverse().join('/');
        return <td key={trans[prop]}>{date}</td>
      }
      return <td key={trans[prop]}>{trans[prop]}</td>
    })
    return tds;
  }                          
  
  return(
    <tr>
      {card()}
      <td>
        <button
          onClick={() => editFunc(trans)}
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