import React from 'react';
import './Promotion.css';

function Promotion() {
    const dish = {
      imageUrl: '/src/assets/image/Café.jpeg',
      name: 'Café Latte',
      description: 'Un délicieux café latte avec une touche de cannelle, parfait pour commencer votre journée.',

    };

    return(
        <div>
            
            <div className='main-content'>
                <h2> PROMOTIONS</h2>
                <div className="promo-section">
                    <img src={dish.imageUrl} alt="Plat promotionnel" />
                </div>
                <div className="promo-details">
                    <h3>Nom: {dish.name}</h3>
                    <p>Description: {dish.description}</p>
            </div>
                

            </div>
             
           
            
        </div>
    )

}
export default Promotion;