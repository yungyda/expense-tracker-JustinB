import React from "react";

// Component to display the list of expenses
function ExpenseList({ expenses }) {
  // Sort expenses by amount (descending order)
  const sortedExpenses = expenses.sort((a, b) => b.amount - a.amount);

  return (
 
   
         <table className="expense-table"> 
        <tr>
          <th>
            Category
          </th>
          <th>
            Description
          </th>
          <th>
            Amount
          </th>
        </tr>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id} >
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}{expense.amount >100 && <span className="overspent">⚠️ Overspending!</span>}</td>
          </tr>
        ))}
       
      </table>
     
  );
}

export default ExpenseList;
