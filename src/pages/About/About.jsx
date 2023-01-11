import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

export const About = () => {
    return (
        <div className='about'>
            <h2>
                Projeto feito com REACT
            </h2>
            <p>
                CRIE SEUS POSTS!
            </p>
            <Link to="/posts/create" className="btn">
                Criar post
            </Link>
        </div>
    )
}
