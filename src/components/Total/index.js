import React from 'react';
import './Total.css'
import DisplayValue from '../DisplayValue';

const Total = (props) => {
  const displayTotal = parseFloat(props.total).toLocaleString('pt-br');
  return (
    <div className="total">
      Total: <DisplayValue value={props.total} display={displayTotal} />
    </div>
  )
}

export default Total;