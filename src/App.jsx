import { useState } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import NavBar from "./layout/NavBar";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services"; 

  

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
