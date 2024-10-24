import React from "react";
import { Link } from "react-router-dom";
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';

const Profil_etudiant = () => {

    return (

        <div>
            <nav><Link to={'/'}>Retour</Link></nav>
            <div style={{display:'flex'}}>
                <div style={{display:'flex', flexDirection:'column', width:300}}>
                    <img src="run-react\src\component\Rectangle-75.png" alt="Image de profil" />
                    <button>SE DECONNECTER</button>
                </div>
                <div style={{flex:1}}>
                    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                        <h3>RESTAURANT</h3>
                        <img src="run-react\src\component\Zeduc.png" alt="logo de Zeduc" />
                        <h3>ZEDUC-SP@CE</h3>
                    </div>
                    <div className="container">
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <h4>Profil</h4>"Attention ! vous pouvez modifier directement vos informations"
                            <div>
                                <button>Annuler</button>
                                <button>Enregistrer</button>
                            </div>
                        </div>
                        <hr color="white" />
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Nom</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Prenom</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Mot de passe</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Mettre le footer de Etudiant */}
        </div>

    );

}

export default Profil_etudiant