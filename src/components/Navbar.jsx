import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

export const Navbar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className='navbar'>

            <NavLink className='brand' to="/">
                Mini <span>Blog</span>
            </NavLink>

            {!user && (
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
            )}

            {user && (
                <ul className='links_list'>
                    <li>
                        <NavLink to="/posts/create">
                            Criar post
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            )}

        </nav>
    )
}
