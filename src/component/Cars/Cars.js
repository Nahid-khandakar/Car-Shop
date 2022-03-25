import React from 'react';
import './Cars.css'

const Cars = (props) => {
    const { carName, price, carModel, image } = props.car
    return (

        <div className='carsCard'>
            <img src={image} alt="" className='img-fluid' />

            <div className='carCard-info'>
                <h3>{carName}</h3>
                <h6>Car Model : {carModel}</h6>
                <h4>{price}</h4>
            </div>

        </div>

    );
};

export default Cars;