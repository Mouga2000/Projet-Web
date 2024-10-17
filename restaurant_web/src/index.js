import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Services from './composant/Accueil/nos_service';
import Apropos from './composant/Accueil/Apropos';
import Seconnecter from './composant/Accueil/Seconnecter';
import CreerCompte from './composant/Accueil/CreerCompte';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    {/* <CreerCompte/> */}
    {/* <Seconnecter/> */}
    {/* <Apropos/> */}
    {/* <Services/> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
