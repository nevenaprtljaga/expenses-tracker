import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: "222",
      date: new Date(2023, 1, 1),
    },
    {
      id: "e2",
      title: "tv",
      amount: "5000",
      date: new Date(2022, 2, 12),
    },
  ];

  const addExpenseHandler = expense => {
     
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses  items={expenses}></Expenses>
    </div>

  );
}
 
export default App;
