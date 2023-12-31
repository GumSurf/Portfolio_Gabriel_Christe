import React from 'react';
import Planete from '../assets/bleu_planete.webp';

function Home() {
    return (
        <div id='About' className='div_planete_about'>
            <img className='planete_about rotate-self' src={Planete} alt="planete" />
            <div className='About'>
                <div className='competences_frontend'>
                    <h2>Développeur Frontend</h2>
                    <p>Languages:</p>
                    <p>Html, Css, JavaScript, React, Sass</p>
                    <p>Outils Dev:</p>
                    <ul>
                        <li>Lighthouse</li>
                        <li>Wave</li>
                        <li>Figma</li>
                        <li>Github</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
                <div className='competences_backend'>
                    <h2>Développeur Backend</h2>
                    <p>Languages:</p>
                    <p>JavaScript, Node.js, Express.js</p>
                    <p>Outils Dev:</p>
                    <ul>
                        <li>MongoDB</li>
                        <li>Github</li>
                        <li>Owasp</li>
                        <li>Green IT</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home