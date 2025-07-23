import React from "react"; // Import React library

// Renders a single expense item with title, amount, category, and description
function ExpenseItem({ title, amount, category, description }) {
  return (
    <div className="expense-item"> {/* Wrapper for each expense item */}
      <h3>{title}</h3> {/* Display the title of the expense */}
      <p>💰 ${amount}</p> {/* Display the amount of the expense with a dollar sign */}
      <p>📂 {category}</p> {/* Display the category of the expense */}
      
      {/* Only show description if it exists */}
      {description && <p>📝 {description}</p>} {/* Conditionally render the description if provided */}
    </div>
  );
}

export default ExpenseItem; // Export the component to be used in other parts of the application
