import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className='navbar'>

            <NavLink className='brand' to="/">
                Mini <span>Blog</span>
            </NavLink>

            <ul className='links_list'>
                <li>
                    <NavLink to="/about">
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register">
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
