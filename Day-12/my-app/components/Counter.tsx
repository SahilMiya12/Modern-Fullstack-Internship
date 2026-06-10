'use client'
import { CounterContext } from "@/app/context/Counter"
import { useContext } from "react";
export default function Counter(){
    const counterContext = useContext(CounterContext);
    function handleIncrement(){
        counterContext.setCount(counterContext.count + 1);
    }

    function handleDecrement(){
        counterContext.setCount(counterContext.count - 1);
    }
    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}