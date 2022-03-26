import React from 'react';
import './RandomCart.css'

const RandomCart = ({ random }) => {
    const { carName, image, price } = random
    return (

        <div className='randomCart-style' >
            <h4>{carName}</h4>
            <img src={image} alt="" />
            <h4>{price}</h4>
        </div>




    );
};

export default RandomCart;