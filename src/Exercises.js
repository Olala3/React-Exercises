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

export class Counter extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
        }

        setInterval(() => {
            this.setState (
                {count: this.state.count +1}
            )
        }, 1000);
    }

    render(){
        return <div>
            <h1>Counter: {this.state.count}</h1>
        </div>
    }
}
