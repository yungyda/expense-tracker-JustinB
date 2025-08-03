import React, { useState, useMemo } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import TotalSpent from "./TotalSpent";
import CategoryChart from "./CategoryChart";

// Main dashboard page for managing expenses
function Home() {
  const [expenses, setExpenses] = useState([]);
  const [filterText, setFilterText] = useState("");

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  // Adds a new expense to the state
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  //Deletes an expense from the state
  const handleDeleteExpense = (expense) => {
    const confirmWithUser = confirm(
      "Are you sure you want to delete this expense?"
    );
    if (!confirmWithUser) return;

    const expenseId = expense.id;
    setExpenses((expenses) => {
      const filteredExpenses = expenses.filter((e) => e.id !== expenseId);
      return [...filteredExpenses];
    });
  };

  const filteredExpenses = useMemo(() => {
    const filterTextLC = filterText.toLowerCase();

    return expenses.filter((e) => {
      const descriptionLC = e.description.toLowerCase();
      return descriptionLC.indexOf(filterTextLC) > -1;
    });
  }, [expenses, filterText]);

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <TotalSpent expenses={expenses} />
      <CategoryChart expenses={expenses} />
      <ExpenseList
        expenses={filteredExpenses}
        filterText={filterText}
        onDeleteExpense={handleDeleteExpense}
        onFilterTextChange={handleFilterTextChange}
      />
    </div>
  );
}

export default Home;
