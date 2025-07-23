// Import necessary elements
import React from "react";
import { Link } from "react-router-dom"; // Link for navigation

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">🪙 PennyWise</Link> {/* App name with penny emoji */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link to About page */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
