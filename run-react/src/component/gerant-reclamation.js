import React from "react";

import Side_bar from "./side-bar-gerant";
import Entete_g from "./entete-gerant";

const Gerant_reclamation = () => {

    return (

        <div style={{display:'flex', textAlign:'center',height:'100%' }}>
            <Side_bar/>
            <div style={{flex:1,textAlign:'center', alignItems:'center',height:'100%', backgroundColor:'linear-gradient(315deg, #000000, #cfbd97)'}}>
                <div>
                    <Entete_g/>
                </div>
                <div>
                    {/* Ajouter mon composant */}
                </div>
            </div>
        </div>

    );

}

export default Gerant_reclamation;