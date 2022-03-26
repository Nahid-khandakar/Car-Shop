import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import Cart from '../Cart/Cart';
import RandomCart from '../RandomCart/RandomCart';
import './MainShop.css'

const MainShop = () => {

    //this state use for cars component
    const [cars, setCars] = useState([])

    //this state use for cart component
    const [cart, setCart] = useState([])

    //this state use for random car component
    const [random, setRandom] = useState([])


    //this effect use for cars component
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


    //random select
    const randomCart = () => {

        const randomCart = [...cart]
        const newRandom = randomCart[Math.floor(Math.random() * randomCart.length)]
        setRandom(newRandom)
    }


    return (
        <div className="container-fluid">

            <div className="row">



                {/* carts container */}
                <div className="col-lg-3 col-12  bg-dark order-sm-2 ">
                    <div className='cart-container'>


                        <h3 className='text-danger text-center mt-3'>Selected Cart List</h3>
                        {
                            cart.map(carCart => <Cart
                                key={carCart.id}
                                carCart={carCart}
                            ></Cart>)
                        }

                        <div className='d-flex justify-content-evenly'>

                            <button onClick={randomCart} type="button" className="btn btn-outline-primary cart-btn">Choose any 1</button>

                            <button onClick={removeAllCart} type="button" className="btn btn-outline-warning cart-btn">Remove All</button>

                        </div>


                        <RandomCart
                            random={random}
                        >
                        </RandomCart>

                    </div>
                </div>

                {/* cars container */}
                <div className="col-lg-9 col-12 bg-dark order-sm-1 ">

                    <div className='cars-container  d-flex flex-wrap justify-content-around'>
                        {
                            cars.map(car => <Cars
                                key={car.id}
                                car={car}
                                addToCart={addToCart}
                            ></Cars>)
                        }
                    </div>
                </div>




            </div>
        </div>



    );
};

export default MainShop;