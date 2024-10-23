import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleListe.css';
import {  useNavigate } from 'react-router-dom';



const Liste = () => {
    const noms=["Nehemie Mouga", "Santigo", "Marrion"];
    const adresse=["djindigam.mouga@2028.ucac-icam.com", "santigo@2028.ucac-icam.com", "will.marrion@2028.ucac-icam.com"];
    const poste=["Gerant", "emploie", "emploie"];

    const modifier=useNavigate();
    const com_modif=()=>{
        modifier('/page_creer')
    }

    

    return (
        <div className='container' style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center',
            textAlign: 'center', display: 'flex',  gap: '30px', flexWrap: 'wrap', paddingTop:'50px'}} >
                
                <table style={{borderCollapse:'collapse', width:'80%', background:'#ffffff', color:'#000'}}>
                    <thead>
                        <tr >
                            <th>Nom</th>
                            <th>Adresse</th>
                            <th>Poste</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {noms.map((noms, i)=>(
                        <tr key={i}>
                            <td >{noms}</td>
                            <td >{adresse[i]}</td>
                            <td >{poste[i]}</td>
                            <td>
                                <button style={{background:'#11AF18', color:'#fff', borderRadius:'25px'}} onClick={com_modif}>
                                    Modifier
                                </button>
                                <button style={{background:'#F90A0A', color:'#fff', borderRadius:'25px'}}>Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </table>
            
           
        </div>
      
    );
};

export default Liste;