import React from "react";
import Entete_g from "../component/entete-gerant";
import Menu_g from "../component/menu-gerant";
import Side_bar from "../component/side-bar-gerant";

const Gerant_accueil = () => {
    <Router>
        <Entete_g/>
        <Side_bar/>
        <Menu_g/>
    </Router>
}

export default Gerant_accueil;
