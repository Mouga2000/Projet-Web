import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from '../BarreNaviguer';
import Entete from '../Entete';
import PiedAdmin from '../Pied_Admin';



const GestionMenu = () => {
    const test='GESTION DU MENU';
    return (
        <div style={{background: '#cfbd97', display:'flex', textAlign:'center'}}>
           
           <Barre/>
           
           <div style={{background: 'linear-gradient(90deg, #000000, #cfbd97)', textAlign:'center',flex:1,
            color:'#ffffff', fontFamily:'times new roman', height:'150px', alignItems:'center'}}>
            <Entete text={test}/>
            
            
           </div>
              {/* <PiedAdmin/>     */}
        </div>
      
    );
};

export default GestionMenu;
