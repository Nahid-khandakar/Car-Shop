import React from 'react';
import './Cars.css'

const Cars = (props) => {
    const { carName, price, carModel, image } = props.car
    return (

        <div className='carsCard'>
            <img src={image} alt="" />

            <div className='carCard-info'>
                <h3>{carName}</h3>
                <h6>Car Model : {carModel}</h6>
                <h4>{price}</h4>
                <button className='carsCard-btn'>Add to cart</button>
            </div>



        </div>

    );
};

export default Cars;