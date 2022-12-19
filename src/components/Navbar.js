import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/'}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>ABOUT</NavLink>
                </li>
                <li>
                    <NavLink to={'/details'}>BINZINHO</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar