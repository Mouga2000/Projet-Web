import React from 'react';
import './Profil.css';
import { Link, NavLink } from "react-router-dom";

const Profil =()=> {
    return(
        <div>
            <nav>
            <NavLink to="/"> Profil </NavLink>
            <NavLink to="/"> Annuler</NavLink>
            <NavLink to="/"> Enregistrer</NavLink>
            </nav>
            <div className='profil'>
                <div className='avatar'/>
                <Link className="logout-btn" to='/deconnecter'>Se déconnecter</Link>

            </div>
            
        </div>
    )

}
export default Profil;