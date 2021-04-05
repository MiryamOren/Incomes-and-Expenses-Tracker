import React, { useState, useEffect, useRef } from 'react';

const TransactionForm = ({trans, title, func, btnTxt}) => {
  const [transaction, setTransaction] = useState(trans);
  const transactionProps = [['amount', 'number'],
                            ['description', 'text'],
                            ['category', 'text'],
                            ['date', 'date']];
  console.log('transaction form got: ');
  console.log(trans);
  const inputs = () => {
    const trs = transactionProps.map(transProp => {
      return (
        <tr key={transProp[0]}>
          <td>{transProp[0]}</td>
          <td>
            <input
              type={transProp[1]} 
              value={transProp[0] === 'amount'? Math.abs(transaction[transProp[0]]) : transaction[transProp[0]]}
              onChange={(e) => {
                const temp = transaction;
                temp[transProp[0]] = transProp[0] === 'amount'? Math.abs(e.target.value): e.target.value;
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
        <tbody>
          {inputs()}
        </tbody>
      </table>
      <button
      onClick={() => func(transaction)}
      >{btnTxt}</button>
    </div>
  );
};
export default TransactionForm;