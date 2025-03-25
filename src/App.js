import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import './App.css';
import Header from './common/header.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    AOS.refresh();  // Refresh AOS on every route change
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
