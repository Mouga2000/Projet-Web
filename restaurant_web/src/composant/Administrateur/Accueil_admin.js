import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barre from './BarreNaviguer';
import Entete from './Entete';
import FonctionAdmin from './FonctionAdmin';
import PiedAdmin from './Pied_Admin';
import GestionEmploie from './Gestion_des_emploies/GestionEmploie';



const AccueilAdmin = () => {
    const test='ADMINISTRATION APPLICATION WEB';
    return (
        
            <div style={{background: '#cfbd97', display:'flex', textAlign:'center'}}>
            
                <Barre/>
            
                <div style={{background: 'linear-gradient(90deg, #000000, #cfbd97)', textAlign:'center',flex:1,
                    color:'#ffffff', fontFamily:'times new roman', height:'150px', alignItems:'center'}}>
                        <Entete text={test}/>
                        <FonctionAdmin/>
                    
                </div>
                    {/* <PiedAdmin/>     */}
            </div>
        
                     
    );
};

export default AccueilAdmin;