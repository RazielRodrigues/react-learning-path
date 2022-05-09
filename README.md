# React JS

    Projeto desenvolvido na trilha Next Level Week da Rocketseat!

    React é para construções de SPA (Single Page Applications)
    com o react a gente utiliza JSON para exibir dados.
#### instalando o react

    npm create vite@latest
        - selecionar o react
        - vite é uma lib que deixa o codigo js compativel
        - faz a mesma coisa que o babel faz
        - suporta o import do ECMA novo (deixando de usar o webpack para isso)

    JSX = JS + XML
    TS = JS com tipagem

    React lib é o core
    react-dom integração com dom
    react-tv cintegrwação com tv
    a div com o id root na URL é onde é manipulado os dados
    strict mode

    componente é uma função que retorna HTML
        - padrão letra maiuscla como classe
        - ele usa a sintaxe da letra maiuscula para difere nciar do html normal
        - nao se pode ter varios compenentes abaixo dele
        - devemos usar algo em volta
        - adionamos propriedas no elemento para mudar as coisas
            - as propriedades são como parametros dos compeonetnes (funcoes)
            - caso queira mostrar uma variavel javascript usa {}
            - criar interfaces
    
    tailwind css é um utilitario de css
     - instalar e depois alterar o content para tsx

    escrever className no react

    utilizar rem para acessibilidade tails wind ja usa

    export default voce importa com qualquer nome

    estado no react é uma variavel
    o react fica escutando o valor dessa variavel
    e quando la muda o componente é recriado de acordo com ela

    usestate retorna um objeto com duas info
        - evento true ou falso
        - funcao para alterar o widget
        - para o estado funcionar voce precisa atualizar a primeira variavel usando uma função

    acessibilade
        - navegar por tab
        - avisar que tem
            - radix
            - ariakit
            - headless ui            