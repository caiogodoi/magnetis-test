import React from 'react';
import DisplayValue from '../DisplayValue';

const Total = (props) => {
  const displayTotal = parseFloat(props.total).toLocaleString('pt-br');
  return (
    <div className="main-total">
      Total: <DisplayValue value={props.total} display={displayTotal} />
    </div>
  )
}

export default Total;