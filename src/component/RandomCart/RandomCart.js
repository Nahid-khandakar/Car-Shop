import React from 'react';
import './RandomCart.css'

const RandomCart = ({ random, randomCart }) => {
    const { carName, image } = random
    return (
        <div>
            <h1>Random One</h1>
            <div className='randomCart-style'>
                <img src={image} alt="" />
                <h4>{carName}</h4>
            </div>
            <button onClick={randomCart}>Random one</button>
        </div>
    );
};

export default RandomCart;