import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import About from './About';
import NotFound from './NotFound';
import '../css/style.css'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;