import React from 'react';
import logo from '../../image/logos.jpg';
import { Link } from 'react-router-dom';

const Pied_page_E = () => {
    return (
        <footer 
            style={{ 
                background: '#cfbd97',
                height: '100px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            <div className="container-fluid">
                <ul className="navbar-nav mx-auto" 
                    style={{ 
                        width: '90%', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        fontFamily: 'Times New Roman', 
                        color: '#ffffff'
                    }}
                >
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: '#ffffff' }} to="#">Jeux & Promos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: '#ffffff' }} to='/accueil etudiant'>Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: '#ffffff' }} to="#">
                            <img src={logo} alt='Logo' style={{ 
                                width: '50px',      
                                height: '50px', 
                                borderRadius: '50%' 
                            }} />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: '#ffffff' }} to='/service etudiant'>Réclamation</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-link' style={{ color: '#ffffff' }} to="/A propos etudiant">Profil</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Pied_page_E;