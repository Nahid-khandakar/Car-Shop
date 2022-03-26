import React from 'react';
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-danger navStyle">

            <div className="container-fluid">


                <h2>Car Shop</h2>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0 text-light">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Contact</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">About Us</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;