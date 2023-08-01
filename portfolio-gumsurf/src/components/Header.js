import ImgLogo from '../assets/Logo-Gabriel-CHRISTE.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from "react";

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
            <div id="mySidenav" class="sidenav" ref={sidenavRef}>
                <Link id="closeNavBtn" to="#" class="close" onClick={handleCloseNav}>&times;</Link>
                <ul>
                    <li>
                        <Link to='/Portfolio_GumSurf/'>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/Portfolio'>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/About'>A propos de moi</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/Planetes'>Planetes</Link>
                    </li>
                </ul>
            </div>
            <Link to="#" id="openNavBtn" onClick={handleOpenNav}>
                <span class="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </Link>
        </div>
    );
}

export default Header;