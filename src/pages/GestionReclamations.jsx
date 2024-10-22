import React from 'react';
import './Reclamations.css';  // Importation du fichier CSS
import Sidebar from '../Components/Sidebar';  // Importation de votre composant Sidebar

const GestionReclamations = () => {
  // Simulation des données de réclamations (vous pouvez les récupérer via une API)
  const reclamations = [
    { id: 1, etudiant: "Etudiant A", reclamation: "Problème avec la commande" },
    { id: 2, etudiant: "Etudiant B", reclamation: "Erreur sur la facture" },
    { id: 3, etudiant: "Etudiant C", reclamation: "Retard de livraison" },
    // Ajoutez d'autres réclamations ici
  ];

  return (
    <div className="page-container"> {/* Nouveau conteneur pour la page */}
      <div className="reclamations-container">
        <Sidebar /> {/* Barre latérale */}
        <div className="reclamations-content">
          <h1>GESTION DES RECLAMMATIONNS</h1>
          <div className="reclamations-main">
            <div className="reclamations-list">
              <h2>Toutes les réclamations</h2>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom de l'étudiant</th>
                    <th>Réclamation</th>
                  </tr>
                </thead>
                <tbody>
                  {reclamations.map((reclamation) => (
                    <tr key={reclamation.id}>
                      <td>{reclamation.id}</td>
                      <td>{reclamation.etudiant}</td>
                      <td>{reclamation.reclamation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="reclamations-message">
              <h2>Nom de l’étudiant</h2>
              <p>Contenu de la réclamation...</p>
              <div className="reclamations-reponse">
                <textarea placeholder="Réponse de l'employé..." />
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default GestionReclamations;
