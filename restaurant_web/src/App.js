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
/*

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'; // Importation de Main au lieu de App
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);

*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './composant/Header';
import Nav from './composant/entete';
import Section from './composant/Section';
import Aside from './composant/Aside';
import Footer from './composant/Footer';
import Sectionier from './composant/Section_page';
import Formulaire from './composant/Formulaire';
import Pied_page from './composant/pied_page';
import Services from './composant/Accueil/nos_service';
import Seconnecter from './composant/Accueil/Seconnecter';

const App = () => {
    return (
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )'}}>
           
              <Nav />              
              <Sectionier/>
              <Formulaire/>
              <Pied_page/>
              
           
           
        </div>
    );
};

export default App;

