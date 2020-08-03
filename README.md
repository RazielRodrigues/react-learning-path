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

Exemplo de global.css:

    :root {

        /* font size padrão responsivo */
        font-size: 60%;

        /* Cores em variaveis quando alteradas mudam toda a cor da aplicação */
        --color-background: #F0F0F7;
        --color-primary-lighter: #9871F5;
        --color-primary-light: #916BEA;
        --color-primary: #8257E5;
        --color-primary-dark: #774DD6;
        --color-primary-darker: #6842C2;
        --color-secundary: #04D361;
        --color-secundary-dark: #04BF58;
        --color-title-in-primary: #FFFFFF;
        --color-text-in-primary: #D4C2FF;
        --color-text-title: #32264D;
        --color-text-complement: #9C98A6;
        --color-text-base: #6A6180;
        --color-line-in-white: #E6E6F0;
        --color-input-background: #F8F8FC;
        --color-button-text: #FFFFFF;
        --color-box-base: #FFFFFF;
        --color-box-footer: #FAFAFC;
    
    }


    /* alinhando todos os elementos ao centro da tela */
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* definindo a altura do documento */
    html, body, #root{
        height: 100vh;
    }

    body{
        background-color: var(--color-background);
    }

    /* alinhando todos os elentos da div de renderização do react */
    #root{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea{
        font: 500 1.6rem Poppins;
    }

    /* o layout sempre pega 90% da tela mas nunca passa de 700px */
    .container{
        width: 90VW;
        max-width: 700px;
    }

    /* quando chega em 700px altera o tamanho da font para 10px */
    @media (min-width: 700px){
        :root{
            font-size: 62.5%;
        }
    }

## 2. Criar componente

dentro da pasta src criar uma pages e dentro dela uma pasta chamada landing.

criar arquivo index.tsx

    //sempre importar
    import React from 'react';

    //função que retorna o html
    function Landing() {
        return <h1>Landing...</h1>
    }

    export default Landing;