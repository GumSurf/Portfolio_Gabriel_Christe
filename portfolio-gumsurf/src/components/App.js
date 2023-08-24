import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainPage from './Main';
import NotFound from './NotFound';
import '../css/style.css'

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/Portfolio_Gabriel_Christe/" element={<MainPage />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;