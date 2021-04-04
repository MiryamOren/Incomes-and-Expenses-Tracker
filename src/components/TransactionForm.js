import React, { useState, useEffect, useRef } from 'react';

const TransactionForm = ({trans, title, func, btnTxt}) => {
  const [transaction, setTransaction] = useState(trans);
  const transactionProps = [['amount', 'number'],
                            ['description', 'text'],
                            ['category', 'text'],
                            ['date', 'date']];
  console.log('transaction: ');
  console.log(transaction);
  const inputs = () => {
    const trs = transactionProps.map(transProp => {
      return (
        <tr>
          <td>{transProp[0]}</td>
          <td>
            <input
              type={transProp[1]} 
              value={transaction[transProp[0]]}
              onChange={(e) => {
                const temp = transaction;
                temp[transProp[0]] = e.target.value;
                setTransaction({...temp});
              }}
            />
          </td>
        </tr>
      );
    })
    return trs;
  }
  return(
    <div>
      <h2>{title}</h2>
      <table>
        {inputs()}
      </table>
      <button
      onClick={() => func(transaction)}
      >{btnTxt}</button>
    </div>
  );
};
export default TransactionForm;