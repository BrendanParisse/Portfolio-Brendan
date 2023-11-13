// Carrousel.js
import React from 'react';

const Carousel = ({ Booki, Ohmyfood, Kasa, Portfolio, onCarouselClick, hoveredIndex, activeIndex, descriptionActive }) => {
    const links = {
        Booki: { site: 'https://brendanparisse.github.io/Projet_3/', repo: 'https://github.com/BrendanParisse/Projet_3' },
        Ohmyfood: { site: 'https://brendanparisse.github.io/Projet_4/', repo: 'https://github.com/BrendanParisse/Projet_4' },
        Kasa: { site: 'https://brendanparisse.github.io/Kasa/', repo: 'https://github.com/BrendanParisse/Kasa' },
        Portfolio: { site: 'https://brendanparisse.github.io/Portfolio-architecte-sophie-bluel/', repo: 'https://github.com/BrendanParisse/Portfolio-architecte-sophie-bluel' },
    };

    return (
        <ul className={`Carrousel ${descriptionActive ? 'carrousel-description-active' : ''}`}>
            {[
                { image: Booki, label: 'Booki' },
                { image: Ohmyfood, label: 'Ohmyfood' },
                { image: Kasa, label: 'Kasa' },
                { image: Portfolio, label: 'Portfolio' },
            ].map((item, index) => (
                <li
                    key={index}
                    className={`Carrousel_img Carrousel_img_1 
                          ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => onCarouselClick(item.image, index)}
                >
                    <img src={item.image} className={`Photo ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`} alt={`PhotoCarrousel${item.label}`} />
                    <div >
                        <p>{item.label}</p>
                        <a href={links[item.label].site} style={{ display: activeIndex === index ? 'block' : 'none' }} target="_blank" rel="noopener noreferrer">
                            Voir le site
                        </a>
                        <a href={links[item.label].repo} style={{ display: activeIndex === index ? 'block' : 'none' }} target="_blank" rel="noopener noreferrer">
                            Repo GitHub
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Carousel;