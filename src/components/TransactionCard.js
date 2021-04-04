import React, { useState, useEffect, useRef } from 'react';

const TransactionCard = ({trans, editFunc, deleteFunc}) => {
  // props: trans
  // title, id, amount, description, category, date, func

  const card = () => {
    trans.amount = trans.type === 'income' ? trans.amount : Math.abs(trans.amount) * (-1);
    const tds = Object.values(trans).splice(2).map(prop => {
      return <td>{prop}</td>
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