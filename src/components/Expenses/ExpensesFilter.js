import React from 'react';

import './ExpensesFilter.css';

// Gtting the filtered year from Expense Compo
const ExpensesFilter = (props) => {
  
  // Passing the year to the Expense Compo to useState
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={dropdownChangeHandler} value={props.selected}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;