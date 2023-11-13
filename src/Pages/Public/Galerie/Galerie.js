import React, { useState } from 'react';
import Description from '../../../Components/Description/Description.js';
import Carrousel from '../../../Components/Carrousel/Carrousel.js';
import Skills from '../../../Components/Skills/Skills.js';
import Kasa from '../../../Assets/Images/Kasa.avif';
import Booki from '../../../Assets/Images/Booki.avif';
import Ohmyfood from '../../../Assets/Images/Ohmyfood.avif';
import Portfolio from '../../../Assets/Images/Portfolio-Architecte.avif';

const Galerie = () => {
    const [currentImage, setCurrentImage] = useState(Booki);
    const [oldImage, setOldImage] = useState(Kasa);
    const [applyAnimation, setApplyAnimation] = useState(true);
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [descriptionActive, setDescriptionActive] = useState(false);
    const [DetailsActive, setDetailsActive] = useState(false);

    const handleCarouselClick = (image, index) => {
        setOldImage(currentImage);
        setCurrentImage(image);
        setApplyAnimation(true);
        setHoveredIndex(index);
        setActiveIndex(index);
        setDescriptionActive(true);
        setDetailsActive(true);
    };

    const handleBackgroundAnimationEnd = () => {
        setApplyAnimation(false);
    };

    const handleDetailsAnimationEnd = () => {
        setDetailsActive(false);
    };


    return (
        <section className={`SectionGalerie ${descriptionActive ? 'description-active' : ''}`}>
            <img
                className={`backgroundimg_1 background_old ${applyAnimation ? 'background-animation_1' : ''}`}
                src={oldImage}
                alt="background"
                onAnimationEnd={handleBackgroundAnimationEnd}
            />
            <img
                className={`backgroundimg background_current ${applyAnimation ? 'background-animation' : ''}`}
                src={currentImage}
                alt="background"
                onAnimationEnd={handleBackgroundAnimationEnd}
            />
            <div className={`Container_Galerie ${descriptionActive ? 'description-active' : ''}`}>
                <div className='Galerie'>
                    <h2 className='Titre_Galerie'>GALERIE</h2>
                    <Carrousel
                        Kasa={Kasa}
                        Ohmyfood={Ohmyfood}
                        Booki={Booki}
                        Portfolio={Portfolio}
                        onCarouselClick={handleCarouselClick}
                        hoveredIndex={hoveredIndex}
                        activeIndex={activeIndex}
                        descriptionActive={descriptionActive}
                    />
                    <div id="Details" className={`Details ${DetailsActive ? 'Details-active' : ''}`} onAnimationEnd={handleDetailsAnimationEnd}>
                        <Description currentImage={currentImage} />
                        <Skills currentImage={currentImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Galerie;