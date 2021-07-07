import { Component } from "react";

class Name extends Component{
    render(){
        return <h2>Hello {this.props.name} also known as {this.props.heroname}</h2>
    }
}
export default Name;