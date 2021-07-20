import React from 'react';
import Total from './Total';

const List = ({ retrievedData }) => {
  const totalAmount = () => {
    if (retrievedData) {
      const Add = retrievedData
        .map((item) => (item.category === 'Add' ? item.amount : 0))
        .reduce((acc, cur) => +acc + +cur, 0);
      const Remove = retrievedData
        .map((item) => (item.category === 'Remove' ? item.amount : 0))
        .reduce((acc, cur) => +acc + +cur, 0);
      return Add - Remove;
    }
  };
  return (
    <div className='list-main'>
      <Total total={totalAmount()} />
      <ul className='list-ul'>
        {retrievedData &&
          retrievedData.map((item, index) => (
            <li key={index} className='list-li'>
              <p>{item.date}</p> - <p>₹ {item.amount}</p> -{' '}
              <p>{item.category}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
