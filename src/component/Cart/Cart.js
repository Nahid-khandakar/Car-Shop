import React from 'react';
import './Cart.css'

const Cart = (props) => {
    //console.log(props)
    const { carName, image } = props.carCart
    return (
        <div className='cart-style'>
            <img src={image} alt="" />
            <h4>{carName}</h4>
        </div>
    );
};

export default Cart;