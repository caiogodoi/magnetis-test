import React from 'react';
import './TransactionType.css';

const TransactionType = props => {
  const options = props.options.map(option => (
    <option key={option.value} value={option.value}>
      {option.name}
    </option>
  ));
  return (
    <select
      className="transaction-type"
      onChange={props.onChange}
      value={props.value}
    >
      {options}
    </select>
  );
};

export default TransactionType;
