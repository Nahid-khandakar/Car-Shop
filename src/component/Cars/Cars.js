import React from 'react';
import './Cars.css'
import { FiShoppingCart } from 'react-icons/fi';

const Cars = (props) => {
    const { carName, price, carModel, image } = props.car

    return (

        <div className="card cars-style mt-4 pe-5 mb-5 bg-dark border border-danger carsCard">
            <img src={image} className='card-img-top carsImage-style ms-3 mt-3' alt="" />
            <div className="card-body">
                <h4 className='text-danger'>{carName}</h4>
                <h6 className='text-light'>Car Model : {carModel}</h6>
                <h5 className='text-light'>{price}</h5>
                <button onClick={() => props.addToCart(props.car)} type="button" className="btn btn-outline-danger my-3">
                    <span className='cars-icon'><FiShoppingCart /></span>
                    Add to cart</button>
            </div>
        </div>

    );
};

export default Cars;