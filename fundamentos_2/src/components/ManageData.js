import { useState } from 'react';

/**
 * States são usados para alterar os valores das variaveis do componentes
 * sem ele os valores das variaveis não alterados
 * segue o ṕadrão de orientação a objetos onde se tem uma função
 * 
 * para usar os testes é necessario importar ele, e após imprtar ele voce
 * pode começar o gerenciamento do "ESTADO" da variavel
 * 
 * 
 */

const ManageData = () => {

    // se eu colocar um valor aqui dentro
    //  eu ja inicializo o estado da variavel que vai ser alterada pelo estado
    let [number, setNumber] = useState(0);

    return (
        <div>
            <button onClick={() => setNumber(number++)}>clique para mudar o valor</button>
            <h1>{number}</h1>
        </div>
    )
}

export default ManageData;