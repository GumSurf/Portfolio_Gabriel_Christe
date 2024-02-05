import React from 'react';
import NinaCarducci from '../assets/NinaCarducci.webp';
import MonVieuxGrimoire from '../assets/MonVieuxGrimoire.webp';
import Kasa from '../assets/Kasa.webp';
import SophieBluel from '../assets/SophieBluel.webp';
import { Link } from 'react-router-dom';
import PlanetePortfolio from '../assets/violette_planete.webp';

function Body() {
    return (
        <div id='Portfolio' className='portfolio'>
            <img className='planete_portfolio rotate-self' src={PlanetePortfolio} alt="planete" />
            <h2 className='title'>MES PROJETS</h2>
            <div className='div-projets-img'>
                <div className='Kasa, projet'>
                    <Link to="https://gumsurf.github.io/Kasa-Web-Site-React/">
                        <div className="image-container">
                            <img src={Kasa} alt="site web Kasa" />
                            <div className='overlay'>
                                <h2 className='projet-title'>Kasa</h2>
                                <div className='div-projet-filtre'>
                                    <p className='projet-filtre'>Site React || Responsive || Site web d'une Location immobilière</p>
                                    <div className='div-cliquez-ici'>
                                        <p className='cliquez-ici'>Cliquez ici !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='div-competences-problemes'>
                        <div className='div-competences'>
                            <h2 className='title-competences'>Compétences apprises</h2>
                            <ul className='projet-ul'>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>React</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Responsive</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>JavaScript</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Html / Css</p>
                                </li>
                            </ul>
                        </div>
                        <div className='div-problemes'>
                            <h2 className='title-problemes'>Problème rencontré et réglé</h2>
                            <div className='background-problemes'>
                                <ul className='ul-problemes'>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Erreurs de syntaxe JSX</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Props manquants ou incorrects</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Importation incorrecte de composants</p>
                                    </li>
                                </ul>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='NinaCarducci, projet'>
                    <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/">
                        <div className="image-container">
                            <img src={NinaCarducci} alt="site web Nina Carducci" />
                            <div className='overlay'>
                                <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/"><h2 className='projet-title'>Nina Carducci</h2></Link>
                                <div className='div-projet-filtre'>
                                    <p className='projet-filtre'>Débogage de site web || SEO, Accessibilité || Site web portfolio d'une photographe</p>
                                    <div className='div-cliquez-ici'>
                                        <p className='cliquez-ici'>Cliquez ici !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className='div-competences-problemes'>
                        <div className='div-competences'>
                            <h2 className='title-competences'>Compétences apprises</h2>
                            <ul className='projet-ul'>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>SEO</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Accessibilité</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>JavaScript</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Html / Css</p>
                                </li>
                            </ul>
                        </div>
                        <div className='div-problemes'>
                            <h2 className='title-problemes'>Problème rencontré et réglé</h2>
                            <div className='background-problemes'>
                                <ul className='ul-problemes'>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Maintien de la performance</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Évolutivité de l'accessibilité</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Évolution des pratiques de référencement</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='SophieBluel, projet'>
                <Link to="https://gumsurf.github.io/Portfolio-architecte-sophie-bluel/">
                    <div className="image-container">
                        <img src={SophieBluel} alt="site web Sophie Bluel" />
                        <div className='overlay'>
                        <Link to="https://gumsurf.github.io/Portfolio-architecte-sophie-bluel/"><h2 className='projet-title'>Sophie Bluel</h2></Link>
                            <div className='div-projet-filtre'>
                                <p className='projet-filtre'>Site Html / Css || Site web portfolio d'une architecte d'intérieur</p>
                                <div className='div-cliquez-ici'>
                                    <p className='cliquez-ici'>Cliquez ici !</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                    <div className='div-competences-problemes'>
                        <div className='div-competences'>
                            <h2 className='title-competences'>Compétences apprises</h2>
                            <ul className='projet-ul'>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Page Login</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Api</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>JavaScript</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Html / Css</p>
                                </li>
                            </ul>
                        </div>
                        <div className='div-problemes'>
                            <h2 className='title-problemes'>Problème rencontré et réglé</h2>
                            <div className='background-problemes'>
                                <ul className='ul-problemes'>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Problèmes de Performance des Modales</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Gestion des Réponses de l'API</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Sécurité des Sessions et de l'Authentification</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Booki, projet'>
                <Link to="https://monvieuxgrimoire-gc-6f14ede2407f.herokuapp.com/">
                        <div className="image-container">
                            <img src={MonVieuxGrimoire} alt="site web Mon Vieux Grimoire" />
                            <div className='overlay'>
                            <Link to="https://monvieuxgrimoire-gc-6f14ede2407f.herokuapp.com/"><h2 className='projet-title'>Mon Vieux Grimoire</h2></Link>
                                <div className='div-projet-filtre'>
                                    <p className='projet-filtre'>Site Backend, Node.js, Express.js, MongoDb || Site web de notation de livres</p>
                                    <div className='div-cliquez-ici'>
                                        <p className='cliquez-ici'>Cliquez ici !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Link>
                    <div className='div-competences-problemes'>
                        <div className='div-competences'>
                            <h2 className='title-competences'>Compétences apprises</h2>
                            <ul className='projet-ul'>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Node.js</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>Express.js</p>
                                </li>
                                <li className='projet-li'>
                                    <p className='projet-attribut'>MongoDb</p>
                                </li>
                            </ul>
                        </div>
                        <div className='div-problemes'>
                            <h2 className='title-problemes'>Problème rencontré et réglé</h2>
                            <div className='background-problemes'>
                                <ul className='ul-problemes'>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Performances inadéquates</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Gestion des erreurs négligée</p>
                                    </li>
                                    <li className='li-problemes'>
                                        <p className='problemes'>Sécurité insuffisante</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body