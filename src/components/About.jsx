import React from "react";
import PennyImage from "../assets/Penny-PNG-Image.png"; // Import penny image for About page

function About() {
  return (
    <section className="about-section">
      <h2 className="about-title">About PennyWise</h2>
      <p className="about-text">
        PennyWise is your personal finance tracker. Keep track of your expenses
        and stay on top of your budget!
      </p>
      {/* Image with alt text for accessibility */}
      <img src={PennyImage} alt="Penny Icon" className="penny-image" />
    </section>
  );
}

export default About;
