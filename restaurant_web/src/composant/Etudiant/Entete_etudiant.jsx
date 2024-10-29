import React from 'react';
import {Link} from 'react-router-dom';
import im from '../../image/iconne.png';


const Entete_etudiants = () => {

    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" 
            style={{ 
               
                background: 'linear-gradient(90deg, #000000, #cfbd97)', 
                
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
                                <Link className='nav-link' style={{color: '#ffffff' }} to="/jeux">Jeux & Promos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' style={{color: '#ffffff' }} to='/accueil étudiant'>Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' style={{color: '#ffffff' }} to='/service etudiant'>Nos Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' style={{color: '#ffffff' }} to="/A propos etudiant">À propos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' style={{color: '#ffffff' }} to='/deconnecter'>
                                    <img src={im} alt='image connection' style={{width:'60px', height:'40px'}}/>
                                </Link>
                            </li>  
                          
                        </ul>
                    </div>
                </div>
            </nav>

            
    );
};

export default Entete_etudiants;