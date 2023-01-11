import React from 'react'
import './Register.css'

import { useAuthentication } from './../../hooks/useAuthentication';
import { useState, useEffect } from 'react'

export const Register = () => {

    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            displayName,
            email,
            password
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
        }

        const res = await createUser(user)

        console.log(res)

    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])

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
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disabled >Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}
