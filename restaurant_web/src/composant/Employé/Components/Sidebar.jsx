// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import './style.css';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="avatar" />
        <h3>Nom employé</h3>
      </div>
      
      <ul className="menu">
        <li>
          <Link to="/accueil employé" className='custom-link'>Accueil</Link>
        </li>
       <li>
          <Link to="/gestion-commandes" className='custom-link'>Gestion des Commandes</Link>
        </li>
        <li>
          <Link to="/gestion-menu" className='custom-link'>Gestion du Menu</Link>
        </li>
        <li>
          <Link to="/statistiques"className='custom-link'>Statistiques</Link>
        </li>
        <li>
          <Link to="/gestion-reclamations"className='custom-link'>Gestion des Réclamations</Link>
        </li>

      </ul>
      <div>
        <div className='logo'/>
        <Link className="logout" to='/deconnecter' >Se déconnecter</Link>
      </div>
    </div>

    
  );
};

export default Sidebar;
