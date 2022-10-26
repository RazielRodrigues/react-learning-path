const Expressao = () => {

    const name = 'raziel'
    const data = {
        age: 21
    }

    return (
        <div>
            <h1 className="logo">
                NOME {name}
                <br />
                IDADE: {data.age}
                <br />
                SALARIO: {1000 + 2000}
            </h1>
        </div>

    )
}

export default Expressao;