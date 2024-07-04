import ImgLogo from '../assets/Logo-Gabriel-CHRISTE.webp';
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

    // Fonction pour changer la couleur du fond de l'en-tête lors du défilement
    /*function changeSize() {
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
    }, []);*/

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
        <div id="myHeader" className="portfolio-header">
            <div className='div-logo'>
                <Link className='lien-img' to='/Portfolio_GumSurf/'><img id='logo' className="header-logo" src={ImgLogo} alt="Logo Kasa" /></Link>
            </div>
            <div>
                {windowWidth < 1024 ? (
                    <>
                        <div id="mySidenav" className="sidenav" ref={sidenavRef}>
                            <Link id="closeNavBtn" to="#" className="close" onClick={handleCloseNav}>&times;</Link>
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
        </div>
    );
}

export default Header;