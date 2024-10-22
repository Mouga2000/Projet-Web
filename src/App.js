import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import GestionCommandes from './pages/GestionCommandes';
import GestionMenu from './pages/GestionMenu';
import Statistiques from './pages/Statistiques';
import GestionReclamations from './pages/GestionReclamations';


function App() {
  return (
    <Router>
      <div className="dashboard">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/gestion-commandes" element={<GestionCommandes />} />
            <Route path="/gestion-menu" element={<GestionMenu />} />
            <Route path="/statistiques" element={<Statistiques />} />
            <Route path="/gestion-reclamations" element={<GestionReclamations />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
