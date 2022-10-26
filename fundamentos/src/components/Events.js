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

const Events = () => {

    const handleClique = (e) => {
        alert('clique')
    }

    const renderizaAlgo = (x) => {
        return (x) ? <h1>deu true</h1> : <h1>deu false</h1>
    }

    return (
        <div>
            <button onClick={handleClique}>Clicar aqui</button>

            <button onClick={() => alert('função inline')}>Clicar aqui inline</button>

            {renderizaAlgo()}
            {renderizaAlgo(true)}

        </div>

    )
}

export default Events;