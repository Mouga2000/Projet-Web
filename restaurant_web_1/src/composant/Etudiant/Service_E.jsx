import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Entete_etudiants from './Entete_etudiant';
import Sectionier from '../Section_page';

const Services_E = () => {
    return (
        <div style={{
            background: '#cfbd97',
            height: '100vh',
            display: 'flex', 
            flexDirection: 'column'
        }}>
            <Entete_etudiants />
            <Sectionier />
            
            <div className='container' style={{
                color: "#000000",
                background: "#cfbd97",
                fontFamily: 'Times New Roman',
                flex: 1, 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center',
            }}>
                <h2 style={{ textAlign: 'center' }}>Services Proposées</h2>
                <p style={{ textAlign: 'justify', fontFamily: 'Times New Roman', fontSize: '18px' }}>
                    ......................s
                </p>
            </div>
            <div style={{ marginTop: 'auto' }}>
                
            </div>
        </div>
    );
};

export default Services_E;
