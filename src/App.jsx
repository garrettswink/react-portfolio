// Import files
import Styles from "./App.css"

// Import packages
import { Route, Routes } from "react-router-dom"

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About"; 
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  
  return (
  
  <>
      {/* Components */}
      <Navbar />
      <Footer />
      {/* Routes */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
