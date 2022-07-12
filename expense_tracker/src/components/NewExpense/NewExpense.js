import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //Execute the function created in ExpenseForm Passed to App js
    props.onAddExpense(expenseData);
    //After submitting the expenseData the window closes.
    setIsEditing(false);
  };
  //button to open the ExpenseForm
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  //button to close the ExpenseForm
  const stopEditingHanlder = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Button</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHanlder}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
