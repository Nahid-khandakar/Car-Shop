import React from 'react';
import './RandomCart.css'

const RandomCart = ({ random, randomCart }) => {
    const { carName, image, price } = random
    return (

        <div className='randomCart-style'>
            <h3>Random One</h3>
            <div >
                <img className='randomCartImage-style' src={image} alt="" />
                <h4>{carName}</h4>
                <h4>{price}</h4>
            </div>
            <button onClick={randomCart}>Random one</button>
        </div>


    );
};

export default RandomCart;