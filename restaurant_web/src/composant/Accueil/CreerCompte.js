import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';




const CreerCompte = () => {
    const [sex, setSex] = useState('');

    const handleChange = (event) => {
        setSex(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // Gestion de la soumission du formulaire
        const email = event.target.email.value;
        const motdepasse = event.target.motdepasse.value;
        const nom_prenom=event.target.nom_prenom.value;
        const numero=event.target.numero.value;
        const email_config=event.target.email_config.value;
        const mot_config=event.target.mot_config.value;
        const sex= event.target.sex.value;

        console.log('Email:', email);
        console.log('Mot de passe:', motdepasse);
        console.log('nom et prenom', nom_prenom);
        console.log('numero', numero );
        console.log('EmailRecup', email_config);
        console.log('motConfig', mot_config);
        console.log('sex', sex);

        // Ajoutez la logique de connexion
    };

    return (
        <div className="container " style={{fontFamily:'times new roman', height:'100vh'}}>
            <div className="row justify-content-center" style={{paddingTop:'30px'}}>
                <div className="col-md-6">
                    
                    <div className="card p-4" style={{background: 'linear-gradient(215deg,#000000, #cfbd97)'}}>
                        
                        <Link to="/acceuil" style={{color:'#ffffff'}}>Retour</Link>
                        
                        <h1> </h1>
                        <h3 className="text-center" style={{color:'#ffffff'}}> Veuillez entrer les informations necessaire à la création de votre compte utilisateur</h3>
                        
                        <form onSubmit={handleSubmit}>
                        <div className="form-group">
                                <label htmlFor="nom_prenom">Nom & Prenom</label>
                                <input
                                    type="nom_prenom"
                                    className="form-control"
                                    id="nom_prenom"
                                    name="nom_prenom"
                                    placeholder="Entrer votre nom et prenom"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="numero">Numéro téléphone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="numero"
                                    name="numero"
                                    placeholder="00- 0 00 00 00 00"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="email">Adresse Email</label>
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
                                <label htmlFor="EmailRecup">Adresse Email de récupération</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailRecup"
                                    name="EmailRecup"
                                    placeholder="Entrer votre Email de récupération"
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
                            <div className="form-group">
                                <label htmlFor="motConfig">Confirmer le mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="motConfig"
                                    name="motConfig"
                                    placeholder="Confirmer le mot de passe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="sex">Sexe</label>
                                <select
                                    id="sex"
                                    name="sex"
                                    className="form-control"
                                    value={sex}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Sélectionnez votre sexe</option>
                                    <option value="1">Masculin</option>
                                    <option value="2">Féminin</option>
                                </select>
                            </div>
                            <h1> </h1>
                            <button type="submit" className="btn btn-warning btn-block" style={{background:'linear-gradient(180deg,#000000, #cfbd97)', position:'relative', left:'40%'}}>Créer le compte</button>
                            <p className="text-center mt-3">
                                Vous avez un compte ? 
                                <Link to="/seconnecter">Se connecter</Link>
                            </p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreerCompte;
