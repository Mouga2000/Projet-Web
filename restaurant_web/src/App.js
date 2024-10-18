/*import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'; // Importation de Main au lieu de App
import './index.css';


function App() {/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  /*
  ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
}

export default App;
*/


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './composant/Accueil/nos_service';
import Seconnecter from './composant/Accueil/Seconnecter';
import CreerCompte from './composant/Accueil/CreerCompte';
import Apropos from './composant/Accueil/Apropos';
import Accueil from './composant/Accueil/Accueil';
import Nav from './composant/entete';




const App = () => {
    return (
      <Router>
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )'}}>
           
              {/*<Nav />*/}
              <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/acceuil" element={<Accueil/>} />
                <Route path="/service" element={<Services />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/seconnecter" element={<Seconnecter />} />
                <Route path="/creercompte" element={<CreerCompte />} /> 
                        
              </Routes>         
              {/* <Sectionier/>
              <Formulaire/>
              <Pied_page/> */}
              
           
           
        </div>
      </Router>
    );
};

export default App;
