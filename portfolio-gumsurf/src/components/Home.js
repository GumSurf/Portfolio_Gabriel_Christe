import React from 'react';
import { Link } from 'react-router-dom';
import DevImg from '../assets/DevImg.png';

function Home() {
    return (
        <div className='home'>
            <div id="fond">
                <div class="band"></div>
                <div class="band"></div>
                <div class="band"></div>

                <div className='conteneur'>
                    <div>
                        <p className='bienvenue'>Bienvenue !</p>
                        <h1>Je Suis Développeur Web Front End</h1>
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
                    <div className='rond'>
                        <div className='div-img'>
                            <img src={DevImg} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home