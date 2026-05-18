import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services"; 
import ScrollToTop from "./components/ScrollToTop";
import Recipe from "./components/Recipe";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/recipe/:id" element={<Recipe />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
