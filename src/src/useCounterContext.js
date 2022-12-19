import { CounterContext } from '../context/CounterContext'
import { useContext } from 'react'

export const useCounterContext = () => {

    const context = useContext(CounterContext);

    if (!context) {
        console.log('erro no contexto!');
    }

    return context;

}