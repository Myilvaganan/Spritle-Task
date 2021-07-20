import React, { useState } from 'react';
import List from './List';

const Input = () => {
  const [data, setData] = useState({
    amount: 0,
    date: '',
    category: '',
  });
  const [items, setItems] = useState('');

  let TotalData = [];

  const submitHandler = (e) => {
    e.preventDefault();
    TotalData.push(data);
    TotalData = TotalData.concat(
      JSON.parse(localStorage.getItem('item') || '[]')
    );
    localStorage.setItem('item', JSON.stringify(TotalData));
    if (localStorage.getItem('item') === null) {
      localStorage.setItem('item', JSON.stringify([]));
    } else {
      let list = JSON.parse(localStorage.getItem('item'));
      setItems(list);
    }
  };

  window.onload = function () {
    if (localStorage.getItem('item') === null) {
      localStorage.setItem('item', JSON.stringify([]));
    } else {
      let list = JSON.parse(localStorage.getItem('item'));
      setItems(list);
    }
  };
  return (
    <React.Fragment>
      <div className='main'>
        <form onSubmit={submitHandler}>
          <h1>Expense tracker - Basic</h1>
          <input
            id='text'
            type='number'
            name='amount'
            placeholder='Enter your amount!'
            onChange={(e) =>
              setData({ ...data, amount: e.target.value, date: new Date() })
            }
          />
          <div className='button'>
            <input
              id='add'
              type='submit'
              name='Add'
              value='ADD'
              onClick={(e) => {
                setData({ ...data, category: e.target.name });
              }}
            />

            <input
              id='remove'
              type='submit'
              name='Remove'
              value='REMOVE'
              onClick={(e) => {
                setData({ ...data, category: e.target.name });
              }}
            />
          </div>
        </form>
      </div>
      <List retrievedData={items} />
    </React.Fragment>
  );
};

export default Input;
