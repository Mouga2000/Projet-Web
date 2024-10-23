import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Entete_g = () =>{

    <Router>
        <nav className="navbar"  
        style={{ 
            
            background: 'linear-gradient(90deg, #000000, #cfbd97)', // Dégradé de bleu à vert
            alignItems: 'center',
            
        }}>
            Bienvenue dans l'espace Accueil du Gerant
        </nav>
    </Router>

}

export default Entete_g;