import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to='/takeawaymenu'>Take Away</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink to='/signup'>Sign Up</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink to='/signin'>Sign In</NavLink>
          </div>
        </div>
      </div>
    );
  };

  window.addEventListener('resize', () => {
    return setWindowWidth(window.innerWidth);
  });

  return (
    <div className='nav'>
      {windowWidth > breakpointM ? (
        <div className='nav-links'>
          <div className='nav-link'>
            <NavLink to='/takeawaymenu'>Take Away</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink to='/signup'>Sign Up</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink to='/signin'>Sign In</NavLink>
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
      <div className='basket-icon'>
        <div className='nav-link'>
          <NavLink to='/basket'>basket</NavLink>
        </div>
      </div>
    </div>
  );
};
