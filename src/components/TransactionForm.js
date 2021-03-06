/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import '../css/transForm.css'
const TransactionForm = ({trans, title, func, btnTxt, className}) => {
  const [transaction, setTransaction] = useState({...trans});
  const [invalidInput, setInvalidInput] = useState(null)
  const transactionProps = [['amount', 'number'],
                            ['description', 'text'],
                            ['category', 'text'],
                            ['date', 'date']];
  const inputs = () => {
    const trs = transactionProps.map((transProp, indx) => {
      return (
        <React.Fragment key={indx}>
          <label>{transProp[0]}</label>
          <input
              type={transProp[1]} 
              value={transaction[transProp[0]]}
              onChange={(e) => {
                const temp = {...transaction};
                temp[transProp[0]] = e.target.value;
                setTransaction({...temp});
              }}
            />
        </React.Fragment>
      );
    })
    return trs;
  }
  return(
    <div className={`trans-form ${className}`}>
      <h2>{title}</h2>
      <div className="trans-form_inputs">
          {inputs()}
        </div>
      {invalidInput && <p className="invalid-input-msg">*invalid input : {invalidInput}</p>}
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
      }}
      >{btnTxt}</button>
    </div>
  );
};
export default TransactionForm;