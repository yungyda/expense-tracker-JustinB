import React from "react";

// Placeholder chart component for now
function CategoryChart({ expenses }) {
  // Assuming categories and their total amounts are calculated
  const categories = ["Food", "Utilities", "Entertainment", "Transportation", "Other"];
  const categoryTotals = categories.map((category) => {
    const total = expenses
      .filter((expense) => expense.category === category)
      .reduce((acc, curr) => acc + curr.amount, 0);
    return { category, total };
  });

  return (
    <div className="category-chart">
      <h2 className="chart-title">Category Spending Breakdown</h2>
      <ul className="category-list">
        {categoryTotals.map((item) => (
          <li key={item.category} className="category-item">
            <span className="category-name">{item.category}:</span>
            <span className="category-amount">${item.total}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryChart;
