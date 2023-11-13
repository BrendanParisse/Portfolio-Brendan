import Header from './../Components/Header/Header.js';
import Footer from './../Components/Footer/Footer.js';
import { Outlet } from 'react-router-dom';



const Layout = ({ isHomePage, isGaleriePage }) => {
    return (
        <div className="ContainerLayout">
            <Header isHomePage={isHomePage} isGaleriePage={isGaleriePage} />
            <main>
                <Outlet />
            </main>
            <Footer isHomePage={isHomePage} />
        </div>
    );
};

export default Layout;