import React from 'react'
import './Register.css'

import { useState, useEffect } from 'react'

export const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
        }

    }

    return (
        <div className='register'>
            <h1>Cadastre-se para postar</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome de usuario</span>
                    <input
                        type="text"
                        name="displayName"
                        placeholder='Nome de usuario'
                        value={displayName}
                        onChange={(e) => { setDisplayName(e.target.value) }}
                    />
                </label>
                <label>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        placeholder='Digite seu email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        placeholder='Digite a senha'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </label>
                <label>
                    <span>Confirmar senha</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder='Confirme a senha'
                        value={confirmPassword}
                        onChange={(e) => { setconfirmPassword(e.target.value) }}
                    />
                </label>
                <button className="btn">Cadastrar</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
