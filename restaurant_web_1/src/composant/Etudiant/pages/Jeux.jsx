import React from 'react';
import './Jeux.css';
import echecs from '../assets/image/echecs.jpeg';
import Slither from '../assets/image/Slither.jpeg';


const JeuxxPromo = () => {
    return (
        <div style={{ marginTop: '-40px' }}>

            <div className='Jeux'>
                <h2>Nous proposons</h2>
                <div className='games-section'>
                    <div className='online-game1'>
                        <img src={echecs} alt="Chess" />
                        <p>Jouez à des échecs en ligne ici :{' '}
                            <a href="https://www.chess.com/play" target="_blank" rel="noopener noreferrer"> chess.com
                            </a>
                        </p>
                    </div>
                    <div className='online-game2'>

                        <img src={Slither} alt="Slither.io" />
                        <p>Essayez ce jeu multijoueur en ligne ici :{' '}
                            <a href="http://slither.io" target="_blank" rel="noopener noreferrer">Slither.io</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )

}
export default JeuxxPromo;