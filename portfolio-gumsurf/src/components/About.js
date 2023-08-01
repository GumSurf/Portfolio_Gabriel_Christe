import React from 'react';
import Me from '../assets/Me.jpg';

function Home() {
    return (
        <div className='About'>
            <div className='div-img-me'>
                <img className='img-me' src={Me} alt="Moi"/>
            </div>
            <div className='info'>
                <h1 className='title'>À propos</h1>
                <p className='paraghraphe1'>
                    Je m'appelle Gabriel Christe, développeur web passionné de 21 ans. Mon expertise se concentre sur React,
                    HTML, CSS et JavaScript, me permettant de créer des sites modernes et réactifs. Je relève les défis techniques
                    avec créativité et recherche des solutions innovantes. Mon objectif est de fournir des expériences utilisateur
                    uniques et engageantes en suivant les meilleures pratiques du développement web. Je suis disponible pour créer
                    des sites sur mesure ou pour la refonte de projets existants. Contactez-moi pour concrétiser votre vision.
                </p>
                <ul>
                    <li>
                        <p className='competences'>React</p>
                    </li>
                    <li>
                        <p className='competences'>Html / Css</p>
                    </li>
                    <li>
                        <p className='competences'>JavaScript</p>
                    </li>
                    <li>
                        <p className='competences'>Node.js</p>
                    </li>
                    <li>
                        <p className='competences'>MongoDB</p>
                    </li>
                    <li>
                        <p className='competences'>C</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home