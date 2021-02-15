import React from 'react'
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <div>
            <NavLink to='/basket' >basket</NavLink>
            <NavLink to='/takeawaymenu' >Take Away</NavLink>
        </div>
    )
}
