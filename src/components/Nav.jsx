import React, { useState, useEffect, useRef } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Satsuki-Logo (2).png';
import LogoBig from '../assets/Improved-Satzuki-Logo.png';

export const Nav = () => {
    const [animateToggle, setAnimateToggle] = useState('initialClose');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpointM = 768;

    let menuRef = useRef();

    useEffect(() => {
        if (windowWidth < breakpointM) {
            document.addEventListener('mousedown', (e) => {
                if (!menuRef.current.contains(e.target)) {
                    setAnimateToggle('close');
                }
            });
        }
        window.addEventListener('resize', () => {
            return setWindowWidth(window.innerWidth);
        });
    });

    const menuSlideIn = () => {
        const slideInAnimation = animateToggle !== 'open' ? 'open' : 'close';
        setAnimateToggle(slideInAnimation);
    };

    const hamburgerLogic = () => {
        return (
            <div className={animateToggle}>
                <div className='nav-links'>
                    <div className='nav-link'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/takeawaymenu'>Take Away</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <div className='nav'>
            {windowWidth > breakpointM ? (
                <div className='nav-links'>
                    <div className='nav-link'>
                        <NavLink to='/'>Home</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/about'>About</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/contact'>Contact</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/takeawaymenu'>Take Away</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </div>
                </div>
            ) : (
                    <div ref={menuRef}>
                        <div className='hamburgerToggle' onClick={() => menuSlideIn()}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {hamburgerLogic()}
                    </div>
                )}
                <div className='logo'>
                    {windowWidth > breakpointM ? <img src={LogoBig} alt=""/> : <img src={Logo} alt=""/>}
                </div>
            <div className='basket-icon'>
                <div className='nav-link'>
                    <NavLink to='/signin'>Sign In</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/basket'><RiShoppingBasketLine/></NavLink>
                </div>
            </div>
        </div>
    );
};