import React from 'react';
import './Profil.css';
import { Link } from 'react-router-dom';

const Profil = () => {
    return (
        <div className="profil-container">
            <nav className="profil-nav">
                <Link to="/" className="Custom-link">Profil</Link>
                <Link to="/" className="Custom-link">Annuler</Link>
                <Link to="/" className="Custom-link">Enregistrer</Link>
            </nav>
            <div className='profil'>
                <div className='avatar'/>
                <button className="logout-btn">Se déconnecter</button>
            </div>
        </div>
    );
}

export default Profil;