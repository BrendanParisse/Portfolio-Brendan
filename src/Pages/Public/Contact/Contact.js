import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Photo_Brendan from '../../../Assets/Images/BrendanParisse.avif';
import Reseaux from '../../../Assets/Images/Reseaux.svg';
import Phone from '../../../Assets/Images/Phone.svg'
import Mail from '../../../Assets/Images/Mail.svg';
import location from '../../../Assets/Images/location.svg';
import ContactForm from '../../../Components/Formulaire/Formulaire';

const Apropos = () => {
    const [currentImage] = useState(Photo_Brendan);
    const [applyAnimation] = useState(true);
    const [messageSent, setMessageSent] = useState(false);



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_racv4je', 'template_kv64teu', e.target)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                setMessageSent(true);
                e.target.reset();
            }, (error) => {
                console.log('FAILED...', error.text);
            });
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
                    <h2>BESOIN D'UN RENSEIGNEMENT ?</h2>
                    <div className='Block_Texte'>
                        <ContactForm sendEmail={sendEmail} />
                        {messageSent && <p>Message envoyé avec succés!</p>}
                    </div>
                    <div className='Block_Img'>
                        <img className='Photo_Brendan' src={Photo_Brendan} alt="PhotoBrendan" />
                        <div className='Infos_Contact'>
                            <ul>
                                <li>
                                    <img className='Phone' src={Phone} alt="Phone" />
                                    <div className='Reseaux-Flex'>
                                        <p className='infoT'>Numéro de téléphone</p>
                                        <p className='info'>06.28.80.22.14</p>
                                    </div>
                                </li>
                                <li>
                                    <img className='Mail' src={Mail} alt="Mail" />
                                    <div className='Reseaux-Flex'>
                                        <p className='infoT'>Adresse mail</p>
                                        <p className='info'>brendan.parisse@yahoo.fr</p>
                                    </div>
                                </li>
                                <li>
                                    <img className='Reseaux' src={Reseaux} alt="Mail" />
                                    <div className='Reseaux-Flex'>
                                        <p className='infoT'>Réseaux</p>
                                        <p className='info'>Facebook</p>
                                        <p className='info'>Instragram</p>
                                    </div>
                                </li>
                                <li>
                                    <img className='Location' src={location} alt="Mail" />
                                    <div className='Reseaux-Flex'>
                                        <p className='infoT'>Localisation</p>
                                        <p className='info'>Brest, 29200</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Apropos;