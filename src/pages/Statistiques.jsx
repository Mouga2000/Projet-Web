import React, { useState } from 'react';
import './Statistiques.css';
import Sidebar from '../Components/Sidebar';  // Importation de la barre latérale


const Statistiques = () => {
    const [formData, setFormData] = useState({
        section: '',
        annee: '',
        quantite: '',
        gain: '',
        total: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const statisticsTypes = ['Statistiques de commande', 'Statistiques de vente', 'Statistiques de jeux & promo', 'Statistiques parrainage & fidélité'];

    const [selectedStatistic, setSelectedStatistic] = useState(statisticsTypes[0]);

    const handleStatisticChange = (stat) => {
        setSelectedStatistic(stat);
        // Logique pour changer le graphique en fonction du type de statistique sélectionné
    };

    return (
        <div className="statistiques-container">
            
            <div><Sidebar /></div>
            <div className="statistiques-content">
                <h2 className="statistiques-title">STATISTIQUES-EMPLOYÉS</h2>

                {/* Tableau des types de statistiques */}
                <div className="statistiques-types">
                    {statisticsTypes.map((stat, index) => (
                        <div 
                            key={index} 
                            className={`stat-type ${selectedStatistic === stat ? 'active' : ''}`}
                            onClick={() => handleStatisticChange(stat)}
                        >
                            {stat}
                        </div>
                    ))}
                </div>

                {/* Section du graphique */}
                <div className="statistiques-chart-section">
                    <h3 className="chart-title">{selectedStatistic}</h3>
                    <div className="chart">
                        <svg height="200" width="300">
                            <text x="10" y="20" transform="rotate(90, 20, 35)" fill="black">Quantité</text>
                            <line x1="50" y1="180" x2="50" y2="20" stroke="black" />
                            <line x1="50" y1="180" x2="270" y2="180" stroke="black" />
                            <text x="150" y="195" fill="black">Date</text>
                            <polyline
                                points="60,150 120,100 180,120 240,80"
                                style={{ fill: 'none', stroke: 'black', strokeWidth: 2 }}
                            />
                        </svg>
                    </div>
                </div>

                {/* Formulaire d'entrée des données */}
                <div className="statistiques-details">
                    <div className="input-group">
                        <label>Section</label>
                        <input 
                            type="text" 
                            name="section" 
                            value={formData.section} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label>Année</label>
                        <input 
                            type="text" 
                            name="annee" 
                            value={formData.annee} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label>Quantité</label>
                        <input 
                            type="text" 
                            name="quantite" 
                            value={formData.quantite} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label>Gains</label>
                        <input 
                            type="text" 
                            name="gain" 
                            value={formData.gain} 
                            onChange={handleInputChange} 
                        />
                    </div>

                    <div className="input-group">
                        <label>Total</label>
                        <input 
                            type="text" 
                            name="total" 
                            value={formData.total} 
                            onChange={handleInputChange} 
                        />
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Statistiques;
