import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styleListe.css';



const Liste = () => {
    const noms=["Nehemie Mouga", "Santigo", "Marrion"];
    const adresse=["djindigam.mouga@2028.ucac-icam.com", "santigo@2028.ucac-icam.com", "will.marrion@2028.ucac-icam.com"];
    const poste=["Gerant", "emploie", "emploie"];

    

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
                                <button>Modifier</button>
                                <button>Supprimer</button>
                            </td>
                        </tr>
                    ))}

                </table>
            
           
        </div>
      
    );
};

export default Liste;