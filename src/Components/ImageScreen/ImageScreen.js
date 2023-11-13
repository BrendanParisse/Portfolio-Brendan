// ImageScreen.js
import React from 'react';

const ImageScreen = ({ lastImage, siteLink, repoLink }) => {
    return (
        <div className="Screen-Desktop">
            <img src={lastImage} alt="ProjectImage" />
            <div className='container_liens'>
                <a href={siteLink} target="_blank" rel="noopener noreferrer">
                    Voir le site
                </a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                    Repo GitHub
                </a>
            </div>
        </div>
    );
};

export default ImageScreen;