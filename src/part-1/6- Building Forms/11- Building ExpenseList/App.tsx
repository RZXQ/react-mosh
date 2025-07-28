import ExpenseList from "./11- Building ExpenseList";
import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 20, category: "Utilities" },
  ]);

  const handleOnDelete = (id: number) => {
    // 1. using the setState
    setExpenses(expenses.filter((expense) => expense.id !== id));

    // 2. using immer
    // setExpenses(
    //   produce((draft) => {
    //     draft.splice(
    //       expenses.findIndex((expense) => expense.id === id),
    //       1,
    //     );
    //   }),
    // );
  };

  return <ExpenseList expenses={expenses} onDelete={handleOnDelete} />;
}

export default App;
