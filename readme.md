eventos

/**
 * Para trabalhar com eventos no react
 * é necessario passar apenas a assinatura
 * do metodo, caso passe com os parentesis
 * ele já irá executar a função
 * existem casos e casos.
 * 
 * Com o react também é possivel renderizar HTML ou componentes
 * baseado em alguma condição da propria função
 * 
 */

 imagens que estão em public podem ser acessadas direto com o ./


 CONCEITOS PRINCIPAIS DO REACT
  - USA O JSX
  - TUDO QUE FOR DE INTERFACE É UMA RQUIVO
  - VARIAVEIS SÃO MANIPULADAS USANDO O "ESTADOS" USESTATE POR EXEMPLO ELES CHAMA DE HOOOKS
  - TUDO DEVE ESTAR DENTRO DE UMA DIV
  - A GRANDE IDEIA É USAR E ABUSAR DO IMPORT DO ECMA

  - NAO MUDA MUITO DO JAVASCRIPT NORMAL
  - VOCE PODE USAR CODIGO JS DENTRO DAS FUNÇÕES
  - VOCE ACESSA OS ATRIBUTOS QUE COLOCA NO COMPONENTE USANDO "PROPS" E BASICAMENTE A GAMBETA DE CRIAR NOME DENTRO DA TAG HTML E DEPOIS PEGAR ELA COM O JS

  - TEM PARTICULARIDADES DE SINTAXE COMO RETORNAR USANDO PARETNTSIS CODIGOS JS SAO EXEUCTADOS EM CHAVES E ETC
  - ALGUMA FUNÇÕES MUDAM COMO O MAP DO JS PARENTESIS NÃO PE CHAVE
        {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}