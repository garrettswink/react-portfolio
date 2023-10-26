// Import files
import Styles from "./App.css"

// Import packages
import { Route, Routes } from "react-router-dom"

// Import Components
import Navbar from "./components/Navbar";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About"; 
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  
  return (
  
  <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
