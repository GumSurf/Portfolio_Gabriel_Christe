import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Planetes from './Planetes';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import '../css/style.css'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/Planetes" element={<Planetes />} />
        <Route path="/Portfolio_GumSurf/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;