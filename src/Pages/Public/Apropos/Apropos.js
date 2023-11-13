import React, { useState } from 'react';
import Photo_Brendan from '../../../Assets/Images/BRENDAN.avif';


const Apropos = () => {
    const [currentImage] = useState(Photo_Brendan);
    const [applyAnimation] = useState(true);

    return (
        <section className="SectionApropos">
            <img
                className={`backgroundimg background_current ${applyAnimation ? 'background-animation' : ''}`}
                src={currentImage}
                alt="background"
            />
            <div className='Container_Apropos'>
                <div className='Apropos'>
                    <div className='Block_Texte'>
                        <h2>ME CONCERNANT..</h2>
                        <p>Enthousiaste développeur web front-end de 29 ans, je suis passionné par la création d'expériences utilisateur exceptionnelles. Mon parcours atypique a débuté avec une licence en AES à l'UBO de Brest, suivi d'une expérience enrichissante dans les ressources humaines à Paris. Confronté à des défis de santé, j'ai cherché une activité flexible et ai trouvé ma voie dans le développement web, optant pour la formation d'intégrateur web chez OpenClassroom.</p>
                        <p>Explorez mon portfolio pour découvrir mes réalisations et plongez dans un monde où le code se marie harmonieusement avec le design, offrant des solutions web innovantes et engageantes.</p>
                    </div>
                    <div className='Block_Img'>
                        <img className='Photo_Brendan' src={Photo_Brendan} alt="PhotoBrendan" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Apropos;






