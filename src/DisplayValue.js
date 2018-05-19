import React from 'react';

const DisplayValue = props => {
  let valueClass;
  if (props.value >= 0) {
    valueClass = 'positive';
  } else {
    valueClass = 'negative';
  }
  return (
    <span className={valueClass}>{props.display}</span>
  )
}

export default DisplayValue;