import React from "react";

// Component to display the list of expenses
function ExpenseList({ expenses }) {
  // Sort expenses by amount (descending order)
  const sortedExpenses = expenses.sort((a, b) => b.amount - a.amount);

  return (
    <div className="expense-list">
      <h2>Expense List</h2>
      {sortedExpenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          <p>{expense.category}: ${expense.amount}</p>
          <p>{expense.description}</p>
          {expense.amount > 100 && <p className="overspent">⚠️ Overspending!</p>}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
