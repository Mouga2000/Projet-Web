import React from 'react';
import './Footer.css';
import logo2 from '../assets/image/logo 2.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div style={{backgroundColor:'#CFBD97',
            padding:'10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
            

            <div className='button-group'>

                <div className='left-buttons'>
                    <Link to="/Jeux" className='custom-button'>JEU</Link>
                    <Link to="/Promotion" className='custom-button'>PROMO</Link>
                    <Link to="/" className='custom-button'>MENU</Link>
                </div>

                <div className='logo-central'>
                    <img src= {logo2} alt="Logo" className="logo-img" />
                    
                
                </div>

                <div className='right-buttons'>
                    <Link to="/Cookies" className='custom-button'>INFO COOKIES</Link>
                    <Link to="/reclamation" className='custom-button'>RECLAMATION</Link>
                    <Link to="/Profil" className='custom-button'>PROFIL</Link>

                </div>
                                                    
            </div>
            
        </div>
    )
}

export default Footer;