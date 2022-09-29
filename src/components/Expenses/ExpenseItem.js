import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React from "react";

// Getting expense data from ExpenseList Compo via props
const ExpenseItem = (props) => {
  console.log("rxpenseItem evaluated by React")

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date = {props.date} />
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
