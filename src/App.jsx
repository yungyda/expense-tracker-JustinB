import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About"; // Correct import from the components folder
import Header from "./components/Header"; // Header component for navigation
import Footer from "./components/Footer"; // Footer component with links
import Home from "./components/Home"; // Home page component
import "./app.css"; // External stylesheet for styling

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* About page route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
