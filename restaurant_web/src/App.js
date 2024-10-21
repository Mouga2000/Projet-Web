import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './composant/Accueil/nos_service';
import Seconnecter from './composant/Accueil/Seconnecter';
import CreerCompte from './composant/Accueil/CreerCompte';
import Apropos from './composant/Accueil/Apropos';
import Accueil from './composant/Accueil/Accueil';
import Nav from './composant/entete';




const App = () => {
    return (
      <Router>
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )'}}>
           
              {/*<Nav />*/}
              <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/acceuil" element={<Accueil/>} />
                <Route path="/service" element={<Services />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/seconnecter" element={<Seconnecter />} />
                <Route path="/creercompte" element={<CreerCompte />} /> 
                {/* <Route path="/" element={<AccueilAdmin/>} /> 
                <Route path="/gestionEmploie" element={<GestionEmploie/>} /> */}
                           
                        
              </Routes>         

                           
           
           
        </div>
      </Router>
    );
};

export default App;

