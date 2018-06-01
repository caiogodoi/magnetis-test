import React from 'react';
import './TransactionField.css';

const TransactionField = props => {
  return (
    <input
      className="transaction-field"
      type="number"
      step="0.01"
      autoFocus
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default TransactionField;
