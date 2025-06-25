import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainPage from './Main';
import MentionsLegales from '../legal/MentionsLegales';
import PolitiqueConfidentialite from '../legal/PolitiqueConfidentialite';
import '../css/style.css'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/mentions-legales" element={<MentionsLegales />} />
                <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;