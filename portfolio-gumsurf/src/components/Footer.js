import LOGO from '../assets/Logo-Gabriel-CHRISTE.webp'
import Github from '../assets/github-ico.png'
import Linkedin from '../assets/linkedin-ico.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='footer'>
            <div className='container-footer'>
                <div className='portfolio-footer'>
                    <div className='text-footer'>
                        <h2 className='titre-footer'>Gabriel Christe</h2>
                        <p>Développeur web fullstack, alliant frontend et backend pour concevoir des applications web complètes et optimisées, contribuant ainsi à la réussite du produit.</p>
                    </div>
                    <div className="div-logo">
                        <h2>
                            <span className='titre-social'>Social</span>
                        </h2>
                        <div className="div-link-social">
                            <Link className="lien-img" to='https://gumsurf.github.io/Portfolio_GumSurf/'>
                                <img className="header-logo" src={Linkedin} alt="Gabriel Christe Linkedin Profile" />
                            </Link>
                            <Link className="lien-img" to='https://gumsurf.github.io/Portfolio_GumSurf/'>
                                <img className="header-logo" src={Github} alt="Gabriel Christe Github Profile" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='div-copyright'>
                    <p className='copyright'>© Copyright 2025. Créé par Gabriel Christe</p>
                    <Link className='copyright' to="/mentions-legales">Mentions Légales</Link>
                    <Link className='copyright' to="/politique-confidentialite">Politique de Confidentialité</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer