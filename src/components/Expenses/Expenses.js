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

  const filteredExpenses = prop.items.filter((expense) => {
    // 以下のreturn文はtrueを返し、trueを返したexpenseを、filteredExpensesに格納している
    // 各年のexpesesをfilteredExpensesの中に格納している。filteredExpensesは、arrayの形でデータを格納。
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

        {/* {filteredExpenses.map((expense) => (
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
