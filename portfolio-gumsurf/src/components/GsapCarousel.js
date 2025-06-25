import Kasa from '../assets/Kasa.webp';
import NinaCarducci from '../assets/NinaCarducci.webp';
import MonVieuxGrimoire from '../assets/MonVieuxGrimoire.webp';
import SophieBluel from '../assets/SophieBluel.webp';
import CocktailExplorer from '../assets/CocktailExplorer.png';

const GsapCarousel = () => {

    return (
        <div>
            <section></section>
            <div class="img-carousel">
                <div class="spacer"></div>
                <div class="slide">
                    <a href="https://cocktail-explorer-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={CocktailExplorer} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Cocktail Explorer</h3>
                                <p>A la recherche d'une recette de cocktail ?</p>
                                <p>
                                    <span>React.js</span>
                                    <span>TailWind Css</span>
                                    <span>JavaScript</span>
                                    <span>responsive</span>
                                </p>
                            </div>
                        </div>

                    </a>
                </div>
                <div class="slide">
                    <a href="https://gumsurf.github.io/P7-Dev-Web-livres/" target="_blank" rel="noopener noreferrer">
                        <div class="card">
                            <img src={MonVieuxGrimoire} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Mon Vieux Grimoire</h3>
                                <p>Un site web permettant aux utilisateurs de noter leurs livres.</p>
                                <p>
                                    <span>Node.js</span>
                                    <span>MongoDB</span>
                                    <span>JavaScript</span>
                                    <span>RESTful API</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide">
                    <a href="https://gumsurf.github.io/Kasa-Web-Site-React/" target="_blank" rel="noopener noreferrer">
                        <div class="card">
                            <img src={Kasa} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Kasa</h3>
                                <p>Site web de location immobilière entre particuliers, permettant de gérer des annonces de manière simple et efficace.</p>
                                <p>
                                    <span>React.js</span>
                                    <span>Html/Css</span>
                                    <span>JavaScript</span>
                                    <span>responsive</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide">
                    <a href="https://nina-carducci-gumsurf.nina-carducci-gumsurf.fr/" target="_blank" rel="noopener noreferrer">
                        <div class="card">
                            <img src={NinaCarducci} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Nina Carducci</h3>
                                <p>Optimisation du site web de Nina Carducci pour améliorer la vitesse de chargement, l'accessibilité et le SEO.</p>
                                <p>
                                    <span>JavaScript</span>
                                    <span>Html/Css</span>
                                    <span>SEO</span>
                                    <span>Accessibilité</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide">
                    <a href="https://gumsurf.github.io/Portfolio-architecte-sophie-bluel/" target="_blank" rel="noopener noreferrer">
                        <div class="card">
                            <img src={SophieBluel} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Sophie Bluel</h3>
                                <p>Développement de l’API du site de Sophie Bluel, décoratrice d’intérieur, pour gérer les données et interactions du site.</p>
                                <p>
                                    <span>JavaScript</span>
                                    <span>Html/Css</span>
                                    <span>RESTful API</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="spacer"></div>
            </div>
        </div>
    );
};

export default GsapCarousel;