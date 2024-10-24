import React from 'react';
import './Profil.css';
import { NavLink } from "react-router-dom";

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
                <button className="logout-btn">Se déconnecter</button>

            </div>
            
        </div>
    )

}
export default Profil;