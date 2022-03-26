import React from 'react';
import './RandomCart.css'

const RandomCart = ({ random }) => {
    const { carName, image, price } = random
    return (

        <div className='randomCart-style mt-3  border border-danger p-2' >
            <h4 className='text-white text-center mb-3'>Random Choosing Car</h4>
            <img src={image} className='ms-4 ps-3' alt="" />
            <h4 className='text-danger text-center mt-2'>{carName}</h4>
            <h3 className='text-white text-center'>{price}</h3>
        </div>




    );
};

export default RandomCart;