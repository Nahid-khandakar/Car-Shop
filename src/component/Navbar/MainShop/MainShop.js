import React, { useEffect, useState } from 'react';
import Cars from '../../Cars/Cars';
import Cart from '../../Cart/Cart';
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

            </div>
        </div>

    );
};

export default MainShop;