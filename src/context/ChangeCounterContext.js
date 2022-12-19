import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

function ChangeCounterContext() {

    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <button onClick={(() => {
                setCounter(counter + 30)
            })}>
                Adicionar no contador DO BINZINHO FOFINHO
            </button>
        </div>
    )
}

export default ChangeCounterContext