import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import Diagramme from './Diagramme';
import ContenuStatistique from './ContenuStatistique';



const Statistique = () => {

    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center', height:'100%'}}>
            <Barre/>
            <div style={{flex:1}}>
                <ContenuStatistique/>
            </div>
            

        </div>
    );
};

export default Statistique;