import { NavLink } from 'react-router-dom';
import Logo from './../../Assets/Images/LogoNoir.png'
import FbNoir from './../../Assets/Images/Facebook_Black.png';
import InstaNoir from './../../Assets/Images/Insta_Black.png';

const Header = () => {
    return (
        <header>
            <NavLink to="/Accueil" className="elmenu"><img src={Logo} alt='Logo'></img></NavLink>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Accueil" className="elmenu">ACCUEIL</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Apropos" className="elmenu">A PROPOS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Galerie" className="elmenu">GALERIE</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className="elmenu">CONTACT</NavLink>
                    </li>

                </ul>
            </nav>
            <div className='Reseaux'>
                <NavLink to="/Contact" className="elreseaux"><img src={InstaNoir} alt="LogoInsta" /></NavLink>
                <NavLink to="/Contact" className="elreseaux"><img src={FbNoir} alt="LogoFb" /></NavLink>
            </div>
        </header >
    );
};
export default Header;


