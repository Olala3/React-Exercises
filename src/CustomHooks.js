import { useState } from "react";

export function useCounter(initialValue=0){
    const [count, setCount] = useState(initialValue)
  
    function handleIncrement() {
        setCount(count =>  count + 1 )
      };

    function handleDecrement() {
        setCount(count =>  count - 1)
    }

    function handleReset() {
        setCount(initialValue)
    }

    return {
        count: count,
        increment: handleIncrement,
        decrement: handleDecrement,
        reset: handleReset
    }
}