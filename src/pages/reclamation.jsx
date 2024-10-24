import React from 'react';
import './reclamation.css';

const Reclamation= () => {
    return (
        <div>
            <div className='reclamation'>
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
                <div>

                </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Reclamation;