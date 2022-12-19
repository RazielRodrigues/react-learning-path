// 1 - Criar contexto

import { createContext, useState } from "react";
export const CounterContext = createContext();

// 2 - Criar provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )

}