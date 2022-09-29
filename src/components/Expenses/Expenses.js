import React, { useState } from "react";
import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expenses = (prop) => { // fetch a "expenses" data via props from "App" component, and the data type is array

  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // The reason why we create filteredExpenses variable in this compo is that we do not want to reduce the expenses data permanently in App compo. And also we already have the expense data from the App compo, which means it is just how they are rendered, so we just do transform how they should be output.
  const filteredExpenses = prop.items.filter((expense) => {
    // input the expenses data, which return true by condition, into filteredExpenses
    // FilteredExpenses is expenses of each year and it is array.
    return expense.date.getFullYear().toString() === filteredYear;
  });


  // ＜方法３＞条件分岐を実装したVariableを作成し、このVariableをJSX内で呼び出している。
//   let expenseContent = <p>NO expenses found</p>;
//   if(filteredExpenses.length > 0) {
//     expenseContent = filteredExpenses.map((expense) => (
//         <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.title}
//             date={expense.date}
//         />
//     ))
//   }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        
        <ExpensesList items={filteredExpenses}/>{/* App componentから取ってきたArrayのexpenses dataを、filterにかけた状態で、ListにするExpensesList componentに渡している。 */}

        {/* ＜方法３＞条件分岐を実装したVariableを、JSX内で呼び出している。 */}
        {/* {expenseContent} */}

        {/* ＜方法２＞&&演算子 */}
        {/* {filteredExpenses.length === 0 && <p>NO expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.title}
              date={expense.date}
            />
          ))} */}

        {/* ＜方法１＞三項演算子 */}
        {/* {filteredExpenses.length === 0 ? <p>NO expenses found</p> : filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.title}
            date={expense.date}
          />
        ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
