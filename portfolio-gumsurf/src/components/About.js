function About() {
    return (
        <div className="kasa-about">
            <div className='div-mountain'>
                <div className='overlay-mountain'></div>
            </div>
            <details className="div-fiabilite">
                <summary>Fiabilité</summary>
                <div className="text-fiabilite">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                    et toutes les informations sont régulièrement vérifiées par nos équipes.
                </div>
            </details>
            <details>
                <summary>Respect</summary>
                <div className="text-respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
            </details>
            <details>
                <summary>Service</summary>
                <div className="text-service">
                    Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous
                    contacter si vous avez la moindre question.
                </div>
            </details>
            <details>
                <summary>Sécurité</summary>
                <div className="text-securite">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </details>
        </div>
    );
}

export default About;
