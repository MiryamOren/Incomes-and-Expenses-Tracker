import React, { useState, useEffect, useRef } from 'react';
import '../css/transForm.css'
const TransactionForm = ({trans, title, func, btnTxt}) => {
  const [transaction, setTransaction] = useState({...trans});
  const [invalidInput, setInvalidInput] = useState(null)
  const transactionProps = [['amount', 'number'],
                            ['description', 'text'],
                            ['category', 'text'],
                            ['date', 'date']];
  console.log('transaction form got: ');
  console.log(trans);
  console.log('in form. current transactin is:');
  console.log(transaction);
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
    <div className="trans-form">
      <h2>{title}</h2>
      <table>
        <tbody>
          {inputs()}
        </tbody>
      </table>
      {invalidInput && <p>*invalid input : {invalidInput}</p>}
      <button
      onClick={() => {
        // validation check
        if (transaction.amount <= 0){
          setInvalidInput(`${transaction.type} amount should be a positive number`);
        } else if (transaction.description.length < 2){
          setInvalidInput(`${transaction.type} description should include at least two characters`);
        } else {
          if (!transaction.hasOwnProperty('id')){
            transaction.id = new Date().toString()
          }
          setInvalidInput(null);
          func(transaction);
        }
        console.log('in form, submit. trans is:');
        
        console.log(transaction);
        
      }}
      >{btnTxt}</button>
    </div>
  );
};
export default TransactionForm;