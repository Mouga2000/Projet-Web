import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Side_bar = () => {
    <Router>
        <div className="container">
            <header>
                <img src="../public/Rectangle 75.png" alt="Logo de connexion" srcset="" />
                <p>Nom du Gerant</p>
            </header>
            <main>
                <ul>
                    <li><a href="" className="nav-link"> Acceuil</a></li>
                    <li><a href="" className="nav-link"> Gestion des employes</a></li>
                    <li><a href="" className="nav-link"> Statistique</a></li>
                    <li><a href="" className="nav-link"> Gestion des reclamations</a></li>
                </ul>
            </main>
            <footer>
                <img src="../public/Zeduc.png" alt="Logo de Zeduc-Space" srcset="" />
            </footer>
        </div>
    </Router>
}

export default Side_bar;