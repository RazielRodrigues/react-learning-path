import { useState } from 'react';

/**
Geralmente é usado o map para renderizar lista e com isso é usado
js puro a sintaxe do map no react é um pouco diferente tem que tomar cuidado com isso
 * 
o react tambem pede uma propriedade key para poder diferenciar os dados de uma lista por ID

podemos usar o pre state que é quando queremos pegar o estado antigo da função set do use state da lista para pder modificar ela
 * 
 */

const ListRender = () => {

    const [user, setUser] = useState([
        { id: 1, nome: 'Raziel' },
        { id: 2, nome: 'naruto' }
    ]);

    const deleteUser = () => {
        const randomNumber = Math.floor(Math.random() * 3);

        setUser((prevUser) => {
            return prevUser.filter((user) => randomNumber !== user.id)
        });

    }

    return (
        <div>
            <ul>
                {
                    Object.keys(user).map((item, key) => (
                        <li key={key}>{item}</li>
                    ))
                }
            </ul>
            <button onClick={deleteUser}>apagar user</button>
        </div>
    )
}

export default ListRender;