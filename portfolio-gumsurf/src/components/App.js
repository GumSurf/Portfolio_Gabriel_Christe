import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import MainPage from './Main';
import '../css/style.css'

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/Portfolio_Gabriel_Christe/" element={<MainPage />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;