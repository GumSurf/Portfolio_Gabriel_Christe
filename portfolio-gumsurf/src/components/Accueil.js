import React from 'react';
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
                        <p>En formation chez OpenClassrooms pour devenir développeur web fullstack (Bac+2). 
                            Passionné par la création d'expériences numériques captivantes et fonctionnelles.</p>
                    </div>
                    <div className='div-links'>
                        <div className='div-link'>
                        <a className='link' href='#Contact'>Contactez-moi</a>
                        </div>
                        <div className='div-link'>
                        <a className='link' href='#Portfolio'>Voir les projets</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home