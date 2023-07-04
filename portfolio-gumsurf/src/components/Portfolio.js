import React from 'react';
import NinaCarducci from '../assets/NinaCarducci.png';
import Booki from '../assets/Booki.png';
import Kasa from '../assets/Kasa.png';
import SophieBluel from '../assets/SophieBluel.png';
import Me from '../assets/Me.jpg'
import { Link } from 'react-router-dom';

function Body() {
    return (
        <div className='portfolio'>
            <h2 className='title'>MES PROJETS</h2>
            <div className='div-projets-img'>
                <div className='Kasa, projet'>
                    <Link to=""><img src={Kasa} /></Link>
                    <h2 className='projet-title'>Kasa</h2>
                    <div className='div-projet-filtre'>
                        <p className='projet-filtre'>Site React || Responsive || Location immobilière</p>
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
                    <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/"><img src={NinaCarducci} /></Link>
                    <Link to="https://gumsurf.github.io/Portfolio-Nina-Carducci/"><h2 className='projet-title'>Nina Carducci</h2></Link>
                    <div className='div-projet-filtre'>
                        <p className='projet-filtre'>Débogage de site web || SEO, Accessibilité || Portfolio photographe</p>
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
                    <Link to=""><img src={SophieBluel} /></Link>
                    <h2 className='projet-title'>Sophie Bluel</h2>
                    <div className='div-projet-filtre'>
                        <p className='projet-filtre'>Site Html / Css || Portfolio architect d'intérieur</p>
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
                    <Link to="https://gumsurf.github.io/Booki/"><img src={Booki} /></Link>
                    <Link to="https://gumsurf.github.io/Booki/"><h2 className='projet-title'>Booki</h2></Link>
                    <div className='div-projet-filtre'>
                        <p className='projet-filtre'>Site Html / Css || Responsive || Agence de voyage</p>
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