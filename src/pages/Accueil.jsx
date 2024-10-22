import React from 'react';
import './Dashboard.css';
import Sidebar from '../Components/Sidebar';
import gestion from '../assets/images/gestion des commandes.png'
import menu from '../assets/images/Gestion de menu.png'
import statistiques from '../assets/images/Statisstique.png'
import réclamations from '../assets/images/Gestion des Reclamation.png'
import { Link } from 'react-router-dom';
import '../Components/style.css';

const Accueil = () => {
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
                <h2>
                    <Link to="/gestion-commandes" className='custom-link2'>GESTION DES COMMANDES</Link>
                </h2>
            </div>
            <div className="section">
                <img src={menu} alt="Gestion du Menu" />
                <h2>
                    <Link to="/gestion-menu"className='custom-link2'>GESTION DU MENU</Link>
                </h2>
            </div>
            <div className="section">
                <img src={statistiques} alt="Statistiques" />
                <h2>
                    <Link to= "/Statistiques"className='custom-link2'> STATISTIQUES </Link>
                </h2>
            </div>
            <div className="section">
                <img src={réclamations} alt="Gestion des Réclamations" />
                <h2>
                    <Link to= "/gestion-reclamations"className='custom-link2'>GESTION DES RECLAMATIONS</Link>
                </h2>
            </div>

            </div>
        </div>

        </div>
    </div>
  );
};

export default Accueil;
