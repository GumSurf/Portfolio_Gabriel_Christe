import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Bleu_Planete from '../assets/bleu_planete.webp';
import Violette_Planete from '../assets/violette_planete.webp';
import Rose_Planete from '../assets/rose_planete.webp';
import Satellite from '../assets/satellite.webp';

function Planetes() {
    const [isHoveredRose, setIsHoveredRose] = useState(false);
    const [isHoveredViolette, setIsHoveredViolette] = useState(false);
    const [isHoveredBleu, setIsHoveredBleu] = useState(false);
    const [isHoveredSatellite, setIsHoveredSatellite] = useState(false);

    const handleMouseEnterRose = () => {setIsHoveredRose(true);};
    const handleMouseLeaveRose = () => {setIsHoveredRose(false);};

    const handleMouseEnterViolette = () => {setIsHoveredViolette(true);};
    const handleMouseLeaveViolette = () => {setIsHoveredViolette(false);};

    const handleMouseEnterBleu= () => {setIsHoveredBleu(true);};
    const handleMouseLeaveBleu = () => {setIsHoveredBleu(false);};

    const handleMouseEnterSatellite = () => {setIsHoveredSatellite(true);};
    const handleMouseLeaveSatellite = () => {setIsHoveredSatellite(false);};
    return (
        <div className='div_planetes'>
            <div className='planete'>
                <Link className='lien lien_rose_planete' to='/Portfolio_GumSurf/'>
                    <img className="img_planete rose_planete" src={Rose_Planete} alt="Rose Planete" onMouseEnter={handleMouseEnterRose} onMouseLeave={handleMouseLeaveRose} />
                    {isHoveredRose && <p className='nom nom_rose_planete'>Accueil</p>}
                </Link>
            </div>
            {isHoveredRose && <div className='overlay'></div>}
            <div className='planete'>
                <Link className='lien lien_violette_planete' to='/Portfolio_GumSurf/'>
                    <img className="img_planete violette_planete" src={Violette_Planete} alt="Violette Planete" onMouseEnter={handleMouseEnterViolette} onMouseLeave={handleMouseLeaveViolette} />
                    {isHoveredViolette && <p className='nom nom_violette_planete'>Portfolio</p>}
                </Link>
            </div>
            {isHoveredViolette && <div className='overlay'></div>}
            <div className='planete'>
                <Link className='lien lien_bleu_planete' to='/Portfolio_GumSurf/'>
                    <img className="img_planete bleu_planete" src={Bleu_Planete} alt="Bleu Planete" onMouseEnter={handleMouseEnterBleu} onMouseLeave={handleMouseLeaveBleu} />
                    {isHoveredBleu && <p className='nom nom_bleu_planete'>A propos de moi</p>}        
                </Link>
            </div>
            {isHoveredBleu && <div className='overlay'></div>}
            <div className='planete'>
                <Link className='lien lien_satellite' to='/Portfolio_GumSurf/'>
                    <img className="img_planete satellite" src={Satellite} alt="Satellite" onMouseEnter={handleMouseEnterSatellite} onMouseLeave={handleMouseLeaveSatellite} />
                    {isHoveredSatellite && <p className='nom nom_satellite'>Contact</p>}        
                </Link>
            </div>
            {isHoveredSatellite && <div className='overlay'></div>}
        </div>
    );
}

export default Planetes;