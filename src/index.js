import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profil from './pages/Profil';
import Jeux from './pages/Jeux';
import Entete from './Components/Entete';
import Promotion from './pages/Promotion'
import Cookies from './pages/Cookies';
import Reclamation from './pages/reclamation';
import Footer from './Components/TempFooter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router className="App">
      <Entete />
      <Routes>
        {/*Page Components*/}
        
        <Route path='/profil' element={<Profil />} />
        <Route path='/cookies' element={<Cookies />} />
        <Route path='/jeux' element={<Jeux />} />
        <Route path='/reclamation' element={<Reclamation />} />
        <Route path='/Promotion' element={<Promotion />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
