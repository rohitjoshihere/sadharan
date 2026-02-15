import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ScrollObserver from './components/ScrollObserver';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  // Use ScrollObserver logic here inside Router context
  return (
    <>
      <ScrollToTop />
      <ScrollObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppContent />
      </div>
    </Router>
  );
}

export default App;
