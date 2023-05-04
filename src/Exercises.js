import React, { useState } from "react";



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

/*
function DisplayCounter(props) {
    return <div>
        <h1>Counter: {props.count}</h1>
    </div>
}

export class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: props.initialValue,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
          this.setState((prevState) => ({
            count: prevState.count + this.props.increment,
          }));
        }, this.props.interval);
    }  

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
       return <DisplayCounter count={this.state.count}/>
    }
}
*/

export class ClickCounter extends React.Component {
    state = {count:0}
  
    handleClick = () => {
        this.setState((state) => ({ count: state.count + 1 }));
      };
  
    render() {
      return (
        <div>
          <p>Counter: {this.state.count}</p>
          <button onClick={this.handleClick}>Click me!</button>
        </div>
      );
    }
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

/*
export class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleLoginClick = () => {
    if (this.state.username && this.state.password) {
      this.props.onLogin(this.setState)
    }
  }

  handleReset = () => {
    this.setState({
      username: '',
      password: '',
    })
  }

  render(){
    const isDisabled = !this.state.username || !this.state.password;

    return <div>
    <label>Username:</label>
    <input name="username" type="text" value={this.state.username} onChange={this.handleInputChange}></input>
    <label>Password:</label>
    <input name="password" type="password" value={this.state.password} onChange={this.handleInputChange}></input>
    <button disabled={isDisabled} onClick={this.handleLoginClick}>Login</button>
    <button onClick={this.handleReset}>Reset</button>
    </div>
  }
}
*/

export class UncontrolledLogin extends React.Component {
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
}

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

  render () {

    return <div>
      <h4>Todo List</h4>
      <ul>
        {this.state.items.map(
          (item, index) =>
          <li key={index+item}>
            {item}
          </li>
        )}
      </ul>

      <input value={this.state.item} onChange={this.handleInputChange}/>
      <button onClick={this.handleAddTodo}>Add Todo</button>
      <button onClick={this.handleResetTodo}>Reset</button>
    </div>
  }
}

//input already clears when a Todo is added 