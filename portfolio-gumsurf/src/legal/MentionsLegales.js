const MentionsLegales = () => {
    return (
        <div className="mentions-legales-container">
            <h1 className="mentions-legales-title">Mentions Légales</h1>
            <div className="mentions-legales-content">
                <p>
                    <strong className="mentions-legales-strong">Éditeur du site :</strong> Gabriel Christe
                </p>
                <p>
                    <strong className="mentions-legales-strong">Statut :</strong> Développeur web freelance
                </p>
                <p>
                    <strong className="mentions-legales-strong">Email :</strong>{" "}
                    <a href="mailto:gabriel.christe@gmail.com" className="mentions-legales-link">
                        gabriel.christe@gmail.com
                    </a>
                </p>
                <p>
                    <strong className="mentions-legales-strong">Hébergeur :</strong>{" "}
                    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer" className="mentions-legales-link">
                        Vercel
                    </a>
                </p>
            </div>

            <h2 className="mentions-legales-section-title">Propriété intellectuelle</h2>
            <p className="mentions-legales-content">
                L'ensemble du contenu présent sur ce site (textes, images, logos, code) est protégé par le droit d'auteur.
                Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>

            <h2 className="mentions-legales-section-title">Données personnelles</h2>
            <p className="mentions-legales-content">
                Les informations collectées via le formulaire de contact sont uniquement destinées à répondre aux demandes des utilisateurs.
                Aucune donnée n'est cédée à des tiers. Vous pouvez demander la suppression de vos données à tout moment en contactant{" "}
                <a href="mailto:gabriel.christe@gmail.com" className="mentions-legales-link">
                    gabriel.christe@gmail.com
                </a>.
            </p>
        </div>
    );
};

export default MentionsLegales;