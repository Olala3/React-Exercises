import { useCallback, useState, useEffect } from "react";
import { mutate, useSWR} from "swr";

export function useCounter(initialValue=0){
    const [count, setCount] = useState(initialValue)
  
    const increment = useCallback(function handleIncrement() {
      setCount(count =>  count + 1 )
    }, [])

    const decrement = useCallback(function handleDecrement() {
      setCount(count =>  count - 1)
    }, [])

    const reset = useCallback(function handleReset() {
      setCount(initialValue)
    }, [initialValue])

    return {
        count: count,
        increment,
        decrement,
        reset
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

const fetcher = (url) => fetch(url).then((response) => response.json())

export function useGithubUser(username) {
  const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

  function fetchUserData() {
    mutate()
  }
  return { data, loading:!data && !error , error, fetchUserData };
}


  
  
  
  
  