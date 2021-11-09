import React, { useState, useEffect } from 'react';
import './navbar.component.css';
import { Navbar } from 'react-bootstrap';
import logo from '../../assets/images/app-indicator.svg'



const CustomNavbar = () => {
    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand >
            <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="whiteFont"
            />{' '}
           HDFC COMPOUND INTEREST CALCULATOR
        </Navbar.Brand>
    </Navbar>);
}

export default CustomNavbar;