import React, { useState } from 'react';

function App() {
    const [responseMessage, setResponseMessage] = useState('');

    const createSchema = () => {
        fetch('http://localhost/Base_donne/test.php', { // Mettez à jour le chemin ici
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setResponseMessage(data.message || data.error);
        })
        .catch(error => {
            setResponseMessage("Erreur lors de la création du schéma.");
            console.error('Error:', error);
        });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Créer le Schéma 'Mouga'</h1>
            <button onClick={createSchema}>Créer le Schéma</button>
            <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                {responseMessage}
            </div>
        </div>
    );
}

export default App;