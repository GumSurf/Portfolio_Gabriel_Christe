import React from 'react';
import { Link } from 'react-router-dom';
import rosePlanete from '../assets/rose_planete.webp';
import Typewriter from './TypeWriter';

function Home() {
    const messages = [
        "Développeur front end",
        "Développeur back end",
        "Designer",
        // Ajoutez d'autres rôles ici
      ];

    return (
        <div id="Accueil" className='home'>
            <div className='background'>
                <img className='rose_planete move-top-bottom' src={rosePlanete} alt="planete rose" />
            </div>
            <div className='conteneur'>
                <div>
                    <p className='bienvenue'>Gabriel Christe</p>
                    <Typewriter messages={messages} />
                    <div className='div-p'>
                        <p>Besoin d'un site vitrine ou e-commerce ? Donnez vie à votre projet web avec mes
                            compétences en développement réactif HTML, CSS, et JavaScript.</p>
                    </div>
                    <div className='div-links'>
                        <div className='div-link'>
                            <Link className='link' to="/Contact">Contactez-moi</Link>
                        </div>
                        <div className='div-link'>
                            <Link className='link' to="/Portfolio">Voir les projets</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home