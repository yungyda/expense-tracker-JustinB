import React from "react";

// Component to display the total amount spent
function TotalSpent({ expenses }) {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="total-spent">
      <h2>Total Spent: ${total}</h2>
    </div>
  );
}

export default TotalSpent;
