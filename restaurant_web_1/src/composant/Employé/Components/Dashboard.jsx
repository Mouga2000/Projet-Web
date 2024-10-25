import React from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import gestion from '../assets/images/gestion des commandes.png'
import menu from '../assets/images/Gestion de menu.png'
import statistiques from '../assets/images/Statisstique.png'
import réclamations from '../assets/images/Gestion des Reclamation.png'

const Dashboard = () => {
  return (
    <div className='all'>
        <Sidebar />
      <div className="dashboard">

        <div className="main-content">
            <div className='Ptitle'>
            <h1>PAGE D'ACCUEIL-EMPLOYÉS</h1>
            </div>
            <div className="sections">
            <div className="section">
                <img src={gestion} alt="Gestion des Commandes" />
                <h2>GESTION DES COMMANDES</h2>
            </div>
            <div className="section">
                <img src={menu} alt="Gestion du Menu" />
                <h2>GESTION DU MENU</h2>
            </div>
            <div className="section">
                <img src={statistiques} alt="Statistiques" />
                <h2>STATISTIQUES</h2>
            </div>
            <div className="section">
                <img src={réclamations} alt="Gestion des Réclamations" />
                <h2>GESTION DES RECLAMMATIONS</h2>
            </div>
            </div>
        </div>
        {/* Footer */}
        <footer className="footer">
            <p>© 2024 Restaurant Management System. All rights reserved.</p>
        </footer>
        </div>
    </div>
  );
};

export default Dashboard;
