import React from 'react'

const TransactionForm = ({title, id, amount, description, category, date}) => {
  const [transaction, setTransaction]
  return(
    <form>
      <h2>{title}</h2>
      <table>
        <tr>
        <td>amount</td>
        <td>
          <input 
            value={amount}
            onChange={}
          />
        </td>
        </tr>
      </table>
    </form>
  );
};

export default TransactionForm;