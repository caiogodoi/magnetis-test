import React from 'react';
import TransactionField from '../Inputs/TransactionField'
import TransactionType from '../Inputs/TransactionType'
import './Form.css';

const Form = (props) => {
  const options = [
    { value: 'credit', name: 'Credit' },
    { value: 'debit', name: 'Debit' },
  ];

  return (
    <form className="form" onSubmit={props.onSubmit}>
      <TransactionField
        value={props.transaction}
        onChange={props.onChange}
        placeholder="Add Transaction..."
      />
      <TransactionType
        onChange={props.onChangeSelect}
        value={props.type}
        options={options}
      />
      <button className="form__submit">Submit</button>
    </form>
  )
}

export default Form;