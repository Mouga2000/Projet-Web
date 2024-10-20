import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import images from '../../image/dd.png';
import images2 from '../../image/logos.jpg';
import {Link} from 'react-router-dom';



const Barre = () => {
    const nom_admin='Nehemie Mouga'
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{background:'#000000', color:"#cfbd97", width:"250px", height:'100%', justifyContent:'center',textAlign:'center', fontFamily:'times new roman'}} >

        <div style={{paddingTop:'10px'}}>
                <img src={images} alt='photo administrateur' style={{height:'150px', width:'150px', borderRadius:'50% 50% 50% 50%'}}></img>
                <h4>{nom_admin}</h4>
        </div>

      <nav
        className='navbar' 
        style={{ height: '100%', width:'250px', justifyContent:'center', color:"#cfbd97", background:"#000000" }}
      >
        

        <ul className="navbar-nav d-flex flex-column justify-content-between" style={{height:'70%'}}>
          <li className="nav-item">
            
            <Link className='nav-link' style={{color:"#cfbd97"}} to="/accueiladmin">
              ACCUEIL
            </Link>
              
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gestionEmploie" style={{color:"#cfbd97"}}>
              GESTION DES EMPLOIS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gestionMenu" style={{color:"#cfbd97"}}>
              GESTION DE MENU
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/stats" style={{color:"#cfbd97"}}>
              STATISTIQUES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" style={{color:"#cfbd97"}}>
              PROMO & JEUX
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" style={{color:"#cfbd97"}}>
              GESTION DES RECLAMATIONS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#" style={{color:"#cfbd97"}}>
              PARAMETRES
            </Link>
          </li>
         
        </ul>
       </nav>
       
       <Link className="nav-link" to="#" style={{color:"#cfbd97"}}>
              DECONNECTER
      </Link>
    
      
        <img src={images2} alt='photo restaurant' style={{height:'175px', width:'175px', borderRadius:'50% 50% 50% 50%'}}></img>
                
       

   </div>
  );
};

export default Barre;