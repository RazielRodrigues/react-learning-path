import React, { useState } from 'react'

function MyForm({ user }) {


    // gerenciando os dados

    const [name, setName] = useState(user.name ?? "");
    const [email, setEmail] = useState(user.email ?? "");
    const [bio, setBio] = useState(user.bio ?? "");
    const [role, setRole] = useState(user.role ?? "");

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)

        // limpa dados
        setName('')
        setEmail('')
    }

    console.log(email)

    //PARA FORMS DE EDIÇÃO USA CONTROLLED INPUTS

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome</span>
                    <input value={name} type="text" name="nome" onChange={handleName} />
                    <input type="submit" name="enviar" value="enviar" />
                </label>
                <label>
                    <span>Email</span>
                    <input value={email} type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />

                {/* fazer esses szinho */}
                <textarea value={bio} name="bio" id="" cols="30" rows="10" onChange={(e) => setBio(e.target.value)}>

                </textarea>

                <select value={role} name="role" id="" onChange={(e) => setRole(e.target.value)}>
                    <option value="jao">JAO</option>
                    <option value="night"> RZ NIGHT</option>
                </select>


                <input type="submit" name="enviar" value="enviar" />
            </form>
        </div>
    )
}

export default MyForm