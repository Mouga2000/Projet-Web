import React from 'react';
import './reclamation.css';
import Pied_page_E from '../Pied_page_E';
import Entete_etudiants from '../Entete_etudiant';


const Reclamation= () => {
    return (
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )', 
            height: '100vh',display: 'flex', flexDirection: 'column'}}>
           
            <Entete_etudiants/> 

            <div className='container-fluid' style={{color: "#000000", background: 'linear-gradient(180deg,#cfbd97, #000000 )', fontFamily: 'Times New Roman',
                flex: 1, display: 'flex', flexDirection: 'column',  justifyContent: 'center', width:'100%'}}>

            <main className='reclamation'>
                <div className='info-panier'>
                <div className='info-panier'>
                    <label htmlFor='input-panier'>Information du panier :</label>
                    <textarea id='input-panier' className='input-panier' placeholder='Entrez les informations du panier ici...'></textarea>
                </div>

                {/* Zone de texte pour 'Réclamations' */}
                <div className='info-reclamation'>
                    <label htmlFor='input-reclamation'>Réclamations :</label>
                    <textarea id='input-reclamation' className='input-reclamation' placeholder='Entrez vos réclamations ici...'></textarea>
                </div>
                    
                </div>
            </main>

            </div>

            <div style={{ marginTop: 'auto' }}>
                    <Pied_page_E/>
            </div>

        </div>
    );
};

export default Reclamation;