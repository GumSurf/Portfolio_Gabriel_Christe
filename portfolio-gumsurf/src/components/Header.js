import ImgLogo from '../assets/Logo-Gabriel-CHRISTE.webp';
import Photo from '../assets/moi_sans_background.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from "react";

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

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Met à jour la largeur de la fenêtre lorsqu'elle est redimensionnée
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Ajoute un écouteur d'événement pour surveiller les changements de taille de fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoie l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header id="myHeader" className="portfolio-header">
            <nav className='nav-header'>
                <div className='div-logo'>
                    <Link className='lien-img' to='/Portfolio_GumSurf/'><img id='logo' className="header-logo" src={Photo} alt="Logo Portfolio" /></Link>
                </div>
                <div>
                    {windowWidth < 1024 ? (
                        <>
                            <div id="mySidenav" className="sidenav" ref={sidenavRef}>
                                <Link id="closeNavBtn" to="#" className="close" onClick={handleCloseNav}>&times;</Link>
                                <br></br>
                                <br></br>
                                <ul>
                                    <li>
                                        <a href='#Accueil'>
                                            <p>Accueil</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#Portfolio'>
                                            <p>Portfolio</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#About'>
                                            <p>A propos</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#Contact'>
                                            <p>Contact</p>
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
                        </>
                    ) : (
                        <ul className='ul-ecran-large'>
                            <li>
                                <a href='#Accueil'>
                                    <p>Accueil</p>
                                </a>
                            </li>
                            <li>
                                <a href='#Portfolio'>
                                    <p>Portfolio</p>
                                </a>
                            </li>
                            <li>
                                <a href='#About'>
                                    <p>Compétences</p>
                                </a>
                            </li>
                            <li>
                                <a href='#Contact'>
                                    <p>Contact</p>
                                </a>
                            </li>
                        </ul>

                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;