import React, { useState } from "react"; // Import React and useState hook for managing state
import Button from "./Button"; // Import reusable Button component (if needed in your app)

// Define the list of categories that can be selected for an expense
const categories = [
  "Food",
  "Utilities",
  "Entertainment",
  "Transportation",
  "Other",
];

function ExpenseForm({ onAddExpense }) {
  // State to manage form data (amount, category, description)
  const [formData, setFormData] = useState({
    amount: "", // Amount of the expense
    category: "", // Category of the expense (e.g., Food, Utilities)
    description: "", // Description of the expense
  });

  // Handle changes in form inputs by updating the state with the new value
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const newExpense = {
      ...formData, // Spread the current form data
      id: Date.now(), // Assign a unique ID based on the current time (used as a key for each expense)
      amount: parseFloat(formData.amount), // Convert the amount to a number
    };
    onAddExpense(newExpense); // Call the onAddExpense function (passed down from the parent) to add the new expense
    setFormData({ amount: "", category: "", description: "" }); // Reset the form after submitting
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      {/* Input for entering the amount of the expense */}
      <input
        min="0"
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount} // Bind the amount input to the formData state
        onChange={handleChange} // Handle input changes
        required
      />

      {/* Dropdown select for choosing the category of the expense */}
      <select
        name="category"
        value={formData.category} // Bind the category select to the formData state
        onChange={handleChange} // Handle category change
        required
      >
        <option value="">Select Category</option> {/* Default option */}
        {/* Loop through the categories and create an option for each */}
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Input for entering a description of the expense */}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description} // Bind the description input to the formData state
        onChange={handleChange} // Handle description input change
        required
      />

      {/* Submit button to add the expense */}
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
