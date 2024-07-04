import React from 'react';
import Photo from '../assets/moi_sans_background.png';
import Typewriter from './TypeWriter';

function Home() {
    const messages = [
        "Développeur Front End",
        "Développeur Back End",
        "Développeur Full Stack",
        // Ajoutez d'autres rôles ici
      ];

    return (
        <div id="Accueil" className='home'>
            <div className='background'>
                <img className='rose_planete' src={Photo} alt="planete rose" />
            </div>
            <div className='conteneur'>
                <div>
                    <p className='bienvenue'>Bonjour,</p>
                    <p className='bienvenue'>Je suis Gabriel Christe</p>
                    <div id='title'>
                        <Typewriter messages={messages} />
                    </div>
                    <div className='div-p'>
                        <p>Développeur web freelance spécialisé en React et Node.js. Je crée des applications web dynamiques et performantes,
                            adaptées à vos besoins spécifiques. Je vous accompagne dans la réalisation de
                            vos projets digitaux en offrant des solutions modernes et efficaces.</p>
                    </div>
                    <div className='div-links'>
                        <div className='div-link'>
                            <a className='link' href="#Contact">Contactez-moi</a>
                        </div>
                        <div className='div-link'>
                            <a className='link' href="#Portfolio">Voir les projets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home