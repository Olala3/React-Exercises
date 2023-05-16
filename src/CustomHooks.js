import { useCallback, useState, useEffect } from "react";

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


export function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUserData() {
    setLoading(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();
      setUserData(data);
      setLoading(false);
      console.log(response.status);

      if (response.status == 404) {
        console.log("Hello");
        setError(true);
      }

    } catch (error) {
      setError(error);
      console.log('Hello');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return { userData, loading, error, fetchUserData };
}


  
  
  
  
  