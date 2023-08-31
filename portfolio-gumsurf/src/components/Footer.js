import LOGO from '../assets/Logo-Gabriel-CHRISTE.webp'
import Github from '../assets/Github.webp'
import Linkedin from '../assets/Linkedin.webp'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='portfolio-footer'>
            <div className='div-logo'>
                <Link className='lien-img' to='https://gumsurf.github.io/Portfolio_GumSurf/'><img className="header-logo" src={LOGO} alt="Logo" /></Link>
            </div>
            <ul className='footer-links'>
                <li className='li-links github'>
                    <Link to='https://github.com/GumSurf'><img src={Github} alt="Logo Github"/></Link>
                </li>
                <li className='li-links linkedin'>
                    <Link to='https://www.linkedin.com/in/gabriel-christe-000/'><img src={Linkedin} alt="Logo Linkedin"/></Link>
                </li>
            </ul>
            <ul className='footer-contact'>
                <li>
                    <p>Christe Gabriel</p>
                </li>
                <li>
                    <p>(+33)6 38 87 05 62</p>
                </li>
                <li>
                    <p>gabriel.christe@gmail.com</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer