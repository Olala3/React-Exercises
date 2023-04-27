import React from "react";


function Age(props) {
    return <div>
    {props.age > 18 && props.age < 65 && <p>Your age is {props.age}</p>}
    </div>;
}

export class Welcome extends React.Component {

    render(){
        return <div>
            { this.props.name
               ? <p>Welcome {this.props.name}!</p>
               : <p>Welcome Everyone!</p>
            }
            {this.props.age
            && this.props.name === 'John'
            && <Age age={this.props.age}/>}
        </div>
    }
}
