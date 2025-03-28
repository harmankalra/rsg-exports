import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Header from './common/header.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Product from './pages/product.jsx';
import Privatelabel from './pages/private.jsx';
import Gallery from './pages/gallery.jsx'

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 300); // match with CSS duration
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <>
      <Header />
      <div className={`page-transition ${transitionStage}`}>
        <Routes location={displayLocation} key={displayLocation.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/private" element={<Privatelabel />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
