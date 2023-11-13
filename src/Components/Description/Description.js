import React from "react";

const projectData = {
    Booki: {
        title: "BOOKI",
        subtitle: "Intégration d'interface HTML/CSS",
        description: "Réalisation de l'intégration de l'interface pour le projet Booki à partir d'une base de code et des maquettes fournies, en respectant les spécifications techniques et en assurant une structure de fichiers cohérente. Le projet visait à créer un site proposant une expérience utilisateur fonctionnelle permettant aux utilisateurs de trouver des hébergements et des activités dans leur ville de choix.",
    },
    Kasa: {
        title: "KASA",
        subtitle: " Refonte d'une plateforme",
        description: "Refonte de la plateforme web de Kasa passant d'ASP.NET à une stack  JavaScript avec NodeJS en back-end et React en front-end. J'ai développé l'ensemble de l'application en suivant les directives de Figma et les contraintes techniques données pour garantir la qualité du code.  ",
    },
    Ohmyfood: {
        title: "OHMYFOOD",
        subtitle: "Développement d'un site Mobile First",
        description: "Développement d'un site mobile first répertoriant les menus de restaurants gastronomiques, permettant aux clients de composer leurs repas.  J'ai développé le site à à partir des maquettes et spécifications fournies (conception responsive, animations..).",
    },
    'Portfolio-Architecte': {
        title: "PORTFOLIO",
        subtitle: "Développement Front-end",
        description: "Contribution au développement front-end du site portfolio d'une architecte d'intérieur. Le projet comprenait la création de la page de présentation des travaux à partir du HTML existant, l'implémentation de la page de connexion de l'administrateur, et le développement d'une modale pour l'upload des médias. Certaines ressources étaient fournies, notamment le design Figma, le code back-end et et la base front-end, ainsi qu'un Kanban pour la gestion des tâches.",
    },
    PROJET: {
        title: "PROJET",
        subtitle: "Projet générique",
        description: "Description du projet",
    },
};

const Description = ({ lastImage, currentImage }) => {
    const imageName = currentImage ? currentImage : lastImage;

    // Extraire le nom du fichier sans le chemin
    const projectName = imageName.split("/").pop().split(".")[0];
    const { title, subtitle, description } = projectData[projectName] || projectData.PROJET;

    return (
        <div className="ProjectDescription">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
    );
};


export default Description;