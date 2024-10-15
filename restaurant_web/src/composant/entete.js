import React from 'react';
import Services from './Nos_service/nos_service';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" 
        style={{ 
            //margintop: '60px',
            background: 'linear-gradient(90deg, #000000, #cfbd97)', // Dégradé de bleu à vert
            
        }}
        >
            <div className="container-fluid">
                
                <button className="navbar-toggler btn btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    style={{backgroundColor:'#cfbd97' }}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav mx-auto" style={{ width: '100%', justifyContent: 'space-between', width:'90%' }}> {/* Ajoutez mx-auto pour centrer */}
                        <li className="nav-item">
                            <a className='nav-link' style={{color: '#ffffff' }} href="#">Jeux & Promos</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' style={{color: '#ffffff' }} href="#">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' style={{color: '#ffffff' }} href='#'>Nos Services</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' style={{color: '#ffffff' }} href="#">À propos</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' style={{color: '#ffffff' }} href="#">Se connecter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;