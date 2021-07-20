import React from 'react';

const Total = (props) => {
  return (
    <div className='total'>
      <h2>Balance:</h2>
      <p>₹ {props.total ? props.total : 0.00}</p>
    </div>
  );
};

export default Total;
