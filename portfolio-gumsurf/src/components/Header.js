import ImgLogo from '../assets/LOGO.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="portfolio-header">
            <div className='div-logo'>
                <Link className='lien-img' to='/Portfolio_GumSurf/'><img className="header-logo" src={ImgLogo} alt="Logo Kasa" /></Link>
            </div>
            <ul className="header-links">
                <li className='li-links'>
                    <Link className='lien-accueil' to='/Portfolio_GumSurf/'>Accueil</Link>
                </li>
                <li className='li-links'>
                    <Link className='lien-portfolio' to='/Portfolio'>Portfolio</Link>
                </li>
                <li className='li-links'>
                    <Link className='lien-about' to='/About'>A propos de moi</Link>
                </li>
                <li className='li-links'>
                    <Link className='lien-contact' to='/Contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;