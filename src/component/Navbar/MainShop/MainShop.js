import React, { useEffect, useState } from 'react';
import Cars from '../../Cars/Cars';
import Cart from '../../Cart/Cart';
import './MainShip.css'

const MainShop = () => {

    //this state use for cars component
    const [cars, setCars] = useState([])
    //console.log(cars)

    //this state use for cars component
    useEffect(() => {
        fetch('fake-data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (

        <div className='mainShop-container'>

            <div className='cars-container'>
                {
                    cars.map(car => <Cars
                        car={car}
                        key={car.id}
                    ></Cars>)
                }
            </div>

            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>

    );
};

export default MainShop;