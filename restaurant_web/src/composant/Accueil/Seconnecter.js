// import React from 'react';
// import { Form } from 'react-router-dom';
// import Imagecon from '../../image/i14.png';


// const Seconnecter = () => {
//     return (
        
//         <div class="container mt-5">
//             <div class="row justify-content-center">
//                 <div class="col-md-6">
//                     <div class="card p-4" style={{fontFamily:'times new roman'}}>
//                         <a >Retour</a>
//                         <h2 class="text-center">Se connecter</h2>
//                         <form>
//                             <div class="form-group">
//                                 <label for="email">Email</label>
//                                 <input type="email" class="form-control" id="email" placeholder="Entrer votre email" required/>
//                             </div>
//                             <div class="form-group">
//                                 <label for="motdepasse">Mot de passe</label>
//                                 <input type="password" class="form-control" id="motdepasse" placeholder="Entrer votre mot de passe" required/>
//                             </div>
//                             <p class="text-right">
//                                 <a href="#" class="text-muted">Mot de passe oublié ?</a>
//                             </p>
//                             <button type="submit" class="btn btn-warning btn-block" >Se connecter</button>
//                             <p class="text-center mt-3">
//                                 Vous n'avez pas de compte ? 
//                                 <a href="Creer_compte.html">Créer un nouveau compte</a>
//                             </p>
//                         </form>
//                         <img src={Imagecon} alt='Image de connexion'/>
//                     </div>
//                 </div>
//             </div>
//     </div>

        
//     );
// };

// export default Seconnecter;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagecon from '../../image/i14.png';



const SeConnecter = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Gestion de la soumission du formulaire
        const email = event.target.email.value;
        const motdepasse = event.target.motdepasse.value;
        console.log('Email:', email);
        console.log('Mot de passe:', motdepasse);
        // Ajoutez ici votre logique de connexion
    };

    return (
        <div className="container mt-5" style={{fontFamily:'times new roman'}}>
            <div className="row justify-content-center" >
                <div className="col-md-6">
                    
                    <div className="card p-4" style={{background: 'linear-gradient(1800deg, #cfbd97,#000000)'}}>
                        <a href="#" style={{color:'#ffffff'}}>Retour</a>
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
                                <a href="Creer_compte.html">Créer un nouveau compte</a>
                            </p>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeConnecter;
