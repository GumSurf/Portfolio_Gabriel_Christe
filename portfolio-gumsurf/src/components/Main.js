import React from 'react';
import Accueil from './Accueil';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact'
const MainPage = () => {
  return (
    <div>
      <Accueil />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default MainPage;