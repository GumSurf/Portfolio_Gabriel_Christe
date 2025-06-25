import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap-trial/ScrollTrigger';
import Photo from '../assets/moi_sans_background.png';
import Typewriter from './TypeWriter';
import MouseScroll from './MouseScroll';

function Home() {
    gsap.registerPlugin(ScrollTrigger);
    
    const messages = [
        "Développeur Front End",
        "Développeur Back End",
        "Développeur Full Stack",
    ];

    return (
        <div id="Accueil" className='home'>
            <div className='conteneur'>
                <div>
                    <h1 className='fadein bienvenue'><span>Bonjour, je suis</span> <span>Gabriel Christe</span></h1>
                    <div id='fadein title'>
                        <Typewriter messages={messages} />
                    </div>
                    <div className='fadein1s div-p'>
                        <p className='acceuil-p'>Développeur web freelance spécialisé en React et Node.js. Je crée des applications web dynamiques et performantes,
                            adaptées à vos besoins spécifiques. Je vous accompagne dans la réalisation de
                            vos projets digitaux en offrant des solutions modernes et efficaces.</p>
                    </div>
                    <div className='fadein2s div-links'>
                        <a href="#" class="button button--stroke" data-block="button">
                            <span class="button__flair"></span>
                            <span class="button__label link">Contact</span>
                        </a>
                        <a href="#" class="button button--stroke" data-block="button">
                            <span class="button__flair"></span>
                            <span class="button__label link">Projets</span>
                        </a>
                    </div>
                    <MouseScroll />
                </div>
            </div>
        </div>
    );
}

export default Home;
