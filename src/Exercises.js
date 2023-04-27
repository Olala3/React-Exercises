import React from "react";


function Age(props) {
    return <p>Your age is {props.age}</p>;
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
