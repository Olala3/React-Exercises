import { useCallback, useState } from "react";

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
    }, [])

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


export function useGithubUser(username) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
  
    async function fetchUser() {
      setLoading(true)
      setError(null)
  
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        if (response.status === 200) {
          const json = await response.json()
          setData(json)
        } else {
          throw new Error('Failed to fetch user')
        }
      } catch (error) {
        setError(error)
        setData(null)
      } finally {
        setLoading(false)
      }
    }
  
    return { data, error, loading, fetchUser }
  }

  
  
  
  
  