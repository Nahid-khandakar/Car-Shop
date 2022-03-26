import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { carName, image } = props.carCart

    return (
        <div>
            <div className='cart-style d-flex text-danger '>
                <img src={image} className='' alt="" />
                <h4>{carName}</h4>
            </div>
        </div>

    );
};

export default Cart;