import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagecon from '../../image/i14.png';
import CreerCompte from './CreerCompte';

import {Link, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const SeConnecter = () => {

        const a=useNavigate();
        const base_donne='Etudiant';



    const handleSubmit = (event) => {
        event.preventDefault();
        // Gestion de la soumission du formulaire
        const email = event.target.email.value;
        const motdepasse = event.target.motdepasse.value;
        console.log('Email:', email);
        console.log('Mot de passe:', motdepasse);
        
        
        // Ajoutez ici votre logique de connexion
        

        if (base_donne === 'Etudiant') {
            a('/accueil étudiant');
        }
        
        if (base_donne === 'Gerant') {
            a('/Accueil gerant');
        }

        if (base_donne === 'Employé') {
            a('/');
        }

        if (base_donne === 'Administrateur') {
            a('/accueiladmin');
        }


    };
                    

                    

    return (
       
        <div className="container " style={{fontFamily:'times new roman', height:'100vh', background: 'linear-gradient(1800deg, #cfbd97,#000000)'}}>
            <div className="row justify-content-center" style={{paddingTop:'75px'}}>
                <div className="col-md-6">
                    
                    <div className="card p-4" style={{background: 'linear-gradient(1800deg, #cfbd97,#000000)'}}>
                        
                        <Link to="/acceuil" style={{color:'#ffffff'}}>Retour</Link>
                        
                        <h2 className="text-center" 
                        style={{color:'#ffffff',
                            backgroundImage: `url(${Imagecon})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100px',
                            textAlign: 'center',                           
                            alignItems: 'center'}}>
                                Se connecter
                                </h2>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Entrer votre email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="motdepasse">Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="motdepasse"
                                    name="motdepasse"
                                    placeholder="Entrer votre mot de passe"
                                    required
                                />
                            </div>
                            <p className="text-right">
                                <a href="#" className="text-muted">Mot de passe oublié ?</a>
                            </p>
                            <button type="submit" className="btn btn-warning btn-block" style={{background:'#ffffff',  position:'relative', left:'40%'}}>Se connecter</button>
                            <p className="text-center mt-3">
                                Vous n'avez pas de compte ? 
                                <Link to="/creercompte">Créer un nouveau compte</Link>
                            </p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>

        
        
    );
};

export default SeConnecter;
