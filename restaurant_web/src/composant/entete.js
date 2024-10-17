import React from 'react';
import Services from './Accueil/nos_service';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';


const Nav = () => {
    return (
        <Router>
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
                        <ul className="navbar-nav mx-auto" style={{ width: '100%', justifyContent: 'space-between', width:'90%', fontFamily: 'times new roman' }}> {/* Ajoutez mx-auto pour centrer */}
                            <li className="nav-item">
                                <a className='nav-link' style={{color: '#ffffff' }} href="#">Jeux & Promos</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' style={{color: '#ffffff' }} href="#">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' style={{color: '#ffffff' }} to='./Accueil/nos_service'>Nos Services</Link>
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

            <Routes>
                <Route path='/Accueil/nos_service' Component={<Services />} />
            </Routes>
            
        </Router>
        
    );
};

export default Nav;