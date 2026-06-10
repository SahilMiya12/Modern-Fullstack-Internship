'use client'
import {createContext} from 'react';
import { useState } from 'react';

export const CounterContext = createContext<any>(null);

export const CounterProvider = (props:any) => {
    const [count, setCount] = useState(5);
    return (
        <CounterContext.Provider value={{count,setCount, name:"Nishchal"}}>
            {props.children}
        </CounterContext.Provider>
    )
}