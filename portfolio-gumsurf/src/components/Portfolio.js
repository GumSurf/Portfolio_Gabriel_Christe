import React from 'react';
import NinaCarducci from '../assets/NinaCarducci.png';
import Booki from '../assets/Booki.png';
import Kasa from '../assets/Kasa.png';
import SophieBluel from '../assets/SophieBluel.png';
import { Link } from 'react-router-dom';
import PlanetePortfolio from '../assets/violette_planete.webp';

function Body() {
    return (
        <div id='Portfolio' className='portfolio'>
            <img className='planete_portfolio rotate-self' src={PlanetePortfolio} alt="planete" />
            <h2 className='title'>MES PROJETS</h2>
            <div className='div-projets-img'>
                <div className='Kasa, projet'>
                    <div className="image-container">
                        <Link to=""><img src={Kasa} alt="site web Kasa"/></Link>
                        <div className='overlay'>
                            <h2 className='projet-title'>Kasa</h2>
                            <div className='div-projet-filtre'>
                                <p className='projet-filtre'>Site React || Responsive || Location immobilière</p>
                            </div>
                        </div>
                    </div>
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
                <div className='NinaCarducci, projet'>
                    <div className="image-container">
                        <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/"><img src={NinaCarducci} alt="site web Nina Carducci"/></Link>
                        <div className='overlay'>
                            <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/"><h2 className='projet-title'>Nina Carducci</h2></Link>
                            <div className='div-projet-filtre'>
                                <p className='projet-filtre'>Débogage de site web || SEO, Accessibilité || Portfolio photographe</p>
                            </div>
                        </div>
                    </div>
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
                <div className='SophieBluel, projet'>
                    <div className="image-container">
                        <Link to=""><img src={SophieBluel} alt="site web Sophie Bluel"/></Link>
                        <div className='overlay'>
                            <h2 className='projet-title'>Sophie Bluel</h2>
                            <div className='div-projet-filtre'>
                                <p className='projet-filtre'>Site Html / Css || Portfolio architect d'intérieur</p>
                            </div>
                        </div>
                    </div>

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
                <div className='Booki, projet'>
                    <div className="image-container">
                        <Link to="https://gumsurf.github.io/Booki/"><img src={Booki} alt="site web Booki"/></Link>
                        <div className='overlay'>
                            <Link to="https://gumsurf.github.io/Booki/"><h2 className='projet-title'>Booki</h2></Link>
                            <div className='div-projet-filtre'>
                                <p className='projet-filtre'>Site Html / Css || Responsive || Agence de voyage</p>
                            </div></div>
                    </div>

                    <ul className='projet-ul'>
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
            </div>
        </div>
    )
}

export default Body