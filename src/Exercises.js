import React from "react";

export class Welcome extends React.Component {

    render(){
        return <div>
            { this.props.name
               ? <p>Welcome {this.props.name}!</p>
               : <p>Welcome Everyone!</p>
            }
            <p>Your age is {this.props.age}</p>
        </div>
    }
}
