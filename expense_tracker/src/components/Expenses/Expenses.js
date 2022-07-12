import { useState } from "react";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import ExpensesChart from "../Expenses/ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  //change the year to what's been selected
  const filterChangeListner = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  //create an array of items to render that matches the year that's been selected.
  const filteredExpenses = props.items.filter((expense) => {
    //out of the items we have extract date from it and only get the year by using getFullYear() and convert it to string to compare with
    //the year that's been selected.
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //It's better to implement a logic in the component function other than the return.
  //Have a lean jsx snippet in return.

  return (
  <li style={{listStyleType:"none"}}>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeListner}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
      </li>
  );
};

export default Expenses;
