import Kasa from '../assets/Kasa.webp';
import NinaCarducci from '../assets/NinaCarducci.webp';
import MonVieuxGrimoire from '../assets/MonVieuxGrimoire.webp';
import SophieBluel from '../assets/SophieBluel.webp';
import CocktailExplorer from '../assets/CocktailExplorer.png';
import LadyBeaute from '../assets/LadyBeaute.png';

const GsapCarousel = () => {

    return (
        <div>
            <section></section>
            <div class="img-carousel">
                <div class="spacer"></div>
                <div class="slide">
                    <a href="https://www.ladybeaute.fr/" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={LadyBeaute} alt="Lady Beauté - Institut de beauté à Lanester" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Lady Beauté</h3>
                                <p>Un site immersif et élégant pour une institut de beauté à Lanester.</p>
                                <p className="tags">
                                    <span className="tag react">React.js</span>
                                    <span className="tag tailwind">Tailwind CSS</span>
                                    <span className="tag framer">Framer Motion</span>
                                    <span className="tag seo">SEO Optimisé</span>
                                    <span className="tag responsive">Responsive</span>
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="slide">
                    <a href="https://cocktail-explorer-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="card">
                            <img src={CocktailExplorer} alt="" />
                            <div class="background-overlay"></div>
                            <div className='content_card'>
                                <h3>Cocktail Explorer</h3>
                                <p>A la recherche d'une recette de cocktail ?</p>
                                <p>
                                    <span className="tag react">React.js</span>
                                    <span className="tag tailwind">Tailwind CSS</span>
                                    <span className="tag javascript">JavaScript</span>
                                    <span className="tag responsive">Responsive</span>
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
                                    <span className="tag node">Node.js</span>
                                    <span className="tag mongodb">MongoDB</span>
                                    <span className="tag javascript">JavaScript</span>
                                    <span className="tag api">RESTful API</span>
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
                                    <span className="tag react">React.js</span>
                                    <span className="tag htmlcss">Html/Css</span>
                                    <span className="tag javascript">JavaScript</span>
                                    <span className="tag responsive">Responsive</span>
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
                                    <span className="tag javascript">JavaScript</span>
                                    <span className="tag htmlcss">Html/Css</span>
                                    <span className="tag seo">SEO</span>
                                    <span className="tag accessibility">Accessibilité</span>
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
                                    <span className="tag javascript">JavaScript</span>
                                    <span className="tag htmlcss">Html/Css</span>
                                    <span className="tag api">RESTful API</span>
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