import React, { useEffect, useState } from 'react';
import Cars from '../../Cars/Cars';
import Cart from '../../Cart/Cart';
import RandomCart from '../../RandomCart/RandomCart';

import './MainShip.css'

const MainShop = () => {

    //this state use for cars component
    const [cars, setCars] = useState([])
    //console.log(cars)
    //this state use for cart component
    const [cart, setCart] = useState([])

    //this state use for cars component
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])


    //click  and data from  cars.js button 
    const addToCart = (carDetails) => {
        //console.log(carDetails)
        const newCart = [...cart, carDetails]
        setCart(newCart)

    }

    //remove all cart

    const removeAllCart = () => {
        setCart([])
    }

    const [random, setRandom] = useState([])

    const randomCart = () => {

        const randomCart = [...cart]
        const newRandom = randomCart[Math.floor(Math.random() * randomCart.length)]
        setRandom(newRandom)
    }

    return (

        <div className='mainShop-container'>

            <div className='cars-container'>
                {
                    cars.map(car => <Cars
                        key={car.id}
                        car={car}
                        addToCart={addToCart}
                    ></Cars>)
                }
            </div>

            <div className='cart-container'>
                <h3>Cart List</h3>
                {
                    cart.map(carCart => <Cart
                        key={carCart.id}
                        carCart={carCart}
                    ></Cart>)
                }
                <button onClick={removeAllCart} >Remove All</button>
                <br />
                <RandomCart
                    random={random}
                    randomCart={randomCart}
                >
                </RandomCart>


            </div>
        </div>

    );
};

export default MainShop;