import React from 'react';
import DisplayValue from './DisplayValue';

const List = props => {
  const list = [...props.transactions].reverse();
  return (
    <div className="transaction-list">
      <table>
        <tbody>
          {list.map((item, index) => {
            const date = item.date;
            const value = `${parseFloat(item.value).toLocaleString('pt-br')}`;
            return (
              <tr key={index}>
                <td className="transaction-date">
                  {date}
                </td>
                <td>
                  <DisplayValue value={item.value} display={value} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
