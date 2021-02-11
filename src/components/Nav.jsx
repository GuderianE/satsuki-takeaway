import React from 'react'
import { NavLink } from 'react-router-dom';
import { TakeAwayMenu } from './TakeAwayMenu';
import {  } from "./Basket";


export const Nav = () => {
    return (
        <div>
            <NavLink to={'/basket'} >basket</NavLink>
            <NavLink to={{
                pathname: '/takeawaymenu',
                state: {TakeAwayMenu}
            }} >Take Away</NavLink>
        </div>
    )
}
