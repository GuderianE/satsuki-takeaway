import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    const [mobileToggle, setMobileToggle] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const breakpointM = 786;

    const hamburgerLogic = () => {
        if (mobileToggle === true) {
            return (<div className='nav-links'>
                <div className='nav-link'>
                    <NavLink to='/takeawaymenu' >Take Away</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/signup' >Sign Up</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/signin' >Sign In</NavLink>
                </div>
            </div>)
        }
    }


    window.addEventListener('resize', () => {
        return setWindowWidth(window.innerWidth)
    })
    console.log(windowWidth)

    return (
        <div className='nav'>
            {windowWidth > breakpointM ? <div className='nav-links'>
                <div className='nav-link'>
                    <NavLink to='/takeawaymenu' >Take Away</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/signup' >Sign Up</NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to='/signin' >Sign In</NavLink>
                </div>
            </div> : <div>
                    <div className='hamburgerToggle' onClick={() => setMobileToggle(!mobileToggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {hamburgerLogic()}
                </div>
            }
            <div className='basket-icon'>
                <div className='nav-link'>
                    <NavLink to='/basket' >basket</NavLink>
                </div>
            </div>
        </div>
    )
}




// { mobileToggle && windowWidth <= breakpointM && <div className='nav-links'>
//                 <div className='nav-link'>
//                     <NavLink to='/takeawaymenu' >Take Away</NavLink>
//                 </div>
//                 <div className='nav-link'>
//                     <NavLink to='/signup' >Sign Up</NavLink>
//                 </div>
//                 <div className='nav-link'>
//                     <NavLink to='/signin' >Sign In</NavLink>
//                 </div>
//             </div>}