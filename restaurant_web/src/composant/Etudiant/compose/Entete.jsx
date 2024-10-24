import React from "react";
import './Entete.css';
//import { NavLink } from "react-router-dom";
import logo from '../assets/image/logo.png';

const Entete = () => {
  return (

    <header className="Entete">
      {/* Titre du restaurant */}
        <h3>RESTAURANT MIAM MIAM</h3>
        <img src={logo} alt="Logo" className="logo" />
        <h3> ZEDUC-SP@CE</h3>
    </header>

  );
};

export default Entete;