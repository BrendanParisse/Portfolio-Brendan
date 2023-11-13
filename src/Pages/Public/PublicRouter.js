import { Routes, Route, Navigate } from 'react-router-dom';

import { Accueil, Apropos, Galerie, Not404, Contact, } from './Index.js';

import Layout from '../../Layouts/Layouts.js';

const PublicRouter = () => {


    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/Accueil" />} />
                <Route path="/Accueil" element={<Accueil />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Galerie" element={<Galerie />} />
                <Route path="/Contact" element={<Contact />} />
            </Route>
            <Route path="*" element={<Not404 />} />
        </Routes>
    );
};

export default PublicRouter;