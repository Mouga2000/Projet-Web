import React, { useState } from 'react';
import image1 from '../../image/i1.png';
import image2 from '../../image/i2.png';
import image3 from '../../image/i3.png';
import image4 from '../../image/i4.png';
import image5 from '../../image/i5.png';
import image6 from '../../image/i6.png';

const Formulaire_etudiant = () => {
    const produit = ['Spaquettie', "Viande", "Glace", 'Oeuf', 'fruit', 'Riz'];
    const prix = [1500, 2000, 1500, 1500, 1000, 1500]; // Changer en nombres pour le calcul
    const description = [
        "Les spaquetti sont des pâtes longues et fines...",
        "La viande est une source importante de protéines...",
        "La glace est un dessert rafraîchissant...",
        "L'œuf est un ingrédient polyvalent...",
        "Les fruits sont des aliments naturels...", 
        "Sauce rouge"
    ];
    const images = [image1, image2, image3, image4, image5, image6];

    const [commandes, setCommandes] = useState([]);

    const handleAdd = (produit, prix) => {
        const nouvelleCommande = { produit, prix };
        setCommandes([...commandes, nouvelleCommande]);
    };

    const handleRemove = (index) => {
        const nouvellesCommandes = commandes.filter((_, i) => i !== index);
        setCommandes(nouvellesCommandes);
    };


    // Calculer le prix total des commandes
    const calculerPrixTotal = () => {
        return commandes.reduce((total, commande) => total + commande.prix, 0);
    };
    

    return (
        <div className='container-fluid' style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            {produit.map((produit, i) => (
                <form
                    onSubmit={(e) => { e.preventDefault(); }} // Empêche la soumission du formulaire
                    style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#cfbd97', width: '250px', height: '425px', marginTop: '30px' }}
                    key={i}
                >
                    <img
                        src={images[i]}
                        alt="Image de présentation"
                        style={{ width: '250px', height: '200px', borderRadius: '0 0 50% 50%' }}
                    />
                    <input
                        type="text"
                        value={produit}
                        readOnly
                        style={{ backgroundColor: '#cfbd97', color: '#000000', border: 'none', outline: 'none', textAlign: 'center', fontFamily: 'times new roman', fontSize: '20px', width: '100%' }}
                    />
                    <input
                        type="text"
                        value={'Prix : ' + prix[i] + ' CFA'}
                        readOnly
                        style={{ backgroundColor: '#cfbd97', color: '#000000', border: 'none', outline: 'none', textAlign: 'center', fontFamily: 'times new roman', width: '100%' }}
                    />
                    <textarea
                        value={description[i]}
                        readOnly
                        style={{ backgroundColor: '#cfbd97', color: '#000000', border: 'none', outline: 'none', textAlign: 'justify', fontFamily: 'times new roman', display: 'flex', width: '100%', height: '105px', overflow: 'hidden', textOverflow: 'ellipsis', padding: '10px' }}
                    />
                    <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <button
                            type="button"
                            onClick={() => handleAdd(produit, prix[i])}
                            style={{ backgroundColor: 'green', color: '#ffffff', border: 'none', outline: 'none', textAlign: 'justify', fontFamily: 'times new roman', position: 'relative', bottom: '0', right: '0', top: '10px' }}
                        >
                            Ajouter
                        </button>
                        <button type="submit" style={{ backgroundColor: '#000000', color: '#ffffff', border: 'none', outline: 'none', textAlign: 'justify', fontFamily: 'times new roman', borderRadius: '25% 0 0 25%', position: 'relative', bottom: '0', right: '0', top: '10px' }}>
                            En savoir plus
                        </button>
                    </div>
                </form>
            ))}
            <div style={{ marginTop: '30px', width: '100%', color: '#fff', background: '#000', padding: '10px' }}>
                <h3>Liste des Commandes</h3>
                <ul>
                    {commandes.map((commande, index) => (
                        <li key={index}>
                            {commande.produit} - {commande.prix} CFA
                            <button onClick={() => handleRemove(index)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}>Retirer</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <h4>Prix total : {calculerPrixTotal()} CFA</h4>
                </div>
                <hr></hr>
                <button>
                    Valider Commande
                </button>
            </div>
        </div>
    );
};

export default Formulaire_etudiant;