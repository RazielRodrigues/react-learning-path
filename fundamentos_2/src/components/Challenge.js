import React from 'react'

function Challenge({ nome, idade, profissao }) {
    return (
        <div>
            <h1>DESAFIO DE PESSOAS</h1>
            <p>{nome}</p>
            <p>{idade}</p>
            <p>{profissao}</p>
            {idade >= 18 && <p>PODE TIRAR CNH!!!!!</p>}
        </div>
    )
}

export default Challenge