import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Satsuki-Logo (2).png';
import LogoBig from '../assets/Improved-Satzuki-Logo.png';

export const Nav = () => {
    const [animateToggle, setAnimateToggle] = useState('initialClose');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpointM = 768;

    let menuRef = useRef();

    window.addEventListener('resize', () => {
        return setWindowWidth(window.innerWidth);
    });

    const handleMouseDown = (e) => {
        if (!menuRef.current.contains(e.target)) {
            setAnimateToggle('close');
        }

    }

    const eventHandler = useCallback(() => {
        document.addEventListener('mousedown', (e) => { handleMouseDown(e) }, true);
    },[])

    const removeHandler = useCallback(() => {
        console.log('working')
        document.removeEventListener('mousedown', handleMouseDown, false);
    },[])

    useEffect(() => {
        if (windowWidth < breakpointM) {
            eventHandler()
        } 
            return () => {
                removeHandler()
            }
    }, [eventHandler, removeHandler, windowWidth])


    const menuSlideIn = () => {
        const slideInAnimation = animateToggle !== 'open' ? 'open' : 'close';
        setAnimateToggle(slideInAnimation);
    };

    const hamburgerLogic = () => {
        return (
            <nav className={animateToggle}>
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
            </nav>
        );
    };

    return (
        <div className='fixed'>
            <div className='nav' ref={menuRef}>
                {windowWidth >= breakpointM ? (
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
                        <nav >
                            <div className='hamburgerToggle' onClick={() => menuSlideIn()}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {hamburgerLogic()}
                        </nav>
                    )}
                <div className='logo'>
                    {windowWidth >= breakpointM ? <img src={LogoBig} alt="Satzuki Logo" /> : <img src={Logo} alt="Satzuki Logo" />}
                </div>
                <div className='basket-icon'>
                    <div className='nav-link'>
                        <NavLink to='/signin'>Sign In</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink to='/basket'><RiShoppingBasketLine /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};