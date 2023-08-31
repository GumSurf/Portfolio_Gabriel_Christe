import ImgLogo from '../assets/Logo-Gabriel-CHRISTE.webp';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from "react";
import Planete1 from '../assets/rose_planete.webp';
import Planete2 from '../assets/bleu_planete.webp';
import Planete3 from '../assets/violette_planete.webp';
import Satellite from '../assets/satellite.webp';

function Header() {
    const sidenavRef = useRef(null);

    const handleOpenNav = () => {
        if (sidenavRef.current) {
            sidenavRef.current.classList.add("active");
        }
    };

    const handleCloseNav = () => {
        if (sidenavRef.current) {
            sidenavRef.current.classList.remove("active");
        }
    };

    // Fonction pour changer la couleur du fond de l'en-tête lors du défilement
    function changeSize() {
        const logo = document.getElementById("logo");
        const header = document.getElementById("myHeader");
        const scrollPosition = window.scrollY;
        const scrollThreshold = 200;

        if (scrollPosition > scrollThreshold) {
            header.style.backgroundColor = "#201057";
            logo.style.width = "100px";
        } else {
            header.style.backgroundColor = "transparent";
            logo.style.width = "150px";
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeSize);

        return () => {
            window.removeEventListener("scroll", changeSize);
        };
    }, []);

    return (
        <div id="myHeader" className="portfolio-header">
            <div className='div-logo'>
                <Link className='lien-img' to='/Portfolio_GumSurf/'><img id='logo' className="header-logo" src={ImgLogo} alt="Logo Kasa" /></Link>
            </div>
            <div id="mySidenav" className="sidenav" ref={sidenavRef}>
                <Link id="closeNavBtn" to="#" className="close" onClick={handleCloseNav}>&times;</Link>
                <ul>
                    <li>
                        <a href='#Accueil'>
                            <p>Accueil</p>
                            <img className='planete' src={Planete1} alt="planete" />
                        </a>
                    </li>
                    <li>
                        <a href='#Portfolio'>
                            <p>Portfolio</p>
                            <img className='planete' src={Planete2} alt="planete" />
                        </a>
                    </li>
                    <li>
                        <a href='#About'>
                            <p>A propos de moi</p>
                            <img className='planete' src={Planete3} alt="planete" />
                        </a>
                    </li>
                    <li>
                        <a href='#Contact'>
                            <p>Contact</p>
                            <img className='satellite' src={Satellite} alt="satellite" />
                        </a>
                    </li>
                </ul>
            </div>
            <Link to="#" id="openNavBtn" className='shack' onClick={handleOpenNav}>
                <span className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </Link>
        </div>
    );
}

export default Header;