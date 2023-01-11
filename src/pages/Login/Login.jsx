import React from 'react'
import './Login.css'

import { useAuthentication } from './../../hooks/useAuthentication';
import { useState, useEffect } from 'react'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading, login } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        await login(user)

    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])

    return (
        <div className='login'>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
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
                {!loading && <button className="btn">Entrar</button>}
                {loading && <button className="btn" disabled >Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
