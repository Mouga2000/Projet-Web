import React, { useState } from 'react';
import './Menu.css'; 
import Sidebar from '../Components/Sidebar'; 

const Menu = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [state, setState] = useState('Disponible');
    const [description, setDescription] = useState('');

    // Fonction pour gérer l'affichage de l'image sélectionnée
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    // Fonction pour réinitialiser les champs
    const resetForm = () => {
        setImage(null);
        setName('');
        setQuantity(1);
        setState('Disponible');
        setDescription('');
    };

    // Fonction pour valider les données et les remettre à zéro
    const handleSubmit = () => {
        alert(`Plat: ${name}\nQuantité: ${quantity}\nÉtat: ${state}\nDescription: ${description}`);
        resetForm();
    };

    return (
        <div className="menu-container">
            <Sidebar />
            <div className="menu-content">
                <div className="menu-header">
                    <h2>EMPLOYÉ GESTION DU MENU</h2>
                </div>

                <div className="menu-info-header">
                    <h3>Informations du plat</h3>
                </div>

                <div className="menu-info">
                    <div className="menu-image-section">
                        <img src={image || 'path-to-placeholder-image'} alt="Plat" className="menu-image" />
                        <div className="menu-details">
                            <p>Nom: {name}</p>
                            <p>Quantité: {quantity}</p>
                            <p>État: {state}</p>
                            <p>Description: {description}</p>
                        </div>
                    </div>

                    <div className="menu-form-section">
                        <label htmlFor="menu-image">Choisir une image</label>
                        <input type="file" id="menu-image" className="menu-image-input" onChange={handleImageChange} />

                        <label htmlFor="menu-name">Nom du plat</label>
                        <input
                            type="text"
                            id="menu-name"
                            className="menu-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor="menu-quantity">Quantité</label>
                        <div className="quantity-counter">
                            <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>

                        <label htmlFor="menu-state">État</label>
                        <select
                            id="menu-state"
                            className="menu-input"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="Disponible">Disponible</option>
                            <option value="Épuisé">Épuisé</option>
                        </select>

                        <label htmlFor="menu-description">Description</label>
                        <textarea
                            id="menu-description"
                            className="menu-textarea"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className="menu-buttons">
                    <button className="menu-reject" onClick={resetForm}>rejeter</button>
                    <button className="menu-validate" onClick={handleSubmit}>valider</button>
                </div>

                <button className="menu-modify">MODIFIER LE PLAT DU JOUR</button>
            </div>
        </div>
    );
};

export default Menu;
