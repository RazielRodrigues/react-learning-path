import React from 'react'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
import ChangeCounterContext from '../context/ChangeCounterContext';
import { useCounterContext } from '../src/useCounterContext';

function Home() {

    // refatorando para hook
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

    return (
        <div>
            <h1>
                Valor do contador: {counter}
                <ChangeCounterContext />
            </h1>
        </div>
    )
}

export default Home