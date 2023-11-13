import React, { useState } from 'react';
import Photo_Brendan from '../../../Assets/Images/BrendanParisse.avif';
import Reseaux from '../../../Assets/Images/Reseaux.svg';
import Phone from '../../../Assets/Images/Phone.svg'
import Mail from '../../../Assets/Images/Mail.svg'

const Apropos = () => {
    const [currentImage] = useState(Photo_Brendan);
    const [applyAnimation] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleImageClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className="SectionContact">
            <img
                className={`backgroundimg background_current ${applyAnimation ? 'background-animation' : ''}`}
                src={currentImage}
                alt="background"
            />
            <div className='Container_Contact'>
                <div className='Contact'>
                    <div className='Block_Img'>
                        <div className='Back_Photo'></div>
                        <img className='Photo_Theo' src={Photo_Brendan} alt="PhotoTheo" />
                    </div>
                    <div className='Block_Texte'>
                        <h2>BESOIN D'UN RENSEIGNEMENT ?</h2>
                        <div className='Infos_Contact'>
                            <ul>
                                <li>
                                    <img onClick={() => handleImageClick(0)} src={Phone} alt="Phone" />
                                    <p className={activeIndex === 0 ? 'active' : ''}>06.28.80.22.14</p>
                                </li>
                                <li>
                                    <img onClick={() => handleImageClick(1)} src={Mail} alt="Mail" />
                                    <p className={activeIndex === 1 ? 'active' : ''}>brendan.parisse@yahoo.fr</p>
                                </li>
                                <li>
                                    <img onClick={() => handleImageClick(2)} src={Reseaux} alt="Mail" />
                                    <div className='Reseaux-Flex'>
                                        <p className={activeIndex === 2 ? 'active' : ''}>Facebook</p>
                                        <p className={activeIndex === 2 ? 'active' : ''}>Instragram</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='Formulaire'>
                            <form action="#" method="post">
                                <div>
                                    <input className='Nom' placeholder='Nom' type="text" name="name" id="name" />
                                    <input className='Email' placeholder='Mail' type="email" name="email" id="email" />
                                    <input className='Sujet' placeholder='Sujet' type="text" name="sujet" id="sujet" />
                                </div>
                                <textarea name="message" placeholder='Message' id="message" cols="30" rows="10"></textarea>
                            </form>
                            <input className='btn' type="submit" value="Envoyer" id="LoginButton" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Apropos;