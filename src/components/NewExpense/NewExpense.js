import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);


    const SaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);

        // After the submitting the new expense in ExpenseForm Compo, close the form section
        setIsEditing(false);
    }
    
    // In this Compo, After the button of "Add new expenses" is clicked, the form is displyed.
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    // we do not want to execute the function at the NewExpenseForm Compo, we set the function in this Compo.
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {/* Set the condition which decide whther the form is displyed or not. */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {/* pass the "stopEditingHandler" function to the ExpenseForm Compo via onCancel */}
            {isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onChancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense;