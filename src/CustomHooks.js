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

export function useForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const checked = event.target.checked;

        if (name === 'username'){
        setUsername(value)
        } if (name === 'password'){
        setPassword(value)
        } if (name === 'remember'){
        setRemember(checked)
        }
    }

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRemember(false)
    }

    const isDisabled = !username || !password;

    return {
        username,
        password,
        remember,
        currentValue: handleInputChange,
        reset: handleReset,
        isDisabled,
    }
}