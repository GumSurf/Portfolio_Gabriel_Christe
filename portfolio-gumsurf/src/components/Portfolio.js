import React from 'react';
import App from './Carousel'
import GsapCarousel from './GsapCarousel';

function Body() {
    return (
        <div id='Portfolio' className='portfolio'>
            <div className='background_portfolio'>
                <h2 className='second_title'>Voyage au Cœur de Mes Créations</h2>
                <div className='div_text'>
                    <p className='text'>Bienvenue dans mon univers créatif. Ici, vous découvrirez une sélection de mes projets, chacun
                        étant une étape clé de mon parcours professionnel et artistique. Explorez, inspirez-vous, et
                        n'hésitez pas à me contacter pour toute collaboration ou question.</p>
                </div>
            </div>
            <br></br>
            <GsapCarousel />
        </div>
    )
}

export default Body