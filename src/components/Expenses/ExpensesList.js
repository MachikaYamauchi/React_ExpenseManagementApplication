import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

// From Expenses Compo, get the filtered expenses data via props
const ExpensesList = (props) => {
  // If the expense item is 0, show the message "Found no expenses"
  if(props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
        {/* App_Compo -> Expenses_Compoに渡ってきたexpenses Array を Transform array of the ovjects into the array of JSX elements, like [<ExpennseItem />, <ExpenseItem />]*/}
        {/* "expense" is used to extract title, amount, date from the each object of the expenses Array" */}
        {props.items.map((expense) => (
            <ExpenseItem
                // The reason why we set the KEY is to help React identify which element should be rendered because of efficiency and debugging. so that we set the KEY where we output our lists of items.
                key={expense.id} // Always set the KEY when mapping the elements
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))}
    </ul>
  )
  
};

export default ExpensesList;
