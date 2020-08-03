# React JS

Tutorial: https://nextlevelweek.com

# O que é o REACT JS?

Uma biblioteca de construção de interfaces Single page aplication que visa melhorar a experiencia do usuario.

Configuração de ambiente:

https://www.notion.so/Instala-o-3d8bc65b8a0f48249bf3037156eb0a15#aa34caa824eb4c3a8b32ae793740e303

## Criando o projeto e conceitos

com yarn:

    yarn create react-app web --template typescript

entrar no projeto e rodar:

    yarn start

Importante limpar o projeto (commit de exemplo):

https://github.com/RazielMiranda/react-learning-path/commit/a1c22a19c62f78afcae175244f95f250da103886

- O React JS usa componentes
- componentes nada mais são do que funções que retornam html
- componentes são trechos de codigo reutilizaveis

componentes sempre sao escritos com letras maiusculas:

    </ App>
    //JSX = JS + XML É A NOTAÇÃO USADA PARA ESSA SINTAXE

O HTML vai ser injetado dentro da div root no index.html:

    <div id="root"></div>

Lib que sempre precisa ser importada:

    import React from 'react';

O metodo render é responsavel por injetar o codigo:

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );

--dica

# 1. Estilizando projeto para responsividade

O que é REM?

uma unidade de medida usada para responsividade, pois faz um calculo da tela do usuario:

1 rem = 9.6 px

o rem ajuda a deixar mais fluido o layout.

criar um arquivo global.css dentro de uma pasta styles em assets.
