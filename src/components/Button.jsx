import React from "react";
import "./Button.css"; // Import button styles

// Button component for Add Expense button
function Button({ onClick, children }) {
  return (
    <button className="add-expense-btn" onClick={onClick}>
      {children} {/* Display the button's text or children */}
    </button>
  );
}

export default Button;
