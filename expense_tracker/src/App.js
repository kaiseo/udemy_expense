import {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"
import {DUMMY_EXPENSES} from "./components/Data/dummyData";

function App() {
  //initialize the expense list with imported default data and to make it dynamic use useState
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler=expense=>{
    //spread exisiting array or expenses and add a new expense
    setExpenses((prevExpense)=>{
      return [expense, ...prevExpense]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
