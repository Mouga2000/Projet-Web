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
import Statistique from './component/gerant-satistique';

const routter = createBrowserRouter([
  {
    path:'/',
    element:<Gerant_accueil/> //reaffiche la page principale du gerant
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
  }
])

function App() {
  return (
    <RouterProvider router={routter}>
      {/* <Gerant_accueil/> */}
    </RouterProvider>
  );
}

export default App;
