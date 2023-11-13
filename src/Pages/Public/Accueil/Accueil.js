import React, { useState, useEffect, useRef } from 'react';
import Skills from '../../../Components/Skills/Skills.js';
import Description from '../../../Components/Description/Description.js';
import ImageScreen from '../../../Components/ImageScreen/ImageScreen.js';
import Zoom from '../../../Assets/Images/Agrandir.png';
import Kasa from '../../../Assets/Images/Kasa.avif';
import KasaSite from '../../../Assets/Images/Kasa-site.avif';
import Booki from '../../../Assets/Images/Booki.avif';
import Ohmyfood from '../../../Assets/Images/Ohmyfood.avif';
import Portfolio from '../../../Assets/Images/Portfolio-Architecte.avif';
import BookiSite from '../../../Assets/Images/Booki-Site.avif';
import OhmyfoodSite from '../../../Assets/Images/Ohmyfood-Site.png';
import PortfolioSite from '../../../Assets/Images/Portfolio-site.png';


const Accueil = () => {
    const [images, setImages] = useState([Kasa, Ohmyfood, Portfolio, Booki]);
    const lastImage = images[images.length - 1];
    const PreviousImg = images[images.length - 2];
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const bannerImgRef = useRef(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleClick = (index) => {
        const newImages = [...images];
        const hoveredImage = newImages.splice(index, 1)[0];
        newImages.push(hoveredImage);
        setImages(newImages);
    };

    useEffect(() => {
        const PreviousImage = document.querySelector('.Imageprécédente');
        const backgroundImgElement = document.querySelector('.backgroundimg');
        const backgroundImgElement1 = document.querySelector('.backgroundimg_1');
        const ScreenSite = document.querySelector('.Screen-Desktop');

        if (bannerImgRef.current) {
            bannerImgRef.current.classList.add('animation');
            PreviousImage.classList.add('animation-1');
            backgroundImgElement.classList.add('background-animation');
            backgroundImgElement1.classList.add('background-animation_1');
            ScreenSite.classList.add('animation');

            bannerImgRef.current.addEventListener('animationend', () => {
                bannerImgRef.current.classList.remove('animation');
                PreviousImage.classList.remove('animation-1');
                backgroundImgElement.classList.remove('background-animation');
                backgroundImgElement1.classList.remove('background-animation_1');
                ScreenSite.classList.remove('animation');
            });
        }
    }, [lastImage, PreviousImg]);

    return (
        <section className="SectionHome">
            <div className="Bannière">
                <img className="backgroundimg_1 " src={PreviousImg} alt="background" />
                <img className="backgroundimg " src={lastImage} alt="background" />
                <div className='background_menu'>
                    <img
                        className={`bannerimg PrevBanner Imageprécédente`}
                        src={PreviousImg}
                        alt="ImageBanner"
                    />
                    <img
                        ref={bannerImgRef}
                        className={`bannerimg CurrBanner`}
                        src={lastImage}
                        alt="ImageBanner"
                    />
                    {lastImage === Kasa && (
                        <ImageScreen lastImage={KasaSite} siteLink="https://brendanparisse.github.io/Kasa/" repoLink="https://github.com/BrendanParisse/Kasa" />
                    )}
                    {lastImage === Booki && (
                        <ImageScreen lastImage={BookiSite} siteLink="https://brendanparisse.github.io/Projet_3/" repoLink="https://github.com/BrendanParisse/Projet_3" />
                    )}
                    {lastImage === Ohmyfood && (
                        <ImageScreen lastImage={OhmyfoodSite} siteLink="https://brendanparisse.github.io/Projet_4/" repoLink="https://github.com/BrendanParisse/Projet_4" />
                    )}
                    {lastImage === Portfolio && (
                        <ImageScreen lastImage={PortfolioSite} siteLink="https://brendanparisse.github.io/Portfolio-architecte-sophie-bluel/" repoLink="https://github.com/BrendanParisse/Portfolio-architecte-sophie-bluel" />
                    )}
                    <div className='Projet_Contenu'>
                        <Description lastImage={lastImage} />
                        <Skills lastImage={lastImage} />
                    </div>
                </div>
                <div className="Photos" >
                    {images.map((src, index) => (
                        <div key={index} className={`image-container image-container-${index + 1}`}>
                            {index !== images.length - 1 && (
                                <img
                                    src={Zoom}
                                    alt="Zoom"
                                    onClick={() => handleClick(index)}
                                    className={`zoom-logo ${hoveredIndex === index ? 'show' : ''}`}
                                    onMouseEnter={(e) => {
                                        e.stopPropagation();
                                        handleMouseEnter(index);
                                    }}
                                />
                            )}
                            <img
                                src={src}
                                alt="ImageBanner"
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`photo photo-${index} ${hoveredIndex === index ? 'hovered ' : ''}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Accueil;