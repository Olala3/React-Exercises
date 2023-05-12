import React, { useEffect, useRef, useState } from "react";
import { LanguageContext } from "./CreateContext";
import { useCounter, useForm, useGithubUser } from "./CustomHooks";



export class Welcome extends React.Component {

    render(){
        return <div>
            { this.props.name
               ? <p>Welcome {this.props.name}!</p>
               : <p>Welcome Everyone!</p>
            }
        </div>
    }
}


export function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    return() => clearInterval(interval);
  }, [])

  return <div>
      <h1>Counter: {count}</h1>
  </div>
}

export function ClickCounter() {
    const { count, increment, decrement, reset} = useCounter()
  
      return (
        <div>
          <p>Counter: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      );
  }

export function ClickTracker() {
  const [lastClicked, setLastClicked] = useState(0);

   function trackClick(event) {
    setLastClicked(event.target.innerText);
  } 

  return <div>
    <h1>Last clicked: {lastClicked}</h1>
    <button onClick={trackClick}>Button 1</button>
    <button onClick={trackClick}>Button 2</button>
    <button onClick={trackClick}>Button 3</button>
  </div> 
}


export class InteractiveWelcome extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nameInput: '',
    }
  }

  handleInputChange = (event) => {
    this.setState({nameInput: event.target.value});
  }

  render(){
    return <div>
      <label>Please type your name:</label>
      <input value={this.state.nameInput} onChange={this.handleInputChange}></input>
      <Welcome name={this.state.nameInput}/>
    </div>
  }
}

export function Login() {
  const {username, password, remember, isDisabled, currentValue, reset} = useForm()

  return <div>
    <label>Username:</label>
    <input name="username" type="text" value={username} onChange={currentValue}/>
    <label>Password:</label>
    <input name="password" type="password" value={password} onChange={currentValue}/>
    <input name='remember' type='checkbox' value={remember} onChange={currentValue}/>
    <button disabled={isDisabled}>Login</button>
    <button onClick={reset}>Reset</button>
  </div>
}

/* export class UncontrolledLogin extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value

    console.log({username, password})
  }

  usernameRef = React.createRef();

  componentDidMount() {
    this.usernameRef.current.focus();
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input name="username" ref={this.usernameRef}/>
        <label>Password:</label>
        <input name='password' type='password'/>
        <button type="submit">Login</button>
        <button type='reset'>Reset</button>
      </form>
    </div>
  }
} */

export class TodoList extends React.Component {
  state = {
    items: ['Workout', 'Cleaning', 'Watch some lessons'],
    item: ''
  }

  handleAddTodo = () => {
    this.setState({
      items: [...this.state.items, this.state.item],
      item: ''
    })
  }
  
  handleInputChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleResetTodo = () => {
    this.setState({
      items: ['']
    })
  }

  handleRemoveTodo = (index) => {
    const updatedItems = [...this.state.items];
    updatedItems.splice(index, 1);
    this.setState({
      items: updatedItems
    })
  }

  render () {
    // console.log(this.props.items);
    return <div>
      <h4>Todo List</h4>
      {this.props.render(this.state.items, this.handleRemoveTodo)}

      <input value={this.state.item} onChange={this.handleInputChange}/>
      <button onClick={this.handleAddTodo}>Add Todo</button>
      <button onClick={this.handleResetTodo}>Reset</button>
    </div>
  }
}

//input already clears when a Todo is added 

export function DisplayLanguage(props) {

  return (
    <div>
      <LanguageContext.Consumer>
        {language => (
          <div>
            <select value={language} onChange={props.handleChangeLanguage}>
              <option value="En">English</option>
              <option value="Tr">Turkish</option>
            </select>
            <h1>Selected Language: {language}</h1>
          </div>
        )}
      </LanguageContext.Consumer>
    </div>
  );
}

export function GithubUser({ username }) {
  const { data, error, loading, fetchUser } = useGithubUser(username)

  useEffect(() => {
    fetchUser(username)
  }, [fetchUser, username])

  return (
    <div>
      {loading && <h3>Loading...</h3>}
      {data && <h3>Github Username is: {data.name}, id is: {data.id}</h3>}
      {error && <h3>{error.message}</h3>}
    </div>
  )
}

export function GithubUserList() {
  const [usernames, setUsernames] = useState([])
  const [input, setInput] = useState('')

  const handleInput= (event) => {
    setInput(event.target.value)
  }

  const handleAddUser = () => {
    setUsernames([...usernames, input]);
    setInput('')
  }

  return(
    <div>
      <h2>Github user list</h2>
      <div>
        {usernames.map((username) => (
          <GithubUser username={username} key={username} />
        ))}
      </div>
      <input value={input} onChange={handleInput}/>
      <button onClick={handleAddUser}>Add User to the list</button>
    </div>
  )
}

export function CarDetails({initialData}) {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(inputRef.current);
    const carData = Object.fromEntries(formData.entries())
    console.log(carData)
    inputRef.current.reset();
  }

  return(
    <form ref={inputRef} onSubmit={handleSubmit}>
      <label htmlFor="model">Model:</label>
      <input name="model" value={initialData}/>
      <label htmlFor="year">Year:</label>
      <input name="year" value={initialData}/>
      <label htmlFor="color">Color:</label>
      <input name="color" value={initialData}/>
      <button>Submit</button>
    </form>
  )
}