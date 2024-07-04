import React, { useState } from 'react';

import Kasa from '../assets/Kasa.webp';
import NinaCarducci from '../assets/NinaCarducci.webp';
import SophieBluel from '../assets/SophieBluel.webp';
import MonVieuxGrimoire from '../assets/MonVieuxGrimoire.webp';
// Importez les autres images ici

const SHAPES = [
    [
        "MonVieuxGrimoire",
        MonVieuxGrimoire,
        "https://gumsurf.github.io/P7-Dev-Web-livres/"
    ],
    [
        "Kasa",
        Kasa,
        'https://gumsurf.github.io/Kasa-Web-Site-React/'
    ],
    [
        "NinaCarducci",
        NinaCarducci,
        "https://gumsurf.github.io/Portfolio-Nina-Carducci/"
    ],
    [
        "SophieBluel",
        SophieBluel,
        "https://gumsurf.github.io/Portfolio-architecte-sophie-bluel/"
    ]
];

const TEXT_SHAPES = [
    [
        "MonVieuxGrimoire",
        "Description :",
        "J'ai développé le backend du site web  \"Mon Vieux Grimoire\" en utilisant Node.js et Express.js, connecté à une base de données MongoDB. Ce projet avait déjà un frontend existant. Le site permet aux utilisateurs de noter différents livres, générant ainsi une note moyenne pour chaque livre. Les fonctionnalités incluent la création de comptes, l'ajout de livres, la modification de posts, et la possibilité de noter les livres des autres utilisateurs.",
        "Actions réalisées :",
        "Développement du backend : Utilisation de Node.js et Express.js pour créer une API robuste et sécurisée.",
        "Gestion de la base de données MongoDB : Configuration et intégration d'une base de données pour stocker les informations sur les utilisateurs, les livres et les notes.",
        "Implémentation du système de notation : Mise en place d'un système permettant aux utilisateurs de noter et de consulter la note moyenne des livres.",
        "Fonctionnalités utilisateur avancées : Création de comptes, ajout de livres, modification de posts et interactions sociales telles que la notation des livres des autres utilisateurs.",
        "Résultats obtenus :",
        "Plateforme interactive : Les utilisateurs peuvent interagir de manière dynamique avec les livres en les notant et en partageant leurs critiques.",
        "Sécurité renforcée : Implémentation de mesures de sécurité pour protéger les données des utilisateurs et prévenir les attaques.",
        "Expérience utilisateur améliorée : Le backend robuste assure une performance optimale et une navigation fluide sur la plateforme."
    ],
    [
        "Kasa",
        "Description :",
        "Kasa est un site web de location immobilière entre particuliers. Il permet aux utilisateurs de louer ou de mettre en location des biens immobiliers de manière simple et efficace.",
        "Technologies utilisées :",
        "React : Pour créer une interface utilisateur dynamique et réactive.",
        "JavaScript : Pour gérer la logique et l'interactivité du site.",
        "Fonctionnalités principales :",
        "Recherche avancée : Les utilisateurs peuvent rechercher des biens immobiliers en fonction de divers critères (emplacement, prix, type de logement, etc.).",
        "Profil utilisateur : Chaque utilisateur peut créer et gérer son propre profil, ainsi que ses annonces.",
        "Gestion des annonces : Les propriétaires peuvent ajouter, modifier et supprimer leurs annonces de location.",
        "Système de réservation : Les locataires peuvent réserver des biens directement via le site.",
        "Commentaires et évaluations : Les utilisateurs peuvent laisser des avis et des notes sur les biens loués, améliorant ainsi la transparence et la confiance entre les parties."
    ],
    [
        "NinaCarducci",
        "Description :",
        "J'ai travaillé sur l'optimisation du site web de Nina Carducci pour résoudre des problèmes de ralentissement lors du chargement de la page. En plus de l'optimisation de la vitesse, j'ai ajouté des améliorations en termes d'accessibilité et de SEO pour rendre le site plus fluide et agréable à utiliser.",
        "Actions réalisées :",
        "Optimisation de la vitesse de chargement : Réglage des bugs qui affectaient la performance du site, garantissant ainsi une expérience utilisateur plus rapide et efficace.",
        "Améliorations d'accessibilité : Intégration de fonctionnalités facilitant l'accès au site pour les utilisateurs avec des besoins spécifiques, améliorant ainsi l'inclusivité.",
        "Optimisation SEO : Mise en place de bonnes pratiques SEO pour améliorer la visibilité du site sur les moteurs de recherche, augmentant ainsi son potentiel de trafic organique.",
        "Résultats obtenus :",
        "Fluidité améliorée : Les ajustements effectués ont rendu la navigation sur le site plus fluide et agréable.",
        "Meilleure performance globale : Les utilisateurs peuvent désormais accéder au contenu plus rapidement, ce qui contribue à une expérience utilisateur améliorée.",
        "Augmentation de la visibilité : L'optimisation SEO a permis d'attirer davantage de visiteurs organiques sur le site."
        
    ],
    [
        "SophieBluel",
        "Description :",
        "J'ai été responsable de développer le frontend du site web de Sophie Bluel, une décoratrice d'intérieur. Le backend était déjà en place, donc j'ai utilisé HTML, CSS et JavaScript pour créer une interface utilisateur interactive. Mon travail principal incluait la connexion à une API existante pour afficher les photos de Sophie Bluel et leur assigner des catégories spécifiques.",
        "Actions réalisées :",
        "Développement du frontend : Création d'une interface utilisateur attrayante et responsive en utilisant HTML, CSS et JavaScript.",
        "Intégration de fonctionnalités avancées : Ajout d'un carrousel et d'autres fonctionnalités interactives pour améliorer l'expérience utilisateur.",
        "Connexion à l'API backend : Configuration pour récupérer et afficher dynamiquement les photos de Sophie Bluel depuis l'API.",
        "Gestion des catégories : Définition et attribution de catégories à chaque photo, permettant aux utilisateurs de naviguer facilement par thème.",
        "Résultats obtenus :",
        "Interface utilisateur intuitive : Les améliorations apportées ont rendu le site plus convivial et accessible.",
        "Fonctionnalités enrichies : Les fonctionnalités comme le carrousel et la gestion des catégories améliorent l'engagement des utilisateurs.",
        "Intégration transparente de l'API : Les photos de Sophie Bluel sont désormais facilement accessibles et organisées selon les catégories définies."
    ]
];

const SPECIAL_INDICES = [
    [0, 1, 3, 8],
    [0, 1, 3, 6],
    [0, 1, 3, 7],
    [0, 1, 3, 8],
  ];

function App() {
    const [app, updateApp] = useState({
        currentIndex: 0,
        lastIndex: -1,
        direction: 0
    });

    function Carousel(props) {
        function showNext(index) {
            let lastIndex =
                index < 0
                    ? 0
                    : index === props.shapes.length
                        ? props.shapes.length - 1
                        : index;
            let currentIndex = index + 1 === props.shapes.length ? 0 : index + 1;
            props.updateApp({ currentIndex, lastIndex, direction: 1 });
        }

        function showPrevious(index) {
            let lastIndex = index < 0 ? 0 : index;
            let currentIndex = index - 1 < 0 ? props.shapes.length - 1 : index - 1;
            props.updateApp({ currentIndex, lastIndex, direction: -1 });
        }

        return (
            <div
                className={"carousel carousel--" + props.shapes[props.currentIndex][0]}
            >
                <div
                    onClick={() => showPrevious(props.currentIndex)}
                    className="controls controls--back"
                >
                    <span></span>
                </div>

                <Slide shape={props.shapes[props.currentIndex]} />

                <div
                    onClick={() => showNext(props.currentIndex)}
                    className="controls controls--next"
                >
                    <span></span>
                </div>
            </div>
        );
    }

    function Slide(props) {

        return (
            <div key={props.shape[0]} className={"slide slide--" + props.shape[0]}>
                <a href={props.shape[2]}>
                    <img
                        src={props.shape[1]}
                        alt={props.shape[0]}
                        className={"slide__shape slide__shape--" + props.shape[0]}
                    />
                </a>
            </div>
        );
    }

    function Code(props) {
        const currentShapes = props.currentShape;
        const specialIndices = props.specialIndices || [[]];

        const getClassname = (index) => {
          let className = "code";
          if (specialIndices.includes(index)) {
            className += " code--active";
          } else {
            className += " code--secondary";
          }
          className += props.direction < 0 ? " slide-left" : " slide-right";
          return className;
        };

        return (
            <div className={"code-wrapper code-wrapper--" + props.currentShape[0]}>
                {currentShapes.map((shape, index) => (
                    <pre
                        key={shape}
                        className={getClassname(index)}
                    >
                        {shape}
                    </pre>
                ))}

                {props.lastShape && (
                    <pre
                        key={props.lastShape[0]}
                        className={
                            "code code--last" +
                            (props.direction < 0 ? " slide-left" : " slide-right")
                        }
                    >
                        {props.lastShape[1]}
                    </pre>
                )}
            </div>
        );
    }

    return (
        <div className="wrapper">

            <Carousel
                direction={app.direction}
                currentIndex={app.currentIndex}
                lastIndex={app.currentIndex}
                updateApp={updateApp}
                shapes={SHAPES}
            />

            <Code
                direction={app.direction}
                lastShape={TEXT_SHAPES[app.lastIndex]}
                currentShape={TEXT_SHAPES[app.currentIndex]}
                shapes={TEXT_SHAPES}
                specialIndices={SPECIAL_INDICES[app.currentIndex]}
            />
        </div>
    );
}

export default App;
