import React, { useState, useEffect, useRef } from 'react';
import TransactionForm from './TransactionForm'

const FormContainer = ({className, trans, title, btnTxt, func}) => {
  return (
    <div className="form-container">
      <TransactionForm 
        className={className}
        trans={trans}
        title={title}
        btnTxt={btnTxt}
        func={func}
      />
    </div>
  );
};

export default FormContainer;