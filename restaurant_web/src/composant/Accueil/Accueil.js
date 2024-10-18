import React from 'react';
import Nav from '../entete';
import Sectionier from '../Section_page';
import Formulaire from '../Formulaire';
import Pied_page from '../pied_page';
import Services from './nos_service';
import SeConnecter from './Seconnecter';
import CreerCompte from './CreerCompte';
import Apropos from './Apropos';




const Accueil = () => {
    return (
        <div style={{background: 'linear-gradient(180deg,#cfbd97, #000000 )'}}>
           
              <Nav />
              <Sectionier/>
              <Formulaire/>
              <Pied_page/>     
        </div>
      
    );
};

export default Accueil;

