import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
                <div className='conteneur'>
                    <div>
                        <p className='bienvenue'>Gabriel Christe</p>
                        <h1>Développeur Fullstack</h1>
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