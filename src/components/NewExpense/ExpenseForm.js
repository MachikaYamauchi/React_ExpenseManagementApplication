import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle:event.target.value}
    // })
  };

  const amountChangehandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount:event.target.value}
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate:event.target.value}
    // })
  };

  const submitHandler = (event) => {
    // prevent request sending by de expensedata = {fault and reloading the screen
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    // Execute the function from NewExpense Compo -> sending the new expense object to the NewExpense Compo
    props.onSaveExpenseData(expenseData);

    // To clear the input fields after submit by using two way binding
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} // Two way binding
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} // Two way binding
            onChange={amountChangehandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} // Two way binding
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        {/* set "type=button" to set just the button, not submit */}
        {/* use the onChancel function from the NewExpense Compo */}
        <button type="button" onClick={props.onChancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
