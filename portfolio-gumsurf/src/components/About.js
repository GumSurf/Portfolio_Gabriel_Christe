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
                            <div className="competences competences_frontend">
                                <h2>Développeur Frontend</h2>
                                <p className='competences_text'>Je suis passionné par le frontend pour sa créativité et son impact visuel immédiat.</p>

                                <h3>Technologies :</h3>
                                <p>HTML, CSS, Sass, JavaScript, TypeScript, <br /> React, TailwindCSS, Git</p>

                                <h3>Outils :</h3>
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>GitHub</li>
                                    <li>Figma</li>
                                    <li>Lighthouse</li>
                                    <li>Wave</li>
                                </ul>

                                <h3>Build & Tests :</h3>
                                <ul>
                                    <li>Webpack</li>
                                    <li>Jest</li>
                                </ul>
                            </div>

                            <div className="competences competences_backend">
                                <h2>Développeur Backend</h2>
                                <p className='competences_text'>Je suis passionné par le backend pour sa complexité et sa capacité à construire des architectures solides.</p>

                                <h3>Technologies :</h3>
                                <p>JavaScript, TypeScript, Node.js, <br /> Express.js, Nest.js, Git</p>

                                <h3>Bases de données :</h3>
                                <ul>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                </ul>

                                <h3>Outils & DevOps :</h3>
                                <ul>
                                    <li>Docker</li>
                                    <li>GitHub</li>
                                    <li>Visual Studio Code</li>
                                    <li>Swagger / Postman</li>
                                </ul>

                                <h3>Sécurité & Authentification :</h3>
                                <ul>
                                    <li>JWT (JSON Web Token)</li>
                                    <li>OAuth2</li>
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