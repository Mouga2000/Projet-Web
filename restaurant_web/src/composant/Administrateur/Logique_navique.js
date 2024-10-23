import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from './BarreNaviguer';
import Entete from './Entete';
import FonctionAdmin from './FonctionAdmin';
import PiedAdmin from './Pied_Admin';
import GestionEmploie from './Gestion_des_emploies/GestionEmploie';
import GestionMenu from './Gestion_des_Menu/GestionMenu';
import AccueilAdmin from './Accueil_admin';
import Statistique from './Stat/Statisques';
import PageCreer from './Gestion_des_emploies/PageCreer';
import CreerMenu from './Gestion_des_Menu/CreerMenu';
import Accueil_Jeu from './Jeux&Promo/Accueil_Jeu';
import Creer_jeu from './Jeux&Promo/Creer_jeux';
import Creer_promo from './Jeux&Promo/Creer_promo';


const Logique = () => {
    
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<AccueilAdmin/>}/> 
                <Route path="/accueiladmin" element={<AccueilAdmin/>}/>
                <Route path="/gestionEmploie" element={<GestionEmploie/>} />
                <Route path="/gestionMenu" element={<GestionMenu/>} />
                <Route path="/stats" element={<Statistique/>} />
                <Route path='/page_creer' element={<PageCreer/>}/>
                <Route path='/detail_menu' element={<CreerMenu/>}/>
                <Route path='/accueil_jeu' element={<Accueil_Jeu/>}/>
                <Route path='/creer jeu' element={<Creer_jeu/>}/>
                <Route path='/creer promo' element={<Creer_promo/>}/>

            </Routes>
        
        </Router>
           
    );
};

export default Logique;