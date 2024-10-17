import React from 'react';
import Nav from '../entete';
import Sectionier from '../Section_page';
import Pied_page from '../pied_page';

const Apropos = () => {
    return (
        <div style={{background: '#cfbd97'}}>
            
            <Nav />
            <Sectionier/>
            <div className='container' style={{color: "#000000", background: "#cfbd97", fontFamily: 'times new roman'}}>
                <h2 style={{textAlign: 'center'}}>A Propos du Restaurant</h2>
                <p style={{textAlign: 'justify', fontFamily: 'times new roman', fontSize: '18px'}}>
                    ......................s
                </p>
            </div>
            <Pied_page/>
            
        </div>
    );
};

export default Apropos;
