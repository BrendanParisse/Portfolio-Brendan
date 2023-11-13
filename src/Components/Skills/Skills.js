import React from "react";

const Skills = ({ lastImage, currentImage }) => {
    // Mapping des compétences par image
    const skillMapping = {
        Kasa: ["HTML", "CSS", "REACTJS"],
        Booki: ["HTML", "CSS"],
        Ohmyfood: ["HTML", "SCSS"],
        Portfolio: ["HTML", "CSS", "JS"],
        "Portfolio-Architecte": ["HTML", "CSS", "JS"],
    };

    const imageName = currentImage || lastImage;
    const skills = skillMapping[imageName.split("/").pop().split(".")[0]] || [];

    // Rendu des compétences
    return (
        <div className="Skills-list">
            {skills.map((skill, index) => (
                <div key={index} className={`skills ${skill}`}>
                    <p>{skill}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;