import LOGO from '../assets/Logo-Gabriel-CHRISTE.webp'
import Github from '../assets/Github.webp'
import Linkedin from '../assets/Linkedin.webp'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='portfolio-footer'>
            <p>"Tel un site web dynamique en constante évolution, nous explorons de nouveaux horizons et repoussons sans cesse nos limites."</p>
            <p>Créer par Moi ©2024</p>
            <div className='div-logo'>
                <Link className='lien-img' to='https://gumsurf.github.io/Portfolio_GumSurf/'><img className="header-logo" src={LOGO} alt="Logo" /></Link>
            </div>
        </div>
    )
}

export default Footer