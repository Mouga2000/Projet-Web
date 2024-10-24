// import logo from './logo.svg';
import './App.css';
import Gerant_com from './component/gerant-commande';
import Gerant_employe from './component/gerant-employe';
import Gerant_reclamation from './component/gerant-reclamation';
import Gerant_stat from './component/gerant-stat';
import Gerant_accueil from './component/Gerant_accueil';

import { BrowserRouter as Router, Route, Switch, Link, Routes, RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import PageCreer from './component/pageCreer';
import Reponse_reclamation from './component/Reponse_reclamation';
import Statistique from './component/gerant-satistique';
import Profil_etudiant from './component/Etudiant/profil';

const routter = createBrowserRouter([
  {
    path:'/',
    element:
    // <Profil_etudiant/>
    <Gerant_accueil/> 
    //reaffiche la page principale du gerant
  },
  {
    path:'/gerant_commande',
    element:<Gerant_com></Gerant_com>
  },
  {
    path:'/gerant_reclamation',
    element:<Gerant_reclamation></Gerant_reclamation>
  },
  {
    path:'/gerant_employe',
    element:<Gerant_employe></Gerant_employe>
  },
  {
    path:'/gerant_satistique',
    element:<Gerant_stat></Gerant_stat>
  },
  {
    path:'/page_creer',
    element:<PageCreer></PageCreer>
  }
  ,
  {
    path:'/gestionEmploie',
    element:<Gerant_employe></Gerant_employe>
  },
  {
    path:'/description reclamation',
    element:<Reponse_reclamation/>
  }
])

function App() {
  return (
    <RouterProvider router={routter}>
      {/* <Gerant_accueil/>
      <Profil_etudiant/> */}
    </RouterProvider>
  );
}

export default App;
