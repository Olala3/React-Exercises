import React from "react";


function Age(props) {
    if (props.age > 18) {
            return <p>Your age is {props.age}</p>
    } else {
           return <p>You are very young!</p>
    };
}

export class Welcome extends React.Component {

    render(){
        return <div>
            { this.props.name
               ? <p>Welcome {this.props.name}!</p>
               : <p>Welcome Everyone!</p>
            }
            <Age age={this.props.age}/>
        </div>
    }
}


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