import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';
import Diagramme from './Diagramme';

const Type_Diagramme = () => {
    

    return (
        <div  style={{background: 'linear-gradient(90deg, #999999, #cfbd97)', textAlign:'center',
            color:'#ffffff', fontFamily:'times new roman', width:'250px',height:'300', alignItems:'center'}}>
                <h4>Statisques</h4>
                <hr/>
                <button style={{border:'none', background:'none'}}>Statisques de Commande</button>
                <button style={{border:'none', background:'none'}}>Statisques de Vente</button>
                <button style={{border:'none', background:'none'}}>Statisques de Jeux & Promos</button>
                <button style={{border:'none', background:'none'}}>Statisques de prainnage & fidélité</button>

        </div>
    );
};

export default Type_Diagramme;