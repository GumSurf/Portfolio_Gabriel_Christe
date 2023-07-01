import React from 'react';
import NinaCarducci from '../assets/NinaCarducci.png';
import Booki from '../assets/Booki.png';
import Kasa from '../assets/Kasa.png';
import SophieBluel from '../assets/SophieBluel.png';
import Me from '../assets/Me.jpg'

function Body() {
    return (
        <div id='portfolio'>
            <h2>MES PROJETS</h2>
            <div className='div-projets-img'>
                <div className='kasa'>
                    <img src={Kasa} />
                </div>
                <div className='NinaCarducci'>
                    <img src={NinaCarducci} />
                </div>
                <div className='Sophie Bluel'>
                    <img src={SophieBluel} />
                </div>
                <div className='Booki'>
                    <img src={Booki} />
                </div>
            </div>
            <div className='About'>
                <h2>À PROPOS</h2>
                <p>Je suis un jeune de 21 ans passionné par l'informatique et le développement web. Avec une expertise solide en React, HTML, 
                    CSS et JavaScript, j'aime créer des interfaces interactives et esthétiques. Je suis également familier avec Linux et le 
                    bash, ce qui me permet d'explorer le système d'exploitation et d'automatiser des tâches. En plus de mes compétences en 
                    développement web, j'ai des connaissances en langage "C" et j'ai déjà créé des projets utilisant ce langage. Toujours en 
                    quête d'apprentissage, je reste à l'affût des dernières tendances technologiques. Je suis motivé par la résolution de 
                    problèmes complexes et la création de solutions innovantes. Mon objectif est de poursuivre ma carrière dans ce domaine 
                    dynamique et de contribuer à la création d'expériences numériques exceptionnelles.</p>
                    <img src={Me}/>
            </div>
            <div id='contact'>
                <h2>CONTACTEZ-MOI</h2>
                <h3>ADRESSE</h3>
                <p>10, avenue de la libération 56700 Hennebont</p>
                <h3>TÉLÉPHONE</h3>
                <p>(+33)6 38 87 05 62</p>
                <h3>E-MAIL</h3>
                <p>gabriel.christe@gmail.com</p>
            </div>
        </div>
    )
}

export default Body