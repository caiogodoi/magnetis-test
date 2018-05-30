import React from 'react';
import './DisplayValue.css'

const DisplayValue = props => {
  let valueClass;
  if (props.value >= 0) {
    valueClass = 'display-value--positive';
  } else {
    valueClass = 'display-value--negative';
  }
  return (
    <span className={valueClass}>{props.display}</span>
  )
}

export default DisplayValue;