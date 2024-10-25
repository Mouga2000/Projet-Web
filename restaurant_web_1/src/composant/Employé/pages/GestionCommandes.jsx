import React, { useState } from 'react';
import './Commandes.css';
import Sidebar from '../Components/Sidebar'; // Assure-toi que le composant Sidebar existe

const GestionCommandes = () => {
  const [orders, setOrders] = useState([
    { id: 1, status: 'pending' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'pending' },
    { id: 4, status: 'pending' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="gestion-commandes">
      <Sidebar /> {/* Sidebar importée */}
      <div className="content">
        <header className="header-title">
          <h1>GESTION DES COMMANDES</h1>
        </header>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Commandes</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>Commande {order.id}</td>
                  <td>
                    <button
                      className={`action-btn ${order.status === 'approved' ? 'green' : ''}`}
                      onClick={() => handleStatusChange(order.id, 'approved')}
                    >
                      ✓
                    </button>
                    <button
                      className={`action-btn ${order.status === 'rejected' ? 'red' : ''}`}
                      onClick={() => handleStatusChange(order.id, 'rejected')}
                    >
                      ✗
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GestionCommandes;
