import React from 'react';

function Home() {
    return (
        <div id='About'>
            <div className='background_about'>
                <div className='background_purple'>
                    <h2 className='second_title'>Ma Palette de Compétences</h2>
                    <div className='div_text'>
                        <p className='text'>Voici un aperçu de mes compétences et des outils que j'utilise au quotidien pour donner vie à mes projets.
                            Mon expertise couvre divers domaines, me permettant d'apporter des solutions complètes et innovantes à
                            chaque défi rencontré. Explorez mes compétences ci-dessous pour en savoir plus sur ce que je peux offrir.</p>
                    </div>
                    <div className='About'>
                        <div className="Box">
                            <div className='competences_frontend'>
                                <h2>Développeur Frontend</h2>
                                <p>Je suis passionné par le frontend pour sa créativité et son impact visuel immédiat.</p>
                                <p>Technologies:</p>
                                <p>Html, Css, JavaScript, React, Sass, Typescript, Git</p>
                                <p>Outils Dev:</p>
                                <ul>
                                    <li>Lighthouse</li>
                                    <li>Wave</li>
                                    <li>Figma</li>
                                    <li>Github</li>
                                    <li>Visual Studio Code</li>
                                    <li>tailwindCSS</li>
                                </ul>
                            </div>
                            <div className='competences_backend'>
                                <h2>Développeur Backend</h2>
                                <p>Je suis passionné par le backend pour sa complexité et sa capacité à construire des architectures solides.</p>
                                <p>Technologies:</p>
                                <p>JavaScript, Node.js, Express.js, Typescript, Nest.js, Git</p>
                                <p>Outils Dev:</p>
                                <ul>
                                    <li>MongoDB</li>
                                    <li>Github</li>
                                    <li>MySQL</li>
                                    <li>Docker</li>
                                    <li>Visual Studio Code</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home