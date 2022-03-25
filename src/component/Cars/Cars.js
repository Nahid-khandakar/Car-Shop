import React from 'react';
import './Cars.css'
import { FiShoppingCart } from 'react-icons/fi';

const Cars = (props) => {
    const { carName, price, carModel, image } = props.car
    return (

        <div className='carsCard'>
            <img src={image} alt="" />

            <div className='carCard-info'>
                <h3>{carName}</h3>
                <h6>Car Model : {carModel}</h6>
                <h4>{price}</h4>

                {/* react icon use here */}
                <button className='carsCard-btn'>
                    <span className='cars-icon'>< FiShoppingCart /></span> Add to cart

                </button>
            </div>



        </div>

    );
};

export default Cars;