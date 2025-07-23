import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalSpent from "./TotalSpent";
import CategoryChart from "./CategoryChart";

// Main dashboard page for managing expenses
function Home() {
  const [expenses, setExpenses] = useState([]);

  // Adds a new expense to the state
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div className="home-container">
      <ExpenseForm onAddExpense={handleAddExpense} />
      <TotalSpent expenses={expenses} />
      <CategoryChart expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Home;
